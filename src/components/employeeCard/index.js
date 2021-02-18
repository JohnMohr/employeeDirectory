import React from 'react';
import "style.css";

function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="img-container d-flex align-items-center justify-content-center">
                <img alt={props.name.first} src={props.picture.thumbnail}/>
            </div>
            <div className="emp-container">
                <ul>
                    <li>
                        <strong> Name:</strong> {props.name.title} {props.name.first} {props.name.last}
                    </li>
                    <li>
                        <strong> </strong>
                    </li>
                    <li>
                        <strong> </strong>
                    </li>
                    <li>
                        <strong> </strong>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default EmployeeCard;