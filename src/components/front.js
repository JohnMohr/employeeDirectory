import React, { Component } from "react";
import API from "../utils/API";
import EmployeeCard from "./employeeCard"
import Search from "./Search"
import Wrapper from "./Wrapper"
import Col from "./Col"


export default class front extends Component {
    state = {
        employees: [],
        search: "",
    };
        //component mounted now do this
    componentDidMount() {
        this.searchAPI();
    }
        // this is what I meant when I said this
    searchAPI = () => {
        API.search()
        .then((res)=> {
            this.setState({
               employees: res.data.results.map((e, i) => ({
                firstName: e.name.first,
                lastname: e.name.last,
                picture: e.picture.large,
                email: e.email,
                cell: e.cell,
                city: e.location.city,
                key: i,
               })),
            });
        })
        .catch((err) => console.log(err));
    }


    searchEmployee = (filter) => {
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee)=> {
            
            let values = Object.values(employee).join('').toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        
        this.setState({ employees: filteredList });
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
        console.log('handle ', this.state.search)
      };

    //handleformsubmit
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
      };

    

    //render and return
      render() {
          return (
            <Wrapper>
                <div className ="container">
                    <div className="row">
                        <Col size="md-4">
                            <h2>EMPLOYEE DISPENSARY</h2>
                            <Search
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Col>
                    </div>
                
                    <div className="row">
                        <Col size="md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Cell</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                            </table>
                        </Col>
                    </div>
                </div>
            </Wrapper>
          )
      }
}

