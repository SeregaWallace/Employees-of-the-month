import { Component } from 'react';
import './employee-add-form.css';


class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add New Employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Employee Name?"onChange={this.onValueChange} />
                    <input type="number"
                        name="salary"
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="Offer $?"onChange={this.onValueChange} />
    
                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeeAddForm;