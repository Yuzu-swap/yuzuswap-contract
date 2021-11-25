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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface HalfAttenuationYuzuRewardInterface extends ethers.utils.Interface {
  functions: {
    "blockNumberOfHalfAttenuationCycle()": FunctionFragment;
    "getYuzuBetweenBlocks(uint256,uint256)": FunctionFragment;
    "getYuzuFromStartblock(uint256,uint256,uint256,uint256)": FunctionFragment;
    "startBlock()": FunctionFragment;
    "yuzuPerBlock()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "blockNumberOfHalfAttenuationCycle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYuzuBetweenBlocks",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getYuzuFromStartblock",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "yuzuPerBlock",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "blockNumberOfHalfAttenuationCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYuzuBetweenBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYuzuFromStartblock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "yuzuPerBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export class HalfAttenuationYuzuReward extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: HalfAttenuationYuzuRewardInterface;

  functions: {
    blockNumberOfHalfAttenuationCycle(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "blockNumberOfHalfAttenuationCycle()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getYuzuBetweenBlocks(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getYuzuBetweenBlocks(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getYuzuFromStartblock(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getYuzuFromStartblock(uint256,uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    yuzuPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "yuzuPerBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  blockNumberOfHalfAttenuationCycle(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "blockNumberOfHalfAttenuationCycle()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getYuzuBetweenBlocks(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getYuzuBetweenBlocks(uint256,uint256)"(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getYuzuFromStartblock(
    _startBlock: BigNumberish,
    _blockNumberOfHalfAttenuationCycle: BigNumberish,
    _yuzuPerBlock: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getYuzuFromStartblock(uint256,uint256,uint256,uint256)"(
    _startBlock: BigNumberish,
    _blockNumberOfHalfAttenuationCycle: BigNumberish,
    _yuzuPerBlock: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  yuzuPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "yuzuPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    blockNumberOfHalfAttenuationCycle(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blockNumberOfHalfAttenuationCycle()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYuzuBetweenBlocks(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getYuzuBetweenBlocks(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYuzuFromStartblock(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getYuzuFromStartblock(uint256,uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    yuzuPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "yuzuPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    blockNumberOfHalfAttenuationCycle(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blockNumberOfHalfAttenuationCycle()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYuzuBetweenBlocks(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getYuzuBetweenBlocks(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYuzuFromStartblock(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getYuzuFromStartblock(uint256,uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    yuzuPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "yuzuPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    blockNumberOfHalfAttenuationCycle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blockNumberOfHalfAttenuationCycle()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYuzuBetweenBlocks(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getYuzuBetweenBlocks(uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYuzuFromStartblock(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getYuzuFromStartblock(uint256,uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _blockNumberOfHalfAttenuationCycle: BigNumberish,
      _yuzuPerBlock: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yuzuPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yuzuPerBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
