//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.4;

import './HealToken.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';

contract HealTokenSale {
    using SafeMath for uint256;
    address admin;
    HealToken healTokenContract;
    uint256 tokenPrice;
    uint256 tokenSold = 0;

    constructor(HealToken _healTokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        healTokenContract = _healTokenContract;
        tokenPrice = _tokenPrice;
    }

    event sell(address _buyer, uint256 _amount);

    function buyToken(uint256 _numberOfTokens) public payable {
        require(msg.value == (tokenPrice.mul(_numberOfTokens)),"invalid buy request. The price differ from actual Token to buy.");
        require(healTokenContract.balanceOf(address(this)) >= _numberOfTokens, "Either Token Sale Ended Or Token Not available to buy.");
        require(healTokenContract.transfer(msg.sender, _numberOfTokens), "Error while transfering token. Reverted.");
        tokenSold = tokenSold.add(_numberOfTokens);
        emit sell(msg.sender, _numberOfTokens);
    }
}