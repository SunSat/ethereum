// SPDX-License-Identifier: GPL-3.0
pragma solidity <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());
    uint expectedPetId = 8;
    address expectedAdopter = address(this);

    function testUserCanAdopt() public {
        uint returnedId = adoption.adopt(expectedPetId);
        Assert.equal(returnedId, expectedPetId, "Adoption of the expected pet should match what is returned.");
    }

    function testAdoptedSingleUser() public {
        address[16] memory adopterAc = adoption.getAdopters();
        Assert.equal(adopterAc[expectedPetId], expectedAdopter,"should be same");
    }  
}