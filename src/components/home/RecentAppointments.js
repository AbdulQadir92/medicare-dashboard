import { RecentAppointmentsStyled, Table, Thead, Tbody } from "../../styles/components/home/RecentAppointments.styled";
import { useTable, useSortBy, useGlobalFilter, useFilters, useAsyncDebounce, usePagination, useRowSelect } from 'react-table';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import { ColumnFilter } from "../reactTable/ColumnFilter";
import { IndeterminateCheckbox } from "../reactTable/Checkbox";


const RecentAppointments = ({ _columns, recentAppointments }) => {
    return (
        <RecentAppointmentsStyled>

            <h2>Recent Appointments</h2>
            <span>
                Search: {' '}
                <input placeholder="Search" value={value || ''} onChange={(e) => {
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
                <Tbody {...getTableBodyProps()}>
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
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                <div>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(pageNumber);
                        }}
                        style={{ width: '100px' }}
                    />
                </div>
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} style={{ width: '250px' }}>
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{ display: 'none' }}>
                <pre>
                    <code>
                        {JSON.stringify(
                            {
                                selectedRowIds: selectedRowIds,
                                'selectedFlatRows[].original': selectedFlatRows.map(
                                    d => console.log(d.original)
                                ),
                            },
                            null,
                            2
                        )}
                    </code>
                </pre>
            </div>
        </RecentAppointmentsStyled>
    )
}

export default RecentAppointments