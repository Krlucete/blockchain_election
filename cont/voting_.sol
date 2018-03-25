pragma solidity ^0.4.8;

contract Owned {
    address public owner;

    event TransferOwnership(address oldaddr, address newaddr);

    modifier onlyOwner() { if (msg.sender != owner) throw; _; }

    function Owned() {
        owner = msg.sender;
    }
    
    function transferOwnership(address _new) onlyOwner {
        address oldaddr = owner;
        owner = _new;
        TransferOwnership(oldaddr, owner);
    }
}

contract voting is Owned{
    string public name; 
    uint8 public voted; 
    uint256 public timer; 
    uint256 public totalSupply;
    uint256 public votingCount;
    mapping (address => uint256) public balanceOf;
    mapping (address => int8) public blackList;
    address public owner;
 
    modifier onlyOwner() { if (msg.sender != owner) throw; _; }

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Blacklisted(address indexed target);
    event DeleteFromBlacklist(address indexed target);
    event RejectedPaymentToBlacklistedAddr(address indexed from, address indexed to, uint256 value);
    event RejectedPaymentFromBlacklistedAddr(address indexed from, address indexed to, uint256 value);

    function voting(uint256 _supply, string _name, uint8 _voted, uint256 _timer) {
        balanceOf[msg.sender] = _supply;
        name = _name;
        voted = _voted;
        timer = _timer;
        totalSupply = _supply;
        owner = msg.sender;
        votingCount=0;
    }
    function blacklisting(address _addr) onlyOwner {
        blackList[_addr] = 1;
        Blacklisted(_addr);
    }
 
    function deleteFromBlacklist(address _addr) onlyOwner {
        blackList[_addr] = -1;
        DeleteFromBlacklist(_addr);
    }
     
    function transfer(address _to, uint256 _value) {
        if (balanceOf[msg.sender] < _value) throw;
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;
        if (blackList[msg.sender] > 0) {
            RejectedPaymentFromBlacklistedAddr(msg.sender, _to, _value);
        } else if (blackList[_to] > 0) {
            RejectedPaymentToBlacklistedAddr(msg.sender, _to, _value);
        } else {
            balanceOf[msg.sender] -= _value;
            balanceOf[_to] += _value;
            Transfer(msg.sender, _to, _value);
        }
    }
}

contract Escrow is Owned {
    voting public token; // 토큰
    uint256 public salesVolume; // 판매량
    uint256 public sellingPrice; // 판매 가격
    uint256 public deadline; // 기한
    bool public isOpened; // 에스크로 개시 플래그
     
    event EscrowStart(uint salesVolume, uint sellingPrice, uint deadline, address beneficiary);
    event ConfirmedPayment(address addr, uint amount);
     
    function Escrow (voting _token, uint256 _salesVolume, uint256 _priceInEther) {
        token = voting(_token);
        salesVolume = _salesVolume;
        sellingPrice = _priceInEther * 1 ether;
    }
     
    // (5) 이름 없는 함수(Ether 수령)
    function () payable {
        // 개시 전 또는 기한이 끝난 경우에는 예외 처리
        if (!isOpened || now >= deadline) throw;
         
        // 판매 가격 미만인 경우 예외 처리
        uint amount = msg.value;
        if (amount < sellingPrice) throw;
         
        // 보내는 사람에게 토큰을 전달하고 에스크로 개시 플래그를 false로 설정
        token.transfer(msg.sender, salesVolume);
        isOpened = false;
        ConfirmedPayment(msg.sender, amount);
    }
     
    // (6) 개시(토큰이 예정 수 이상이라면 개시)
    function start(uint256 _durationInMinutes) onlyOwner {
        if (token == address(0) || salesVolume == 0 || sellingPrice == 0 || deadline != 0) throw;
        if (token.balanceOf(this) >= salesVolume){
            deadline = now + _durationInMinutes * 1 minutes;
            isOpened = true;
            EscrowStart(salesVolume, sellingPrice, deadline, owner);
        }
    }
     
    // (7) 남은 시간 확인용 메서드(분 단위)
    function getRemainingTime() constant returns(uint min) {
        if(now < deadline) {
            min = (deadline - now) / (1 minutes);
        }
    }
     
    // (8) 종료
    function close() onlyOwner {
        // 토큰을 소유자에게 전송
        token.transfer(owner, token.balanceOf(this));
        // 계약을 파기(해당 계약이 보유하고 있는 Ether는 소유자에게 전송
        selfdestruct(owner);
    }
}


