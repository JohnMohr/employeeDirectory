import React from 'react';
import "./style.css";

function EmployeeCard(props) {
    return (
        <thead>
            <tr >
                <th>
                    <img alt={props.firstName} src={props.picture} />
                </th>
                <td class="empcard">{props.email}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.city}</td>
                <td>{props.phone}</td>
                
            </tr>
        </thead>
    )
}

export default EmployeeCard;