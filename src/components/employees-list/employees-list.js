import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleRise, onToggleIncrease}) => {

    const elements = data.map(item => {
        const {id, ...items} = item;

        return (
            <EmployeesListItem key={id} {...items}
                                onDelete={() => onDelete(id)}
                                onToggleRise={() => onToggleRise(id)}
                                onToggleIncrease={() => onToggleIncrease(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;