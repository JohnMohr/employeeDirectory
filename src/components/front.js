import React, { Component } from "react";
import API from "../utils/API";
import EmployeeCard from "./employeeCard"
import Search from "./Search"
import Wrapper from "./Wrapper"
import Col from "./Col"
import "./front.css"


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
                lastName: e.name.last,
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

    resetPage() {
        window.location.reload(false);
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
                            <h2>ROYAL SUBJECT DISPENSARY</h2>
                            <h4> Ye Olde Employee Database.</h4>
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
                                        <th>Email</th>
                                        <th>Full</th>
                                        <th>Name</th>
                                        <th>City</th>
                                        <th>Phone</th> 
                                    </tr>
                                </thead>
                                {[...this.state.employees].map((item) => (
                                <EmployeeCard
                                picture={item.picture}
                                firstName={item.firstName} 
                                lastName={item.lastName}
                                city={item.city}
                                email={item.email}
                                phone={item.cell}
                                key={item.key}
                                />
                                ))}
                            </table>
                        </Col>
                    </div>
                </div>
            </Wrapper>
          )
      }
}

