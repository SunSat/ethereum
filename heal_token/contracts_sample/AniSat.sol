// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AniSat is ERC20 {

    constructor(uint256 _totalSupply) ERC20("Health", "HEL") public {
        _mint(msg.sender, _totalSupply);
    }

}