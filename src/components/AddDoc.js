import React, { Component } from 'react';
import Web3 from 'web3';
import Meme from '../abis/Adddoc.json'
import App from '../App';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class AddDoc extends Component {

    constructor(props) {
        super(props)
        this.state={
            memehash:''
        }
    }
  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = async(event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    const filesAdded=await ipfs.add(this.state.buffer)
    console.log(filesAdded)
    
       this.props.contract.methods.set(filesAdded.cid.string).send({ from: this.props.account }).then((r) => {
         return this.setState({ memeHash: filesAdded.cid.string })
         
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meme of the Day
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
               
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.memeHash}`} />
                <p>&nbsp;</p>
                <h2>Change Meme</h2>
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDoc;