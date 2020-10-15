pragma solidity >=0.4.22 <0.8.0;


contract Adddoc {
     string memeHash;

     struct UserInfo{
		string FullName;
		string EmailID;
		string MobileNo;
    }

    struct Request{
        string stuname;
        string bonafide;
        string book_bank;
        string rector;
        string scholor;
        string academics;
        string dochash;
        uint256 status;
    }

    mapping(address => UserInfo[]) UserMap;
    mapping(address => Request[]) RequestMap;



    function set(string memory _memeHash) public {
        memeHash = _memeHash;
    }

    function get() public view returns (string memory) {
        return memeHash;
    }


    function AddUser(address UserAddress,string memory FullName,string memory EmailID,string memory MobileNo) public
    {
        UserMap[UserAddress].push(UserInfo(FullName,EmailID,MobileNo));
    }
    

    function getUser(address ins,uint256 UserIndex) view public returns (string memory, string memory, string memory) {
        UserInfo memory ThisUser=UserMap[ins][UserIndex];
        return (ThisUser.FullName, ThisUser.EmailID, ThisUser.MobileNo);
    }
    
    function AddRequest(address UserAddress,string memory stuname,string memory bonafide,string memory book_bank,string memory rector,string memory scholor,string memory academics,string memory dochash,uint status ) public
    {
        RequestMap[UserAddress].push(Request(stuname,bonafide,book_bank,rector,scholor,academics,dochash,status));
    }
    
    function ViewRequestLength(address UserAddress) view public returns(uint)
    {
        return RequestMap[UserAddress].length;
    }
    
    function ViewRequestHeader(address UserAddress, uint RequestIndex) view public returns(string memory stuname, uint status)
    {
        Request memory ThisRequest=RequestMap[UserAddress][RequestIndex];
        return (ThisRequest.stuname, ThisRequest.status);
    }
   
}
                                                                                                                                