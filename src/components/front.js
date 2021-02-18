import React, { Component } from "react";
import API from "../utils/API";


export default class front extends Component {
    state = {
        name: "",
        results: [],
        filtered: [],
        search: "",
    };
        //component mounted now do this
    componentDidMount() {
        this.searchAPI();
    }
        // this is this
    searchAPI = () => {
        API.search()
        .then((res)=> {
            this.setState({
                results: res.data.results,
                filtered: res.data.results,
            });
            console.log(res);
        })
        .catch((err) => console.log(err));
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

    //handleformsubmit
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchAPI(this.state.search);
      };

    //filtered

    //render and return
      render() {
          return (
            <div className="wrapper">
                <Grid container>
                    <h1 className="title"> Employee Directory</h1>
                </Grid>
                <Grid container spacing={2}>
                    {
                    employees.map(employee =>
                    <EmployeeCard>
                        key={employee.id}
                        name=
                    </EmployeeCard>)
                    }
                </Grid>
            </div>
          )
      }
}

