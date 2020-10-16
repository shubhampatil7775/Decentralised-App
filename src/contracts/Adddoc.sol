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
        uint bonafide;
        uint rector;
        uint scholor;
        uint academics;
        uint dochash;
        uint status;
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
    

    function getUser(address ins,uint UserIndex) view public returns (string memory, string memory, string memory) {
        UserInfo memory ThisUser=UserMap[ins][UserIndex];
        return (ThisUser.FullName, ThisUser.EmailID, ThisUser.MobileNo);
    }
    
    function AddRequest(address UserAddress,string memory stuname,uint bonafide,uint rector,uint scholor,uint academics,uint dochash,uint status ) public
    {
        RequestMap[UserAddress].push(Request(stuname,bonafide,rector,scholor,academics,dochash,status));
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

    function ViewRequestDetail(address UserAddress, uint RequestIndex) view public returns(string memory stuname,uint bonafide,uint rector,uint scholor,uint academics,uint dochash,uint status)
    {
        Request memory ThisRequest=RequestMap[UserAddress][RequestIndex];
        return (ThisRequest.stuname, ThisRequest.bonafide,ThisRequest.rector, ThisRequest.scholor, ThisRequest.academics, ThisRequest.dochash,ThisRequest.status);
    }

    function UpdateRequestStatus(address UserAddress, uint RequestIndex, uint bonafide,uint rector,uint scholor,uint academics,uint dochash,uint status) public
    {
        RequestMap[UserAddress][RequestIndex].bonafide=bonafide;
		RequestMap[UserAddress][RequestIndex].rector=rector;
	    RequestMap[UserAddress][RequestIndex].scholor=scholor;
		RequestMap[UserAddress][RequestIndex].academics=academics;
		RequestMap[UserAddress][RequestIndex].dochash=dochash;
		RequestMap[UserAddress][RequestIndex].status=status;
    }
   
}
                                        