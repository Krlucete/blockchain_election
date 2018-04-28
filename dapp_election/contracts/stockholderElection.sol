pragma solidity ^0.4.7;

import "./dateTime.sol";

contract stockholderElection is DateTime
{
    mapping(uint => uint) voteCount; 
    mapping(uint => string) candidate; 
    mapping(string => voter) voters;
    uint public numCandidates;
    uint public votePhaseStartTime;
    uint public votePhaseEndTime;
    uint public winnerIndex;
    uint public tieIndex;
    uint public electionID;
    uint public totalVoteCount;
    uint public maxStockCount;
    uint MIN_VOTE_TIME = 30;
    address public owner;
    address public voteManager;

    struct voter
    {
        uint stockCount;
        uint electionID;
        bool isRegistered;
    }
    
    //Modifiers
    modifier voteAlreadyStarted{ //투표 설정후 미시작 상태
        require(now > votePhaseStartTime);
        _;
    }
    modifier voteFinished { 
        require(now > votePhaseEndTime);
        _;
    }
    modifier ownerShip{
        require(msg.sender == owner);
        _;
    }
    modifier voterShip{
        require(msg.sender == voteManager);
        _;
    }

    event logString(string);
    event logInt(uint);
    event voteWinner(string, string);

    function stockholderElection() {
        owner = msg.sender;
        voteManager = 0xca35b7d915458ef540ade6068dfe2f44e8fa733c;
    }
    
    function startVote(uint _maxStockCount, uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute, uint8 _endHour) public voteAlreadyStarted voteFinished ownerShip
    {
        require((3600*_endHour) >= MIN_VOTE_TIME);
        uint timeStamp = toTimestamp(_year,_month,_day,_hour,_minute);
        votePhaseStartTime = timeStamp;
        votePhaseEndTime = timeStamp + (3600*_endHour);
        resetVoteCount();
        maxStockCount = _maxStockCount;
        numCandidates = 0;
        winnerIndex = 0;
        tieIndex = 0;
        electionID++;
    }

    function resetVoteCount() private
    {
        for (uint i=1; i<=numCandidates; i++)
        {
            voteCount[i] = 0;
        }
    }

    function addCandidate(string _name) public
    {
        require(numCandidates <= 20);
        numCandidates += 1;
        candidate[numCandidates] = _name;
    }

    function register(uint _stock, string _voter) public
    {
        voters[_voter].stockCount = _stock;
        voters[_voter].isRegistered = true;
    }
    
    function castMandate(string _voted, string _voter) public voteAlreadyStarted {
        require(getRegistrationStatus(_voted));
        require(getRegistrationStatus(_voter));
         if (now > votePhaseEndTime) return;
         
         if(voters[_voted].isRegistered == true){
             voters[_voted].stockCount += voters[_voter].stockCount;
             voters[_voter].stockCount = 0;
             logString("Mandate complete.");
         }
         else 
         {
            logString("Mandate could not be read!");
         }
         
    }

    function castVote(uint _vote, string _voter) public voteAlreadyStarted
    {
        require(!getHasVoted(_voter));
        require(getRegistrationStatus(_voter));
        if (now > votePhaseEndTime) return;

        // record the vote
        if (_vote <= numCandidates) 
        {
            voteCount[_vote] += voters[_voter].stockCount;
            totalVoteCount += voters[_voter].stockCount;
            voters[_voter].stockCount = 0;
            voters[_voter].electionID = electionID;
            logString("Vote counted.");
        }  
        else 
        {
            logString("Vote could not be read!");
        }
    }

    function countVotes() voteFinished public
    {
        for (uint i=1; i<= numCandidates; i++)
        {
            if (voteCount[i] == voteCount[winnerIndex]) tieIndex = i;
            if (voteCount[i] > voteCount[winnerIndex]) winnerIndex = i;
        }
    }

    function isTie() constant private voteFinished returns(bool)
    {
        if (voteCount[winnerIndex] == voteCount[tieIndex] 
            && winnerIndex != tieIndex
            && winnerIndex != 0
            && tieIndex != 0) return true;
        return false;
    }

    function getWinner() voteFinished constant public returns(string) 
    {
        if (isTie()) return "tie";
        return candidate[winnerIndex];
    }

    function getTieWinner() voteFinished constant public returns(string, string)
    {
        require(isTie());
        return (candidate[winnerIndex], candidate[tieIndex]);
    }

    function intToCandidate(uint _index) constant public returns(string) 
    {
        return candidate[_index];
    }

    function candidateToInt(string _name) constant public returns(uint)
    {
        bytes32 nameHash = sha3(_name);
        for (uint i=1; i<=numCandidates; i++)
        {
            if (nameHash == sha3(candidate[i]))
                return i;
        }
        return 0;
    }

    function getHasVoted(string _voter) constant private returns(bool) 
    {
        return voters[_voter].electionID == electionID;
    }

    function getRegistrationStatus(string _voter) constant private returns(bool)
    {
        return voters[_voter].isRegistered;
    }

}
