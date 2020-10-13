import React, { Component } from 'react';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class AddDoc extends Component {

    constructor(props) {
        super(props)
        this.state={
            doc:''
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
         return this.setState({ doc: filesAdded.cid.string })
         
    })
  }

  render() {
    return (
      <div>
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.doc}`} />
                
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
                </div>
            
    );
  }
}

export default AddDoc;