//SPDX-lincense-identifier: gpl-3.0
pragma solidity ^0.6.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Capped.sol";

contract HealToken is ERC20, ERC20Burnable, ERC20Capped {

    constructor(string memory name, string memory symbol, uint256 totalSize, uint256 capSize)
    ERC20(name,symbol)
    ERC20Capped(capSize)
    public {
        _setupDecimals(5);
        _mint(msg.sender, totalSize);
    }
}