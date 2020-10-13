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
								<input id="chk_DL_No" type="checkbox" name="chk_DL_No"/>
							</td>
							<td width="90%">
								Bonafide Certificate
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="chk_DL_Name" type="checkbox" name="chk_DL_Name"/>
							</td>
							<td width="90%">
								Book Bank
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="chk_DL_DOB" type="checkbox" name="chk_DL_DOB" />
							</td>
							<td width="90%">
								Rector Docs
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="chk_DL_Hash" type="checkbox" name="chk_DL_Hash"/>
							</td>
							<td width="90%">
								Scholorship
							</td>
						</tr>
						<tr>
							<td width="10%">
								<input id="chk_DL_Address" type="checkbox" name="chk_DL_Address" />
							</td>
							<td width="90%">
								Academics Fees
							</td>
						</tr>
                        </tbody>
					</table>
					
					<div className="aligncenter">
						<button type="button" className="btn btnsm btn-primary">Request Access</button>
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
