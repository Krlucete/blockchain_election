pragma solidity ^0.4.7;

import "./dateTime.sol";
//startvoe -> addcandidate -> time setting(start, end) -> castvote -> countVotes -> getWinner(or getTieWinner(동점인 경우))
contract presidentElection is dateTime
{
    mapping(uint => uint) voteCount; 
    mapping(uint => string) candidate; 
    //mapping(uint => string) voterAddress;
    uint[17][11] voteAddressCount;
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
    /*function setAddress() public{
        voterAddress[1]="서울";
        voterAddress[2]="부산";
        voterAddress[3]="대구";
        voterAddress[4]="인천";
        voterAddress[5]="광주";
        voterAddress[6]="대전";
        voterAddress[7]="울산";
        voterAddress[8]="경기";
        voterAddress[9]="강원";
        voterAddress[10]="충북";
        voterAddress[11]="충남";
        voterAddress[12]="전북";
        voterAddress[13]="전남";
        voterAddress[14]="경북";
        voterAddress[15]="경남";
        voterAddress[16]="제주";
    }*/
    
    function setTimeStamp(uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute) voteAlreadyStarted voteFinished ownerShip public
    {
        require(setTime == false);
        setTime = true;
        votePhaseStartTime = toTimestamp(_year,_month,_day,_hour,_minute);
    }
    function setEndTimeStamp(uint16 _year, uint8 _month, uint8 _day, uint8 _hour,
        uint8 _minute) voteFinished ownerShip public
    {
        require(setEndTime == false);
        setEndTime = true;
        votePhaseEndTime = toTimestamp(_year,_month,_day,_hour,_minute);
    }

    function startVote(uint _maxVoteCount) voteFinished ownerShip public
    {
        //투표 설정
        //투표자 수 설정
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
            candidate[i] = "";
            for(uint j=1; j<=17;j++){
                voteAddressCount[j][i]=0;
            }
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

    function castVote(uint _vote, uint _voter) voteAlreadyStarted public
    {
        //투표
        require((now+3600*9) < votePhaseEndTime);
        require(maxVoteCount > totalVoteCount);
        if (now > votePhaseEndTime) return;

        // record the vote
        if (_vote <= numCandidates) 
        {
            voteCount[_vote] += 1;
            voteAddressCount[_voter][_vote] += 1;
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
    
    function getVoteCount(uint _vote) voteFinished constant public returns (uint){
        return voteCount[_vote];
    }
    function getVoteAddressCount(uint _vote, uint _voter) voteFinished constant public returns (uint){
        return voteAddressCount[_voter][_vote];
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
    
    function resetTest() public {
        
    }
    function test() public returns(uint){
        return totalVoteCount;
    }

}
