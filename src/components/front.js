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


    //filtered


    //handleformsubmit



    //render and return

}

