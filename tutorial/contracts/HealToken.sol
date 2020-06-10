//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.4;

contract HealToken {
    uint256 public totalSupply;
    constructor(uint256 initialSupply) public {
        totalSupply = initialSupply;
    }
}


