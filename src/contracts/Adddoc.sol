pragma solidity >=0.4.22 <0.8.0;


contract Adddoc {
     string memeHash;

     struct UserInfo{
		string FullName;
		string EmailID;
		string MobileNo;
    }

    address [] public User;
    mapping(address => UserInfo) UserMap;



    function set(string memory _memeHash) public {
        memeHash = _memeHash;
    }

    function get() public view returns (string memory) {
        return memeHash;
    }


    function AddUser(address UserAddress,string memory FullName,string memory EmailID,string memory MobileNo) public
    {
        UserMap[UserAddress]=UserInfo(FullName,EmailID,MobileNo);
        User.push(UserAddress);
    }

    function getUsers() view public returns (address[] memory) {
        return User;
    }

    function getUser(address ins) view public returns (string memory, string memory, string memory) {
        return (UserMap[ins].FullName,UserMap[ins].EmailID,UserMap[ins].MobileNo );
    }

    function AddDLRequest(address UserAddress,string RequestedBy, uint DL_No, uint DL_Name, uint DL_DOB, uint DL_Hash, uint DL_Address, uint DL_OverAll_Status)
    {
        DLRequestMap[UserAddress].push(DLRequest(RequestedBy, DL_No, DL_Name, DL_DOB, DL_Hash, DL_Address, DL_OverAll_Status));
    }
}
