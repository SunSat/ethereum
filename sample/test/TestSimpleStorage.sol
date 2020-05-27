// SPDX-License-Identifier: GPL-3.0
pragma solidity <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {
    SimpleStorage simpSt = SimpleStorage(DeployedAddresses.SimpleStorage());

    function testSettorValue() public {
        simpSt.set(1);
        Assert.equal(1, simpSt.get(),"Both sould be same");
    }
}
