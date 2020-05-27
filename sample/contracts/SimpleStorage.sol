//SPDX-License-Identifier: GPL-3.0
pragma solidity <0.7.0;

contract SimpleStorage {
    uint storeData;

    constructor() public {
        storeData = 10;
    }

    function set(uint x) public {
        storeData = x;
    }

    function get() public view returns(uint) {
        return storeData;
    }
}