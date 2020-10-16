import React, { Component } from 'react'
import Web3 from 'web3';
import Sch from '../abis/Adddoc.json';

class AddRequest extends Component {

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

      
    AddRequest=async(event)=> {

        var _stuname = document.getElementById("txtStudentName").value;
        var stuname=0;
        var bonafide=0;
        var book_bank=0;
        var rector=0;
        var scholor=0;
        var academics=0;
        var dochash=0;
        var status=1;

     if(document.getElementById("bonafide").checked)
	{
		bonafide=1;
		//console.log(bonafide)
	}

	
	if(document.getElementById("rector").checked)
	{
		rector=1;
	}
	
	if(document.getElementById("scholorship").checked)
	{
		scholor=1;
	}
	
	if(document.getElementById("academics").checked)
	{
		academics=1;
    }
    
    if(document.getElementById("dochash").checked)
	{
		dochash=1;
    }
    

        this.state.sch.methods.AddRequest(this.state.currentuser,_stuname,bonafide,rector,scholor,academics,dochash,status).send({ from: this.state.currentuser }).then((r) => {
          console.log(r);
          //return this.setState(r)
          
       });
  
       
  
      }



    render() {
        return (
            <div>
                <form name="IntelitixForm" method="post">
<div className="container container_body">
	<div className="row">
		<div className="col-md-4 center-block">
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Request Access</h3>
				</div>
				<div className="panel-body">

					<div className="form-group">
						<label className="control-label" htmlFor="txtStudentName">Requesting Student UserName</label>
						<input className="form-control" name="txtStudentName" id="txtStudentName" type="text"  placeholder="Student Name"/>
					</div>
				
					<div className="form-group">
						<label className="control-label" htmlFor="txtUserAddress">User Blockchain ID</label>
						<input className="form-control" name="txtUserAddress" id="txtUserAddress" type="text" placeholder="User Blockchain ID"/>
					</div>
				
					<table className="table table-bordered" id="certlistparent">
                        <thead>
						<tr>
							<td colSpan="2" align="center"><b>Select the required access</b></td>
						</tr>
                        </thead>

                        <tbody>
						<tr>
							<td width="10%">
								<input id="bonafide" type="checkbox" name="bonafide"/>
							</td>
							<td width="90%">
								Bonafide Certificate
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="rector" type="checkbox" name="rector" />
							</td>
							<td width="90%">
								Rector Docs
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="scholorship" type="checkbox" name="scholorship"/>
							</td>
							<td width="90%">
								Scholorship
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="academics" type="checkbox" name="academics" />
							</td>
							<td width="90%">
								Academics Fees
							</td>
						</tr>
                        <tr>
							<td width="10%">
								<input id="dochash" type="checkbox" name="dochash" />
							</td>
							<td width="90%">
								Documeny hash
							</td>
						</tr>
                        </tbody>
					</table>
					
					<div className="aligncenter">
						<button type="button" className="btn btnsm btn-primary" onClick={this.AddRequest}>Request Access</button>
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

export default AddRequest
