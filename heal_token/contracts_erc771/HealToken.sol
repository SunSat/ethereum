// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract HealToken is ERC777 {
    constructor( uint256 initialSupply, address[] memory defaultOperators )
    ERC777("Health", "HEAL", defaultOperators) public {
        _mint(msg.sender, initialSupply, "", "");

    }
}
