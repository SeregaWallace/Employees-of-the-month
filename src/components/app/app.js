import {Component} from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex W.', salary: 500, increase: false, id: 1},
                {name: 'John C.', salary: 3000, increase: false, id: 2},
                {name: 'Carl M.', salary: 15000, increase: true, id: 3},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(element => element.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {    
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
    
                <EmployeeAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;