pragma solidity ^0.4.8;

contract voting {
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
    function Time_call() returns (uint256){
        return now;
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

