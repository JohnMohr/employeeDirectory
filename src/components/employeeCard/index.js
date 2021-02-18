import React from 'react';
import "style.css";

function EmployeeCard(props) {
    return (
        <Thead>
            <tr>
                <th>
                    <img alt={props.firstName} src={props.picture} />
                </th>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.city}</td>
                <td>{props.cell}</td>
                <td>{props.email}</td>
            </tr>
        </Thead>
    )
}

export default EmployeeCard;