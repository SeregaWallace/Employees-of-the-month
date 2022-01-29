import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';


function App() {

    const data = [
        {name: 'Alex W.', salary: 500, increase: false, id: 1},
        {name: 'John C.', salary: 3000, increase: false, id: 2},
        {name: 'Carl M.', salary: 15000, increase: true, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeeAddForm/>
        </div>
    )
}

export default App;