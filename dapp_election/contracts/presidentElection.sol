pragma solidity ^0.4.7;

import "./dateTime.sol";

contract presidentElection is DateTime
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
    uint public maxVoteCount;
    uint MIN_VOTE_TIME = 30;
    address public owner;
    address public voteManager;

    struct voter
    {
        uint electionID;
    }
    
    //Modifiers
    modifier voteAlreadyStarted{ //투표 설정후 미시작 상태
        require((now+3600*9) > votePhaseStartTime);
        _;
    }
    modifier voteFinished {//투표 종료
        require((now+3600*9) > votePhaseEndTime);
        _;
    }
    modifier ownerShip{//관리자만 접근
        require(owner == msg.sender);
        _;
    }
    modifier voterShip{//적법한 계정인지 확인
        require(voteManager == msg.sender);
        _;
    }

    event logString(string);
    event logInt(uint);
    event voteWinner(string, string);

    function presidentElection() { //소유자와 투표자 지정
        owner = msg.sender;
        voteManager = msg.sender;
    }
    

    function startVote(uint _maxVoteCount, uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute, uint8 _endHour) voteAlreadyStarted voteFinished ownerShip public
    {
        //투표 설정
        //투표자 수 설정
        require((3600*_endHour) >= MIN_VOTE_TIME);
        uint timeStamp = toTimestamp(_year,_month,_day,_hour,_minute);
        votePhaseStartTime = timeStamp;
        votePhaseEndTime = timeStamp + (3600*_endHour);
        resetVoteCount();
        maxVoteCount = _maxVoteCount;
        numCandidates = 0;
        winnerIndex = 0;
        tieIndex = 0;
        electionID++;
    }

    function resetVoteCount() private
    {
        //투표수 리셋
        for (uint i=1; i<=numCandidates; i++)
        {
            voteCount[i] = 0;
        }
        totalVoteCount =0;
    }

    function addCandidate(string _name) public
    {
        //후보자 등록
        require(numCandidates <= 20);
        numCandidates += 1;
        candidate[numCandidates] = _name;
    }

    function castVote(uint _vote) voteAlreadyStarted public
    {
        //투표
        require(maxVoteCount > totalVoteCount);
        //require(!getHasVoted(_voter));
        if (now > votePhaseEndTime) return;

        // record the vote
        if (_vote <= numCandidates) 
        {
            voteCount[_vote] += 1;
            totalVoteCount += 1;
            //voters[_voter].electionID = electionID;
            logString("Vote counted.");
        }  
        else 
        {
            logString("Vote could not be read!");
        }
    }

    function countVotes() voteFinished public
    {
        //투표 집계
        for (uint i=1; i<= numCandidates; i++)
        {
            if (voteCount[i] == voteCount[winnerIndex]) tieIndex = i;
            if (voteCount[i] > voteCount[winnerIndex]) winnerIndex = i;
        }
    }

    function isTie() constant private voteFinished returns(bool)
    {
        //무승부 확인
        if (voteCount[winnerIndex] == voteCount[tieIndex] 
            && winnerIndex != tieIndex
            && winnerIndex != 0
            && tieIndex != 0) return true;
        return false;
    }

    function getWinner() voteFinished constant public returns(string) 
    {
        //승자
        if (isTie()) return "tie";
        return candidate[winnerIndex];
    }

    function getTieWinner() voteFinished constant public returns(string, string)
    {
        //무승부 승자
        require(isTie());
        return (candidate[winnerIndex], candidate[tieIndex]);
    }

    function intToCandidate(uint _index) constant public returns(string) 
    {
        //후보자 인덱스로 후보자 이름
        return candidate[_index];
    }

    function candidateToInt(string _name) constant public returns(uint)
    {
        //후보자 이름으로 후보자 인덱스
        bytes32 nameHash = sha3(_name);
        for (uint i=1; i<=numCandidates; i++)
        {
            if (nameHash == sha3(candidate[i]))
                return i;
        }
        return 0;
    }



}
