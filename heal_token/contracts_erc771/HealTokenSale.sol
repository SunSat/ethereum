//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.1;

import "./crowdsale/Crowdsale.sol";
import "./crowdsale/TimedCrowdsale.sol";

contract HealTokenSale is Crowdsale, TimedCrowdsale {
    constructor( uint256 rate, address payable wallet, IERC20 token, uint256 openingTime, uint256 closingTime )
    Crowdsale (rate, wallet, token)
    TimedCrowdsale(openingTime, closingTime) public {
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount) override(Crowdsale,TimedCrowdsale) internal view {
        TimedCrowdsale._preValidatePurchase(beneficiary,weiAmount);
    }
}