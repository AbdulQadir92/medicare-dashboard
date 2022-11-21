
export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
        <span>
            Search: {' '}
            <input placeholder="Search" value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}