import './app-filter.css';

const AppFilter = (props) => {
    const btns = [
        {name: 'all', label: 'All Employees'},
        {name: 'rise', label: 'Employees Level Up'},
        {name: 'offerMore1000', label: 'Min Offer 1000$'},
    ];

    const buttons = btns.map(({name, label}) => {
        const activeFilter = props.filter === name;
        const clazz = activeFilter ? 'btn-light' : 'btn-outline-light';

        return (
            <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => {props.onFilterSelect(name)}}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}

            {/* <button className="btn btn-light" type="button">
                All Employees
            </button>
            <button className="btn btn-outline-light" type="button">
                Employees Level Up
            </button>
            <button className="btn btn-outline-light" type="button">
                Min Offer 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;