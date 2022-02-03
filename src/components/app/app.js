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
                {name: 'Alex W.', salary: 500, increase: false, rise: false, id: 1},
                {name: 'John C.', salary: 3000, increase: false, rise: true, id: 2},
                {name: 'Carl M.', salary: 15000, increase: true, rise: false, id: 3},
            ],
            nameTurn: '',
            filtered: 'all',
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
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, [prop]: !item[prop]
                    }
                }
                return item
            })
        }))
    }

    employeeSearch = (items, nameTurn) => {
        if (nameTurn.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(nameTurn) > -1;
        })
    }

    onSearch = (nameTurn) => {
        this.setState({
            nameTurn
        })
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
                
            case 'offerMore1000':
                return items.filter(item => item.salary > 1000);

            default:
                return items;
        }
    }

    onFilterSelect = (filtered) => {
        this.setState({filtered});
    }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {
    //                     ...item, rise: !item.rise
    //                 }
    //             }
    //             return item
    //         })
    //     }))
    // }

    render() {
        const { data, nameTurn, filtered } = this.state;

        const allEmployees = this.state.data.length;
        const employeeIncreased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filter(this.employeeSearch(data, nameTurn), filtered);

        return (
            <div className="app">
                <AppInfo allEmployees={allEmployees} employeeIncreased={employeeIncreased}/>
    
                <div className="search-panel">
                    <SearchPanel onSearch={this.onSearch}/>
                    <AppFilter filter={filtered}
                                onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList data={visibleData}
                            onDelete={this.deleteItem}
                            onToggleProp={this.onToggleProp}
                            />
    
                <EmployeeAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;