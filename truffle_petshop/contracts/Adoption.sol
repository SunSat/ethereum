// SPDX-License-Identifier: GPL-3.0
pragma solidity <0.7.0;

contract Adoption {
    address[16] public adopters;

    function adopt(uint petId) public returns(uint) {
        require(petId > 0 && petId < 15,"PetId is not in Range");
        adopters[petId] = msg.sender;
        return petId;
    }

    function getAdopters() public view returns(address[16] memory) {
        return adopters;
    }
}
