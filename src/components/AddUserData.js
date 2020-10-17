import React, { Component } from 'react'
import Web3 from 'web3';
import Sch from '../abis/Adddoc.json';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

class AddUserData extends Component {

    constructor() {
        super();
        this.state={
          currentuser:null,
          sch:null
        } 
      }
  
  
      async componentWillMount(){
              await this.loadWeb3()
      }
      
      
      async loadWeb3(){
          if(window.ethereum){
              window.web3=new Web3(window.ethereum);//new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));   //new Web3(window.ethereum);
          
              await window.ethereum.enable();
          }
          else if(window.web3)
          {
              window.web3=new Web3(window.web3.currentProvider)
          }
          else{
              window.alert('MetaMask not detected');
          }
          this.state.currentuser= await window.web3.eth.getCoinbase();
          this.state.sch = new window.web3.eth.Contract(Sch.abi,Sch.networks['5777'].address);
  
      }

      AddData=async()=> {

        var DL_No = document.getElementById("txtLicenceNo").value;
	    var DL_Name = document.getElementById("txtFullName").value;
	    var DL_DOB = document.getElementById("txtDOB").value;
        var DL_Address = document.getElementById("txtAddress").value;
        var DL_NewName = document.getElementById("txtNewName").value;
        this.state.sch.methods.Adduserdata(this.state.currentuser,DL_No,DL_Name,DL_DOB,DL_Address,DL_NewName).send({ from: this.state.currentuser }).then((r) => {
            console.log(r);
            //return this.setState(r)
            
         });
      }


    render() {
        return (
            <div>
            <form name="IntelitixForm" method="post" >
            <div className="container container_body">
                <div className="row">
                    <div className="col-md-4 center-block">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">Add Driving Licence Details</h3>
                            </div>
                            <div className="panel-body">

                            <div class="form-group">
						<label class="control-label" for="txtLicenceNo">Driving Licence No.</label>
						<input class="form-control" name="txtLicenceNo" id="txtLicenceNo" type="text"  placeholder="Licence No."/>
					</div>
					<div class="form-group">
						<label class="control-label" for="txtFullName">Name as per Driving Licence</label>
						<input class="form-control" name="txtFullName" id="txtFullName" type="text" placeholder="Name"/>
					</div>
					<div class="form-group">
						<label class="control-label" for="txtDOB">DOB as per Driving Licence</label>
						<input class="form-control" name="txtDOB" id="txtDOB" type="text" placeholder="DD/MM/YYYY"/>
					</div>
					<div class="form-group">
						<label class="control-label" for="txtAddress">Address as per Driving Licence</label>
						<textarea class="form-control" rows="4" name="txtAddress" id="txtAddress" placeholder="Address here ..."></textarea>
					</div>
                    <div class="form-group">
						<label class="control-label" for="txtNewName">Name as per Driving Licence</label>
						<input class="form-control" name="txtNewName" id="txtNewName" type="text"  placeholder=" NEw Name"/>
					</div>
					   
                                
                                <div className="aligncenter">
                                    <button type="button" className="btn btnsm btn-primary" onClick={this.AddData}>Add Driving Licence</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            </div>
        )
    }
}

export default AddUserData
