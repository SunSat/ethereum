// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;


contract HealToken  {
    
    uint256 totalToken = 0;
    address owner;
    string tokenName;
    string tokenSymbol;
    mapping(address => uint256) balanceOfAddress;
    mapping(address => mapping(address => uint256)) allowance;

    constructor(uint256 _totalToken, string memory _name, string memory _symbol) public {
        totalToken = _totalToken;
        tokenName = _name;
        tokenSymbol = _symbol;
        owner = msg.sender;
        balanceOfAddress[owner] = totalToken;
    }

    event Transfer(address indexed _from,address indexed _to, uint256 vlaue);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    function name() public view returns (string memory) {
        return tokenName;
    }

    function symbol() public view returns (string memory) {
        return tokenSymbol;
    }

    function decimals() public pure returns (uint8) {
        return 6;
    }

    function totalSupply() public view returns (uint256) {
        return totalToken;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balanceOfAddress[_owner];
    }

    function getOwner() public view returns(address) {
        return owner;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        uint256 exCount = balanceOfAddress[msg.sender];
        require(_value <= exCount, "Error Not enough token to sesnd.");
        balanceOfAddress[msg.sender] -= _value;
        balanceOfAddress[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        //require(_value <= balanceOfAddress[_from],"No Suffecient amount");
        require(_value <= allowance[_from][msg.sender],"No Suffecient allowance. Hence You cannot approve.");
        balanceOfAddress[_from] -= _value;
        balanceOfAddress[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function getAllowance(address _address) public view returns(uint256) {
        return allowance[msg.sender][_address];
    }
}