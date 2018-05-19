pragma solidity ^0.4.7;

import "./dateTime.sol";
//startvoe -> addcandidate -> time setting
contract presidentElection is dateTime
{
    mapping(uint => uint) voteCount; 
    mapping(uint => string) candidate; 
    uint public numCandidates;
    uint public votePhaseStartTime;
    uint public votePhaseEndTime;
    uint public winnerIndex;
    uint public tieIndex;
    uint public totalVoteCount;
    uint public maxVoteCount;
    bool public setTime;
    bool public setEndTime;
    uint MIN_VOTE_TIME = 30;
    address public owner;
    address public voteManager;
    
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

    function presidentElection() public { //소유자와 투표자 지정
        owner = msg.sender;
        voteManager = msg.sender;
        setTime=true;
        setEndTime=true;
    }
    
    function setTimeStamp(uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute) voteAlreadyStarted voteFinished ownerShip public
    {
        require(setTime == false);
        setTime = true;
        votePhaseStartTime = toTimestamp(_year,_month,_day,_hour,_minute);
    }
    function setEndTimeStamp(uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute) voteAlreadyStarted voteFinished ownerShip public
    {
        require(setEndTime == false);
        setEndTime = true;
        votePhaseEndTime = toTimestamp(_year,_month,_day,_hour,_minute);
    }

    function startVote(uint _maxVoteCount) voteFinished ownerShip public
    {
        //투표 설정
        //투표자 수 설정
        require(setTime == true);
        require(setEndTime == true);
        resetVoteCount();
        maxVoteCount = _maxVoteCount;
        numCandidates = 0;
        winnerIndex = 0;
        tieIndex = 0;
        setTime = false;
        setEndTime = false;
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

    function addCandidate(string _name) voteFinished ownerShip  public
    {
        //후보자 등록
        require(numCandidates <= 9);
        numCandidates += 1;
        candidate[numCandidates] = _name;
    }

    function castVote(uint _vote) voteAlreadyStarted public
    {
        //투표
        require((now+3600*9) < votePhaseEndTime);
        require(maxVoteCount > totalVoteCount);
        if (now > votePhaseEndTime) return;

        // record the vote
        if (_vote <= numCandidates) 
        {
            voteCount[_vote] += 1;
            totalVoteCount += 1;
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

    function test() public returns(uint){
        return totalVoteCount;
    }

}
