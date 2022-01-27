import './employee-add-form.css';


const EmployeeAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add New Employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Employee Name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Offer $?" />

                <button type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default EmployeeAddForm;