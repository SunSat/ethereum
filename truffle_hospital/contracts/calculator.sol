// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.7.0;
contract Calculator {

  int256 result;

  constructor() public {
    // constructor
    result = 10;
  }

  // returns the result
  function getResult() public view returns (int256){
    return result;
  }

  // result = result + num
  function addToNumber(int256 num1,int256 num2) public returns (int256) {
    result = num1 + num2;
    return result;
  }

  // result = result - num
  function substractFromNumber(int256 num1, int256 num2) public returns (int256) {
    result = num1 - num2;
    return result;
  }
}