import React from 'react';
import "style.css";

function EmployeeCard(props) {
    return (
        <Thead>
            <tr>
                <th>
                    <img alt={props.name.first} src={props.picture.large} />
                </th>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.location.city}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
            </tr>
        </Thead>
    )
}

export default EmployeeCard;