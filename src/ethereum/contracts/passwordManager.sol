pragma solidity ^0.4.20;

contract PasswordFactory {
    address[] public deployedPasswordBlocks;
    event ContractCreated(address newAddress);

    function createPasswordBlock() public {
        address newPasswordBlock = new PasswordBlock(msg.sender);
        deployedPasswordBlocks.push(newPasswordBlock);
        ContractCreated(newPasswordBlock);
    }

    function getDeployedPasswordBlocks() public view returns (address[]){
        return deployedPasswordBlocks;
    }
}

contract PasswordBlock {

  struct EncryptedBlock {
    string description;
    string encrypted;
  }

  EncryptedBlock[] public encryptedBlock;
  address public manager;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  function PasswordBlock(address sender) public {
    manager = sender;
  }

  function createBlock(string description, string encrypted) public restricted {
    EncryptedBlock memory newEncryptedBlock = EncryptedBlock({
      description: description,
      encrypted: encrypted
      });
      encryptedBlock.push(newEncryptedBlock);
  }
}
