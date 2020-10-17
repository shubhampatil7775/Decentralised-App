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

    struct Userdata{
        string bonafide;
        string rector;
        string scholor;
        string academics;
        string dochash;
    }

    mapping(address => UserInfo[]) UserMap;
    mapping(address => Userdata[]) Userdat;
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

    function Adduserdata(address UserAddress,string memory bonafide,string memory rector,string memory scholor,string memory academics,string memory dochash) public 
    {
        Userdat[UserAddress].push(Userdata(bonafide,rector,scholor,academics,dochash));
    }
    
    function viewUser(address UserAddress, uint RequestIndex) public view returns(uint,string memory,uint,string memory,uint,string memory,uint,string memory,uint,string memory)
    {
		Userdata memory ThisUser=Userdat[UserAddress][0];
        Request memory ThisRequest=RequestMap[UserAddress][RequestIndex];
        return (ThisRequest.bonafide,ThisUser.bonafide,ThisRequest.rector,ThisUser.rector,ThisRequest.scholor,ThisUser.scholor,ThisRequest.academics,ThisUser.academics,ThisRequest.dochash,ThisUser.dochash);
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
                                        