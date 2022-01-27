import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                All Employees
            </button>
            <button className="btn btn-outline-light" type="button">
                Employees Level Up
            </button>
            <button className="btn btn-outline-light" type="button">
                Min Offer 1000$
            </button>
        </div>
    )
}

export default AppFilter;