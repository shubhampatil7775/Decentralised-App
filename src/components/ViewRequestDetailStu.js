import React, { Component } from 'react'
import Web3 from 'web3';
import Sch from '../abis/Adddoc.json';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';



class ViewRequestDetailStu extends Component {

    constructor(props) {
        super(props);
        this.state={
          currentuser:null,
          sch:null,
          RequestLength:null,
          Stunam:null,
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
          this.ViewRequestDetails();
      }

      ViewRequestDetails=async()=> {

        var requestlistchild = document.getElementById("requestlistchild");

          this.state.sch.methods.viewUser(this.state.currentuser,0).call({from:this.state.currentuser},(error,result)=>{
            //console.log(this.props.inde)
            if(!error)
		    {
            var bonafide = Number(result[0]);
			var bonafide_Value = result[1];
			
			var rector = Number(result[2]);
			var rector_Value = result[3];
			
			var scholor = Number(result[4]);
			var scholor_Value = result[5];
			
			var academics = Number(result[6]);
			var academics_Value = result[7];
			
			var dochash = Number(result[8]); 
            var dochash_Value = result[9]; 

            
		
			if(bonafide > 0)
			{
				if(bonafide == 2)
				{
					var bonafide_Status = "<font color='green'><b>Approved</b></font>";
				}
				else
				{
					var bonafide_Status = "Rejected";
					var bonafide_Value = "";
				}
				
				var listHTML = "<tr><td width='40%'>Driving Licence No.</td><td width='20%'>"+bonafide_Status+"</td><td width='40%' align='center'>"+bonafide_Value+"</td></tr>";
				requestlistchild.insertAdjacentHTML('beforeend',listHTML);
			}

			if(rector > 0)
			{
				if(rector == 2)
				{
					var rector_Status = "<font color='green'><b>Approved</b></font>";
				}
				else
				{
					var rector_Status = "<font color='red'><b>Rejected</b></font>";
					var rector_Value = "";
				}
				
				var listHTML = "<tr><td width='40%'>Name as per Driving Licence</td><td width='20%'>"+rector_Status+"</td><td width='40%' align='center'>"+rector_Value+"</td></tr>";
				requestlistchild.insertAdjacentHTML('beforeend',listHTML);
			}

			if(scholor > 0)
			{
				if(scholor == 2)
				{
					var scholor_Status = "<font color='green'><b>Approved</b></font>";
				}
				else
				{
					var scholor_Status = "<font color='red'><b>Rejected</b></font>";
					var scholor_Value = "";
				}
				
				var listHTML = "<tr><td width='40%'>Date Of Birth as per Driving Licence</td><td width='20%'>"+scholor_Status+"</td><td width='40%' align='center'>"+scholor_Value+"</td></tr>";
				requestlistchild.insertAdjacentHTML('beforeend',listHTML);
			}
			
			if(academics > 0)
			{
				if(academics == 2)
				{
					var academics_Status = "<font color='green'><b>Approved</b></font>";

					var DrivingLicenceHash = (academics_Value);
					document.getElementById("hdnDrivingLicenceHash").value=DrivingLicenceHash;
					
					var showDLBtn = "<button type='button' class='btn btn-primary btn-xs' onClick='showDrivingLicence()'>View Licence</button>";
				}
				else
				{
					var academics_Status = "<font color='red'><b>Rejected</b></font>";
					var academics_Value = "";
				}
				
				var listHTML = "<tr><td width='40%'>Digital Licence Copy</td><td width='20%'>"+academics_Status+"</td><td width='40%' align='center'>"+showDLBtn+"</td></tr>";
				requestlistchild.insertAdjacentHTML('beforeend',listHTML);
			}

			if(dochash > 0)
			{
				if(dochash == 2)
				{
					var dochash_Status = "<font color='green'><b>Approved</b></font>";
				}
				else
				{
					var dochash_Status = "<font color='red'><b>Rejected</b></font>";
					var dochash_Value = "";
				}
				
				var listHTML = "<tr><td width='40%'>Address as per Driving Licence</td><td width='20%'>"+dochash_Status+"</td><td width='40%' align='center'>"+dochash_Value+"</td></tr>";
				requestlistchild.insertAdjacentHTML('beforeend',listHTML);
			}
			
			
                
            }
            else
            {
                console.log(error);
            }
                
            })
      }

    render() {
        return (
            <div>
            <form name="IntelitixForm" method="post" action="pubcert.asp">
            <div className="container container_body">
                <div className="row">
                    <div className="col-md-6 center-block">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">View Requested Data</h3>
                            </div>
                            <div className="panel-body">
                                
                                
                                <table className="table table-bordered" id="requestlistchild">
                                <tbody>
                                    <tr>
                                        <td colSpan="2" align="center"><b>Requested Access</b></td>
                                    </tr>
                                </tbody>
                                </table>
                                

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

export default ViewRequestDetailStu

