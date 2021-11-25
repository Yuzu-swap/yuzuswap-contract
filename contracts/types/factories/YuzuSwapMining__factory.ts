/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { YuzuSwapMining } from "../YuzuSwapMining";

export class YuzuSwapMining__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _yuzu: string,
    _yuzukeeper: string,
    _routerAddr: string,
    _yuzuPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _blockNumberOfHalfAttenuationCycle: BigNumberish,
    overrides?: Overrides
  ): Promise<YuzuSwapMining> {
    return super.deploy(
      _yuzu,
      _yuzukeeper,
      _routerAddr,
      _yuzuPerBlock,
      _startBlock,
      _blockNumberOfHalfAttenuationCycle,
      overrides || {}
    ) as Promise<YuzuSwapMining>;
  }
  getDeployTransaction(
    _yuzu: string,
    _yuzukeeper: string,
    _routerAddr: string,
    _yuzuPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _blockNumberOfHalfAttenuationCycle: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yuzu,
      _yuzukeeper,
      _routerAddr,
      _yuzuPerBlock,
      _startBlock,
      _blockNumberOfHalfAttenuationCycle,
      overrides || {}
    );
  }
  attach(address: string): YuzuSwapMining {
    return super.attach(address) as YuzuSwapMining;
  }
  connect(signer: Signer): YuzuSwapMining__factory {
    return super.connect(signer) as YuzuSwapMining__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YuzuSwapMining {
    return new Contract(address, _abi, signerOrProvider) as YuzuSwapMining;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YuzuToken",
        name: "_yuzu",
        type: "address",
      },
      {
        internalType: "contract IYuzuKeeper",
        name: "_yuzukeeper",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_routerAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_yuzuPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blockNumberOfHalfAttenuationCycle",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "yuzuAmount",
        type: "uint256",
      },
    ],
    name: "MinedBySwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpBurned",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "yuzuAmount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_archorTokenAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_anotherTokenAddr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "blockNumberOfHalfAttenuationCycle",
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
    name: "factoryAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getYuzuBetweenBlocks",
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
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blockNumberOfHalfAttenuationCycle",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yuzuPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getYuzuFromStartblock",
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
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingYuzu",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingYuzuAll",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "archorTokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lpTokenTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accYuzuPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "routerAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "input",
        type: "address",
      },
      {
        internalType: "address",
        name: "output",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outAmount",
        type: "uint256",
      },
    ],
    name: "swap",
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
    name: "tokenPairMapPoolPos",
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
    name: "totalAllocPoint",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yuzu",
    outputs: [
      {
        internalType: "contract YuzuToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yuzuPerBlock",
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
    name: "yuzukeeper",
    outputs: [
      {
        internalType: "contract IYuzuKeeper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600b553480156200001657600080fd5b5060405162001a4e38038062001a4e833981810160405260c08110156200003c57600080fd5b508051602082015160408301516060840151608085015160a0909501519394929391929091828282600062000070620001d6565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060039290925560019081556002919091556004556001600160a01b038616620000e257600080fd5b6001600160a01b038516620000f657600080fd5b6001600160a01b0384166200010a57600080fd5b600580546001600160a01b038089166001600160a01b031992831617909255600880548884169083161790556006805492871692909116821790556040805163c45a015560e01b8152905163c45a015591600480820192602092909190829003018186803b1580156200017c57600080fd5b505afa15801562000191573d6000803e3d6000fd5b505050506040513d6020811015620001a857600080fd5b5051600780546001600160a01b0319166001600160a01b0390921691909117905550620001da945050505050565b3390565b61186480620001ea6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063853828b6116100de5780639f1f2a8311610097578063d3e3665711610071578063d3e366571461040b578063e08c0ca614610413578063e343fe1214610439578063f2fde38b1461048f5761018e565b80639f1f2a8314610396578063c71b4b43146103c5578063d0f77be1146104035761018e565b8063853828b6146103295780638ad8a072146103315780638da5cb5b1461033957806393f1a40b14610341578063963671be1461038657806398f5fe2d1461038e5761018e565b806348cd4cb11161014b57806364482f791161012557806364482f79146102a65780636b90694c146102d1578063715018a6146102f55780637db33dee146102fd5761018e565b806348cd4cb11461027957806351eb05a614610281578063630b5ba11461029e5761018e565b8063081e3eda146101935780631526fe27146101ad57806317caf6f1146102095780632e1a7d4d14610211578063370e6cfe146102305780633fe31b7e14610253575b600080fd5b61019b6104b5565b60408051918252519081900360200190f35b6101ca600480360360208110156101c357600080fd5b50356104bb565b604080516001600160a01b039788168152959096166020860152848601939093526060840191909152608083015260a082015290519081900360c00190f35b61019b61050b565b61022e6004803603602081101561022757600080fd5b5035610511565b005b61019b6004803603604081101561024657600080fd5b508035906020013561059b565b61019b6004803603602081101561026957600080fd5b50356001600160a01b03166105d3565b61019b6105e5565b61022e6004803603602081101561029757600080fd5b50356105eb565b61022e61070e565b61022e600480360360608110156102bc57600080fd5b50803590602081013590604001351515610731565b6102d961080c565b604080516001600160a01b039092168252519081900360200190f35b61022e61081b565b61019b6004803603604081101561031357600080fd5b50803590602001356001600160a01b03166108c7565b61022e6109a1565b6102d9610a39565b6102d9610a48565b61036d6004803603604081101561035757600080fd5b50803590602001356001600160a01b0316610a57565b6040805192835260208301919091528051918290030190f35b6102d9610a7b565b61019b610a8a565b61019b600480360360808110156103ac57600080fd5b5080359060208101359060408101359060600135610a90565b61022e600480360360808110156103db57600080fd5b508035906001600160a01b036020820135811691604081013590911690606001351515610aa7565b61019b610cc8565b6102d9610cce565b61019b6004803603602081101561042957600080fd5b50356001600160a01b0316610cdd565b61047b600480360360a081101561044f57600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101359060800135610dd4565b604080519115158252519081900360200190f35b61022e600480360360208110156104a557600080fd5b50356001600160a01b0316610f9a565b60095490565b600981815481106104c857fe5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0394851696509390921693909286565b600b5481565b60026004541415610569576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026004556000818152600a60209081526040808320338452909152902054610592828261109c565b50506001600455565b60006105ca6105b2600154600254600354876111e9565b6105c4600154600254600354876111e9565b9061126a565b90505b92915050565b600c6020526000908152604090205481565b60015481565b6000600982815481106105fa57fe5b906000526020600020906006020190508060040154431161061b575061070b565b60028101548061063257504360049091015561070b565b600061065c600b54610656856003015461065087600401544361059b565b906112c7565b90611320565b60085460408051636e4b8a4560e01b81526004810184905290519293506001600160a01b0390911691636e4b8a45916024808201926020929091908290030181600087803b1580156106ad57600080fd5b505af11580156106c1573d6000803e3d6000fd5b505050506040513d60208110156106d757600080fd5b505190506106fc6106f1836106568464e8d4a510006112c7565b600585015490611387565b60058401555050436004909101555b50565b60095460005b8181101561072d57610725816105eb565b600101610714565b5050565b6107396113e1565b6001600160a01b031661074a610a48565b6001600160a01b031614610793576040805162461bcd60e51b8152602060048201819052602482015260008051602061180f833981519152604482015290519081900360640190fd5b80156107a1576107a161070e565b6107de826107d8600986815481106107b557fe5b906000526020600020906006020160030154600b5461126a90919063ffffffff16565b90611387565b600b8190555081600984815481106107f257fe5b906000526020600020906006020160030181905550505050565b6006546001600160a01b031681565b6108236113e1565b6001600160a01b0316610834610a48565b6001600160a01b03161461087d576040805162461bcd60e51b8152602060048201819052602482015260008051602061180f833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600080600984815481106108d757fe5b60009182526020808320878452600a825260408085206001600160a01b0389168652909252922060056006909202909201908101546002820154600483015492945090914311801561092857508015155b1561096e57600061094b600b54610656876003015461065089600401544361059b565b905061096a610963836106568464e8d4a510006112c7565b8490611387565b9250505b61099683600101546105c464e8d4a510006106568688600001546112c790919063ffffffff16565b979650505050505050565b600260045414156109f9576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260045560095460005b81811015610592576000818152600a60209081526040808320338452909152902054610a30828261109c565b50600101610a04565b6005546001600160a01b031681565b6000546001600160a01b031690565b600a6020908152600092835260408084209091529082529020805460019091015482565b6007546001600160a01b031681565b60025481565b6000610a9e858585856111e9565b95945050505050565b610aaf6113e1565b6001600160a01b0316610ac0610a48565b6001600160a01b031614610b09576040805162461bcd60e51b8152602060048201819052602482015260008051602061180f833981519152604482015290519081900360640190fd5b8015610b1757610b1761070e565b600754600090610b31906001600160a01b031685856113e5565b905060006001544311610b4657600154610b48565b435b600b54909150610b589087611387565b600b556040805160c0810182526001600160a01b0393841680825296841660208083019182526000838501818152606085019b8c526080850196875260a085018281526009805460018101825581855296517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af600690980297880180546001600160a01b0319908116928d1692909217905595517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b0880180549097169a1699909917909455517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b185015599517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b284015593517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b3830155517f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7b4909101559154948652600c9052909320919091555050565b60035481565b6008546001600160a01b031681565b6009546000908190815b81811015610dcb57600060098281548110610cfe57fe5b60009182526020808320858452600a825260408085206001600160a01b038c1686529092529220600560069092029092019081015460028201546004830154929450909143118015610d4f57508015155b15610d8e576000610d72600b54610656876003015461065089600401544361059b565b9050610d8a610963836106568464e8d4a510006112c7565b9250505b610dba876107d885600101546105c464e8d4a51000610656888a600001546112c790919063ffffffff16565b965050505050806001019050610ce7565b50909392505050565b6006546000906001600160a01b03163314610e205760405162461bcd60e51b815260040180806020018281038252602781526020018061177c6027913960400191505060405180910390fd5b600754600090610e3a906001600160a01b031687876113e5565b6001600160a01b0381166000908152600c6020526040902054909150610e64576001915050610a9e565b6001600160a01b0381166000908152600c6020526040812054610e8890600161126a565b9050600060098281548110610e9957fe5b60009182526020808320858452600a825260408085206001600160a01b038f168652909252922060069091029091019150610ed3836105eb565b60018201546000906001600160a01b038b811691161415610ef5575086610ef8565b50855b6002830154610f079082611387565b60028401558154610f189082611387565b82556005830154610f4490610f399064e8d4a51000906106569085906112c7565b600184015490611387565b600183015560408051828152905185916001600160a01b038e16917fbe34c02c185c3a10f86018bf899979359b4c3b12294bdba7d95c6e31230e39989181900360200190a35060019a9950505050505050505050565b610fa26113e1565b6001600160a01b0316610fb3610a48565b6001600160a01b031614610ffc576040805162461bcd60e51b8152602060048201819052602482015260008051602061180f833981519152604482015290519081900360640190fd5b6001600160a01b0381166110415760405162461bcd60e51b81526004018080602001828103825260268152602001806117a36026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000600983815481106110ab57fe5b60009182526020808320868452600a82526040808520338652909252922080546006909202909201925083111561111e576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b611127846105eb565b600061115582600101546105c464e8d4a51000610656876005015487600001546112c790919063ffffffff16565b905061116133826114a5565b6002830154611170908561126a565b60028401558154611181908561126a565b808355600584015461119e9164e8d4a510009161065691906112c7565b600183015560408051858152602081018390528151879233927f02f25270a4d87bea75db541cdfe559334a275b4a233520ed6c0a2429667cca94929081900390910190a35050505050565b6000806111fa85610656858961126a565b905060ff811115611209575060ff5b6000816001901b9050610996611244826106568861065061123d8c6112378f8d61126a90919063ffffffff16565b90611636565b8c9061126a565b6105c4611255846106568a8c6112c7565b6105c46112638b60026112c7565b8a906112c7565b6000828211156112c1576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826112d6575060006105cd565b828202828482816112e357fe5b04146105ca5760405162461bcd60e51b81526004018080602001828103825260218152602001806117ee6021913960400191505060405180910390fd5b6000808211611376576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161137f57fe5b049392505050565b6000828201838110156105ca576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b60008060006113f4858561169d565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f5830e83a97c2e699e358df6b4d67093cc0d891e16db37075c89a92b729f60757609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b600554604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156114f057600080fd5b505afa158015611504573d6000803e3d6000fd5b505050506040513d602081101561151a57600080fd5b50519050808211156115ae576005546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018590529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561157c57600080fd5b505af1158015611590573d6000803e3d6000fd5b505050506040513d60208110156115a657600080fd5b506116319050565b6005546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561160457600080fd5b505af1158015611618573d6000803e3d6000fd5b505050506040513d602081101561162e57600080fd5b50505b505050565b600080821161168c576040805162461bcd60e51b815260206004820152601860248201527f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000604482015290519081900360640190fd5b81838161169557fe5b069392505050565b600080826001600160a01b0316846001600160a01b031614156116f15760405162461bcd60e51b81526004018080602001828103825260258152602001806117c96025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610611711578284611714565b83835b90925090506001600160a01b038216611774576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b925092905056fe59757a75537761704d696e696e673a2073656e6465722069736e27742074686520726f757465724f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220400878e7027485dcd99939e1a4caa6b12092dd3925658d1187d0c0b222dd7bb164736f6c634300060c0033";
