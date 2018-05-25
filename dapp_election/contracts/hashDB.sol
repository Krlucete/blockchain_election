pragma solidity ^0.4.7;

contract  hashDB
{
    mapping(string => voter) voters;
    uint16 year;
    uint8 month;
    uint8 day;
    uint8 hour;
    uint8 minute;
    uint electionID;
    address owner;
    
    struct voter
    {
        string hashDB;
        uint vote;
        uint vElectionID;
    }
    
    //Modifiers
    modifier ownerShip{
        require(msg.sender == owner);
        _;
    }

    function hashDB() {
        owner = msg.sender;
        electionID = 0;
    }
    

    function setStartTime(uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute) public ownerShip returns(bool)
    {
         year=_year;
         month=_month;
         day=_day;
         hour=_hour;
         minute=_minute;
         electionID++;
         return true;
    }
    
    function setHashDB(string _hashDB) public ownerShip{
        voters[_hashDB].hashDB = _hashDB;
        voters[_hashDB].vote = 1;
        voters[_hashDB].vElectionID = electionID;
    }
    
    function returnHashDB(string _hashDB) public ownerShip returns(uint){
        if(voters[_hashDB].vElectionID == electionID){
            return voters[_hashDB].vote;
        }
        else return 99;
    }
    
    function controlHashDB(string _hashDB) public ownerShip returns(bool){
        if(voters[_hashDB].vote == 1 && voters[_hashDB].vElectionID==electionID){
            voters[_hashDB].vote = 0;
            return true;
        }
        else{
            return false;
        }
    }

}
