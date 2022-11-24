import { ReactTableStyled, Table, Thead, Tbody, Pagination, Left, Right, ButtonMain, ButtonSec } from "../../styles/components/reactTable/ReactTable.styled";
import { useTable, useSortBy, useGlobalFilter, useFilters, useAsyncDebounce, usePagination, useRowSelect } from 'react-table';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ColumnFilter } from "../reactTable/ColumnFilter";
import { IndeterminateCheckbox } from "../reactTable/Checkbox";


const ReactTable = ({ heading, _columns, _data, fillForm = () => { }, _checkbox = true, pg = "" }) => {

    const handleClick = (e) => {
        fillForm(e.target.closest('tr'));
    }

    // const columns = useMemo(() => _columns, []);
    // const data = useMemo(() => _data, []);
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter,
            disableFilters: true
        }
    }, []);

    const tableInstance = useTable({
        columns: _columns,
        data: _data,
        initialState: { pageSize: 8 },
        defaultColumn
    }, useFilters, useGlobalFilter, useSortBy, usePagination, useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllPageRowsSelectedProps }) => (
                        <>
                            {_checkbox && (<div>
                                {/* <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} /> */}
                                Edit
                            </div>)}
                        </>
                    ),
                    Cell: ({ row }) => (
                        <>
                            {_checkbox && (<div>
                                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} onClick={handleClick} />
                            </div>)}
                        </>

                    ),
                },
                ...columns,
            ])
        }
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,

    } = tableInstance;

    const { globalFilter, pageSize } = state;

    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 500);

    const { pageIndex } = state;

    return (
        <ReactTableStyled>
            <h2>{heading}</h2>
            <span>
                <input type="search" placeholder="Search" value={value || ''} onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }} />
            </span>

            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, index) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? column.isSortedDesc ? <FontAwesomeIcon icon={faSortDown} /> : <FontAwesomeIcon icon={faSortUp} /> : ''}
                                    </span>
                                    <div>
                                        {column.canFilter ? column.render('Filter') : null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()} data-tbody pg={pg}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    return <td {...cell.getCellProps()} key={index}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </Tbody>
            </Table>
            <Pagination>
                <Left>
                    <div>
                        <span>
                            Go to page:
                        </span>
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(pageNumber);
                            }}
                        />
                    </div>
                    <div>
                        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            {[8, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </Left>
                <Right>
                    <ButtonSec onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{1}</ButtonSec>
                    <ButtonMain onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</ButtonMain>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <ButtonMain onClick={() => nextPage()} disabled={!canNextPage}>Next</ButtonMain>
                    <ButtonSec onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{pageCount}</ButtonSec>
                </Right>
            </Pagination>
        </ReactTableStyled>
    )
}

export default ReactTable