import React, { Component } from 'react'
import Web3 from 'web3';
import Sch from '../abis/Adddoc.json';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class ViewRequestDetailStu extends Component {

    constructor(props) {
        super(props);
        this.state={
          currentuser:null,
          sch:null,
          RequestLength:null,
		  Stunam:null,
		  consthash:null
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
	  
	  go() {
		window.alert("go")
		console.log("hi")
	  }

	  showDrivingLicence=async()=>
	  {	
		  console.log(this.state.consthash)
		  document.location = "https://ipfs.io/ipfs/"+this.state.consthash
		  
		  
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
				const tryTable=document.getElementById('requestlistchild');
				const table=tryTable.getElementsByTagName('tbody')[0];
				
				var row1=table.insertRow();
                
                   
				var col1=row1.insertCell(0);
				var newText1  = document.createElement('span');
				newText1.innerHTML="Required Document";
				col1.appendChild(newText1);
				
				var col1=row1.insertCell(1);
				var newText1  = document.createElement('span');
				if(dochash == 2)
				{
					newText1.innerHTML="Approved";
					newText1.style.color="green"
				}
				else
				{
					newText1.innerHTML="Rejected";
				}
				col1.appendChild(newText1);

                
                var col1=row1.insertCell(2);
                var newText1  = document.createElement('span');

                var temnewText  = document.createElement('BUTTON');
				temnewText.innerHTML="View";
				temnewText.onclick=()=>{ 
					document.location = "https://ipfs.io/ipfs/"+this.state.consthash
                };
               
                newText1.appendChild(temnewText);
				col1.appendChild(newText1);
		
				this.state.consthash=dochash_Value;
				
	
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
			<input type="hidden" id="hdnDrivingLicenceHash" name="hdnDrivingLicenceHash" value=""></input>
            </div>

			
        )
    }
}

export default ViewRequestDetailStu

