/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OkenChainTokenTestB } from "../OkenChainTokenTestB";

export class OkenChainTokenTestB__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OkenChainTokenTestB> {
    return super.deploy(overrides || {}) as Promise<OkenChainTokenTestB>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OkenChainTokenTestB {
    return super.attach(address) as OkenChainTokenTestB;
  }
  connect(signer: Signer): OkenChainTokenTestB__factory {
    return super.connect(signer) as OkenChainTokenTestB__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OkenChainTokenTestB {
    return new Contract(address, _abi, signerOrProvider) as OkenChainTokenTestB;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "a",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052601060808190526f27b5b2bc31b430b4b7102a37b5b2b72160811b60a090815261003191600091906100d5565b506040805180820190915260038082526227aa2160e91b602090920191825261005c916001916100d5565b506002805460ff1916601217905534801561007657600080fd5b50336000818152600360209081526040808320805469021e19e0c9bab240000090810190915581518181529151909493927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef928290030190a350610168565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011657805160ff1916838001178555610143565b82800160010185558215610143579182015b82811115610143578251825591602001919060010190610128565b5061014f929150610153565b5090565b5b8082111561014f5760008155600101610154565b610706806101776000396000f3fe6080604052600436106100a75760003560e01c8063313ce56711610064578063313ce5671461022157806370a082311461024c57806395d89b411461027f578063a9059cbb14610294578063d0e30db0146102cd578063dd62ed3e146102d5576100a7565b806306fdde03146100ac578063095ea7b3146101365780630dbe671f1461018357806318160ddd1461018d57806323b872dd146101b45780632e1a7d4d146101f7575b600080fd5b3480156100b857600080fd5b506100c1610310565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014257600080fd5b5061016f6004803603604081101561015957600080fd5b506001600160a01b03813516906020013561039e565b604080519115158252519081900360200190f35b61018b610404565b005b34801561019957600080fd5b506101a261040e565b60408051918252519081900360200190f35b3480156101c057600080fd5b5061016f600480360360608110156101d757600080fd5b506001600160a01b03813581169160208101359091169060400135610412565b34801561020357600080fd5b5061018b6004803603602081101561021a57600080fd5b5035610546565b34801561022d57600080fd5b506102366105db565b6040805160ff9092168252519081900360200190f35b34801561025857600080fd5b506101a26004803603602081101561026f57600080fd5b50356001600160a01b03166105e4565b34801561028b57600080fd5b506100c16105f6565b3480156102a057600080fd5b5061016f600480360360408110156102b757600080fd5b506001600160a01b038135169060200135610650565b61018b610664565b3480156102e157600080fd5b506101a2600480360360408110156102f857600080fd5b506001600160a01b03813581169160200135166106b3565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b61040c610664565b565b4790565b6001600160a01b03831660009081526003602052604081205482111561043757600080fd5b6001600160a01b038416331480159061047557506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b156104d5576001600160a01b03841660009081526004602090815260408083203384529091529020548211156104aa57600080fd5b6001600160a01b03841660009081526004602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b3360009081526003602052604090205481111561056257600080fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f193505050501580156105a1573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103965780601f1061036b57610100808354040283529160200191610396565b600061065d338484610412565b9392505050565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b60046020908152600092835260408084209091529082529020548156fea264697066735822122080d3282edc61cccd282608b7542704be0e124cb8985569b1d7b581e32a4cce5064736f6c634300060c0033";
