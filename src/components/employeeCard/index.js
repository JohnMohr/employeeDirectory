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
                        <strong> Age: </strong> {props.dob.age} {props.dob.date}
                    </li>
                    <li>
                        <strong> Location:</strong> {props.location.street.number} {props.location.street.name} {props.location.city}, {props.location.state}, {props.location.country}. {props.location.postcode}
                    </li>
                    <li>
                        <strong> Timezone: </strong> {props.location.timezone.offset} {props.location.timezone.description}
                    </li>
                    <li>
                        <strong> Email:</strong> {props.email}
                    </li>
                    <li>
                        <strong> Phone: </strong> {props.phone} {props.cell}
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default EmployeeCard;