// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;


contract Adddoc {
    string newhash;
    
    function set(string memory _hash) public {
        newhash=_hash;
    }

    function get() public view returns(string memory) {
        return newhash;
        
    }
}