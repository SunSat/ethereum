// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.7.0;


contract Calculator {
    uint256 result;

    constructor() public {
        result = 10;
    }

    function getResult() public view returns (uint256) {
        return result;
    }

    function addToNumber(uint256 num1, uint256 num2) public returns (uint256) {
        result = num1 + num2;
        return result;
    }

    function substractFromNumber(uint256 num1, uint256 num2)
        public
        returns (uint256)
    {
        result = num1 - num2;
        return result;
    }
}
