import React, { Component } from "react";
import API from "../../utils/API";
import LocForm from "../LocForm"
import Nav from "../Nav";
import Service from "../Service";


class Location extends Component {
  state = {
    zipcode: "",
    isZipValid: false,
    databaseZip:[],
    carMake:""
  };

  componentDidMount() {
    this.getDataBaseZip();
  }

  handleCarChange = (e) =>{
    this.setState({carMake: e.target.value});
  }
  
  getDataBaseZip = () =>{
    API.getZipCode()
      .then(res =>{
        this.setState({databaseZip:res.data});
        // console.log(`State of databaseZip[] is ${this.state.databaseZip}`);
      })
      .catch(err=> console.log(err));      
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleLocSubmit = event => {
    event.preventDefault();
    this.searchZipCode(this.state.zipcode);
    this.setState({
      zipcode : ""
    });
  };

  searchZipCode = query => {
      query = parseInt(query,10);
      console.log(`I am query for searchZipCode() ${query}`);
      let valid = false;
      const validity = this.state.databaseZip.forEach(value=>{
        if(value === query){
          console.log("I am there");
          valid = true;
        }
      });
      console.log(`Valid is ${valid}`);
      if(valid){
        this.setState({isZipValid : true}, ()=>{
          console.log(`Now state is uptodate ${this.state.isZipValid}`);
        });
      } else{
        this.setState((prevState,props) =>{
          return{
            isZipValid : false
          }
        }, ()=>{
          console.log(`Now state is uptodate ${this.state.isZipValid}`);
        });
      }
        
  };

  render(){
    return(
      <div>
          <Nav handleCarChange={this.handleCarChange} value={this.state.carMake}/>
          <LocForm 
            name ="zipcode" 
            placeholder ="ZIPCODE" 
            value={this.state.zipcode} 
            handleInputChange={this.handleInputChange}
            handleLocSubmit={this.handleLocSubmit}
          />
         {this.state.isZipValid ? (<Service/>) : (<h2 className="text-center"> Please enter a valid ZipCode</h2>)}
    </div>

    ); 
  }

 
}

export default Location;
