import './app-info.css';

const AppInfo = ({allEmployees, employeeIncreased}) => {
    return (
        <div className="app-info">
            <h1>Accounting For Employees In The Company N</h1>
            <h2>Total Number Of Employees: {allEmployees}</h2>
            <h2>Employees Of The Month: {employeeIncreased}</h2>
        </div>
    )
}

export default AppInfo;