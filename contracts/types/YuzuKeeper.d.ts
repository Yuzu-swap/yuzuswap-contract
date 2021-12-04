/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface YuzuKeeperInterface extends ethers.utils.Interface {
  functions: {
    "addApplication(address,uint256,uint256,uint256)": FunctionFragment;
    "appPublished()": FunctionFragment;
    "applications(address)": FunctionFragment;
    "devAddr()": FunctionFragment;
    "foundationAddr()": FunctionFragment;
    "investorAddr()": FunctionFragment;
    "owner()": FunctionFragment;
    "publishApplication()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestForYuzu(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "yuzu()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addApplication",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "appPublished",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "applications",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "devAddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "foundationAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investorAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "publishApplication",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestForYuzu",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "yuzu", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addApplication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "appPublished",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applications",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "devAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "foundationAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investorAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishApplication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestForYuzu",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yuzu", data: BytesLike): Result;

  events: {
    "ApplicationAdded(address,uint256,uint256,uint256)": EventFragment;
    "ApplicationPublished(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "YUZUForRequestor(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApplicationAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApplicationPublished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "YUZUForRequestor"): EventFragment;
}

export class YuzuKeeper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: YuzuKeeperInterface;

  functions: {
    addApplication(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addApplication(address,uint256,uint256,uint256)"(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    appPublished(overrides?: CallOverrides): Promise<[boolean]>;

    "appPublished()"(overrides?: CallOverrides): Promise<[boolean]>;

    applications(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        yuzuMember: string;
        totalValue: BigNumber;
        transferedValue: BigNumber;
        perBlockLimit: BigNumber;
        startBlock: BigNumber;
      }
    >;

    "applications(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        yuzuMember: string;
        totalValue: BigNumber;
        transferedValue: BigNumber;
        perBlockLimit: BigNumber;
        startBlock: BigNumber;
      }
    >;

    devAddr(overrides?: CallOverrides): Promise<[string]>;

    "devAddr()"(overrides?: CallOverrides): Promise<[string]>;

    foundationAddr(overrides?: CallOverrides): Promise<[string]>;

    "foundationAddr()"(overrides?: CallOverrides): Promise<[string]>;

    investorAddr(overrides?: CallOverrides): Promise<[string]>;

    "investorAddr()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    publishApplication(overrides?: Overrides): Promise<ContractTransaction>;

    "publishApplication()"(overrides?: Overrides): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    requestForYuzu(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "requestForYuzu(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    yuzu(overrides?: CallOverrides): Promise<[string]>;

    "yuzu()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addApplication(
    _yuzuMember: string,
    _totalValue: BigNumberish,
    _perBlockLimit: BigNumberish,
    _startBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addApplication(address,uint256,uint256,uint256)"(
    _yuzuMember: string,
    _totalValue: BigNumberish,
    _perBlockLimit: BigNumberish,
    _startBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  appPublished(overrides?: CallOverrides): Promise<boolean>;

  "appPublished()"(overrides?: CallOverrides): Promise<boolean>;

  applications(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      yuzuMember: string;
      totalValue: BigNumber;
      transferedValue: BigNumber;
      perBlockLimit: BigNumber;
      startBlock: BigNumber;
    }
  >;

  "applications(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      yuzuMember: string;
      totalValue: BigNumber;
      transferedValue: BigNumber;
      perBlockLimit: BigNumber;
      startBlock: BigNumber;
    }
  >;

  devAddr(overrides?: CallOverrides): Promise<string>;

  "devAddr()"(overrides?: CallOverrides): Promise<string>;

  foundationAddr(overrides?: CallOverrides): Promise<string>;

  "foundationAddr()"(overrides?: CallOverrides): Promise<string>;

  investorAddr(overrides?: CallOverrides): Promise<string>;

  "investorAddr()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  publishApplication(overrides?: Overrides): Promise<ContractTransaction>;

  "publishApplication()"(overrides?: Overrides): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  requestForYuzu(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "requestForYuzu(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  yuzu(overrides?: CallOverrides): Promise<string>;

  "yuzu()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addApplication(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addApplication(address,uint256,uint256,uint256)"(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    appPublished(overrides?: CallOverrides): Promise<boolean>;

    "appPublished()"(overrides?: CallOverrides): Promise<boolean>;

    applications(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        yuzuMember: string;
        totalValue: BigNumber;
        transferedValue: BigNumber;
        perBlockLimit: BigNumber;
        startBlock: BigNumber;
      }
    >;

    "applications(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        yuzuMember: string;
        totalValue: BigNumber;
        transferedValue: BigNumber;
        perBlockLimit: BigNumber;
        startBlock: BigNumber;
      }
    >;

    devAddr(overrides?: CallOverrides): Promise<string>;

    "devAddr()"(overrides?: CallOverrides): Promise<string>;

    foundationAddr(overrides?: CallOverrides): Promise<string>;

    "foundationAddr()"(overrides?: CallOverrides): Promise<string>;

    investorAddr(overrides?: CallOverrides): Promise<string>;

    "investorAddr()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    publishApplication(overrides?: CallOverrides): Promise<void>;

    "publishApplication()"(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    requestForYuzu(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requestForYuzu(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    yuzu(overrides?: CallOverrides): Promise<string>;

    "yuzu()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ApplicationAdded(
      yuzuMember: string | null,
      totalValue: null,
      perBlockLimit: null,
      startBlock: null
    ): EventFilter;

    ApplicationPublished(publisher: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    YUZUForRequestor(to: string | null, amount: null): EventFilter;
  };

  estimateGas: {
    addApplication(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addApplication(address,uint256,uint256,uint256)"(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    appPublished(overrides?: CallOverrides): Promise<BigNumber>;

    "appPublished()"(overrides?: CallOverrides): Promise<BigNumber>;

    applications(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "applications(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    devAddr(overrides?: CallOverrides): Promise<BigNumber>;

    "devAddr()"(overrides?: CallOverrides): Promise<BigNumber>;

    foundationAddr(overrides?: CallOverrides): Promise<BigNumber>;

    "foundationAddr()"(overrides?: CallOverrides): Promise<BigNumber>;

    investorAddr(overrides?: CallOverrides): Promise<BigNumber>;

    "investorAddr()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    publishApplication(overrides?: Overrides): Promise<BigNumber>;

    "publishApplication()"(overrides?: Overrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    requestForYuzu(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "requestForYuzu(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    yuzu(overrides?: CallOverrides): Promise<BigNumber>;

    "yuzu()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addApplication(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addApplication(address,uint256,uint256,uint256)"(
      _yuzuMember: string,
      _totalValue: BigNumberish,
      _perBlockLimit: BigNumberish,
      _startBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    appPublished(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "appPublished()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    applications(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "applications(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    devAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "devAddr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    foundationAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "foundationAddr()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    investorAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "investorAddr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publishApplication(overrides?: Overrides): Promise<PopulatedTransaction>;

    "publishApplication()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    requestForYuzu(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "requestForYuzu(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    yuzu(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yuzu()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}