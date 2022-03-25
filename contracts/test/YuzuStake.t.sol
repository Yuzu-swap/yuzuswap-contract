// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {DSTestPlus} from "./utils/DSTestPlus.sol";
import {MockToken} from "./utils/MockToken.sol";
import "../YuzuStake.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/math/SafeMath.sol";

contract YuzuStakeTest is DSTestPlus {
	using SafeMath for uint256;
    // --- create contract instance --
    // YuzuStake contract
	YUZUStake yuzustake;

    // Mock Yuzu token
    MockToken yuzu;

	uint256 constant PRECISION = 10000;

	// events
	event OrderCreated(
        uint256 oid,
        address from,
        uint256 stakedAt,
        uint256 stakeEndBlockNumber,
        uint256 depositAmount,
        uint256 mintAmount
    );
    event OrderUnstaked(
        uint256 oid,
        uint256 unstakedAt,
        uint256 unstakedEndBlockNumber
    );
    event OrderWithdrawed(uint256 oid, uint256 withdrawAt);
    event ConfigChanged(uint32 cid, uint256 blockCount, uint256 ratioBase10000);


	function setUp() public {
		hevm.startPrank(admin);
        // init contract instance
		yuzu = new MockToken();
        yuzustake = new YUZUStake(IERC20(address(yuzu)));
		hevm.roll(123456);

		// label address
		hevm.label(address(yuzu), "yuzu");
		hevm.label(address(yuzustake), "yuzustake");
		hevm.label(u1, "u1");
		hevm.label(u2, "u2");
		hevm.label(u3, "u3");
		hevm.label(admin, "admin");

		hevm.stopPrank();

	}


	// 1. constructor()
	

	// 1.1 test constructor succeed if if input NOT address(0)
	function testConstructWithNonZeroAddress(address tokenAddr) public {
        hevm.assume(tokenAddr != address(0));
		YUZUStake ys = new YUZUStake(IERC20(tokenAddr));
	}

	// 1.2 test $yuzuTokenIns == $_yuzuToken when setConfig succeed
	function testVar_yuzuTokenIns_Is__yuzuToken(address _yuzuTokenAddr) public {
		YUZUStake ys = new YUZUStake(IERC20(_yuzuTokenAddr));
		assertEq(address(ys.yuzuTokenIns()), _yuzuTokenAddr);
	}
	
	// *1.3 test owner setup
	function test_owner() public {
		assertEq(yuzustake.owner(), admin);
	}

	// 2. setConfig(uint32 _cid, uint256 _blockCount, uint256 _ratioBase10000) external configExists(_cid) onlyOwner

	// 2.1 test modifier::onlyOwner setConfig revert if call from address != address(owner)
	
	function test_setConfig_revert_if_call_from_non_owner() public {
		/// 2.1.1 owner add config first
		hevm.prank(admin);
		yuzustake.addConfig(10000, 40000);
		
		/// 2.1.2 set config by non-owner
		hevm.prank(u1);
		hevm.expectRevert("Ownable: caller is not the owner");
		yuzustake.setConfig(0, 2, 3);


		/// 2.1.3 check config remain unchange
		(uint blockcnt, uint ratiobase) = yuzustake.configs(0);
		assertEq(blockcnt, 10000);
		assertEq(ratiobase, 40000);
	}

	function test_setConfig_revert_if_call_from_non_owner1(uint blockcnt, uint ratiobase) public {
		/// 2.1.1 owner add config first
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		
		/// 2.1.2 set config by non-owner
		hevm.prank(u1);
		hevm.expectRevert("Ownable: caller is not the owner");
		yuzustake.setConfig(0, 2, 3);


		/// 2.1.3 check config remain unchange
		(uint blockcnt_, uint ratiobase_) = yuzustake.configs(0);
		assertEq(blockcnt, blockcnt_);
		assertEq(ratiobase, ratiobase_);
	}


	// 2.2 test modifier::configExists(_cid) setConfig revert if $_cid is equal or greater to $configs.length
	function test_setConfig_revert_if_cid_not_exist_0(uint32 cid) public {
		/// 2.1.2 set not exist config
		hevm.prank(admin);
		hevm.expectRevert("YuzuStake: config should exists");
		yuzustake.setConfig(cid, 2, 3);


		/// 2.1.3 check config lenght is 0
		assertEq(yuzustake.configLength(), 0);
	}

	function test_setConfig_revert_if_cid_not_exist_1(uint blockcnt, uint ratiobase, uint blockcnt1, uint ratiobase1, uint32 cid) public {
		/// 2.1.1 owner add config first
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		
		/// 2.1.2 set non exist config 
		hevm.prank(admin);
		hevm.assume(cid >= 1);
		hevm.expectRevert("YuzuStake: config should exists");
		yuzustake.setConfig(cid, blockcnt1, ratiobase1);


		/// 2.1.3 check config lenght is 1 and value correct(remain unchange)
		assertEq(yuzustake.configLength(), 1);
		(uint blockcnt_, uint ratiobase_) = yuzustake.configs(0);
		assertEq(blockcnt, blockcnt_);
		assertEq(ratiobase, ratiobase_);
	}

	// 2.3 test setConfig succeed when _cid exists and call from address == address(owner)
	function test_setConfig_succeed(uint blockcnt, uint ratiobase, uint blockcnt1, uint ratiobase1) public {
		/// 2.1.1 owner add config first
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		
		/// 2.1.2 set config[0] 
		hevm.prank(admin);
		yuzustake.setConfig(0, blockcnt1, ratiobase1);
	}

	// 2.4 test $configs[_cid].blockCount == $_blockCount, $configs[_cid].ratioBase10000 == $_ratioBase10000 when setConfig succeed
	function test_setConfig_succeed0(uint blockcnt, uint ratiobase, uint blockcnt1, uint ratiobase1) public {
		/// 2.1.1 owner add config first
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		
		/// 2.1.2 setconfig[0]
		hevm.prank(admin);
		yuzustake.setConfig(0, blockcnt1, ratiobase1);


		/// 2.1.3 check config lenght is 1 and value correct
		assertEq(yuzustake.configLength(), 1);
		(uint blockcnt_, uint ratiobase_) = yuzustake.configs(0);
		assertEq(blockcnt1, blockcnt_);
		assertEq(ratiobase1, ratiobase_);
	}
	// 2.5 test event::ConfigChanged(_cid, _blockCount, _ratioBase10000) emit, with correct parameters
	function test_setConfig_event_emit(uint blockcnt, uint ratiobase) public {
		/// 2.5.1 owner add config first
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);

		/// 2.5.2 owner set config
		hevm.prank(admin);
		hevm.expectEmit(true, true, true, true);
		emit ConfigChanged(0, blockcnt, ratiobase);
		yuzustake.setConfig(0,blockcnt, ratiobase);
		
		(uint blockcnt_, uint ratiobase_) = yuzustake.configs(0);
		assertEq(blockcnt, blockcnt_);
		assertEq(ratiobase, ratiobase_);
	}
	// 2.6 test $configs.length NOT change after setConfig
	function test_setConfig_length(uint blockcnt, uint ratiobase) public {
		/// 1 owner add config first

		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		uint len = yuzustake.configLength();

		/// 2 owner set cnfig
		hevm.prank(admin);
		yuzustake.setConfig(0,blockcnt, ratiobase);
		uint len1 = yuzustake.configLength();
		
		assertEq(len, len1);
	}


	// 3. addConfig(uint256 _blockCount, uint256 _ratioBase10000) external onlyOwner
	
	// 3.1 test modifier::onlyOwner addConfig revert if call from address != address(owner)
	function test_addConfig_revert_if_call_from_non_owner() public {
		hevm.prank(u1);
		hevm.expectRevert("Ownable: caller is not the owner");
		yuzustake.addConfig(10000, 10000);
		
	}
	
	// 3.2 test addConfig succeed call from address == address(owner) with legitemate parameters
	function test_addConfig_succeed(uint blockcnt, uint ratiobase) public {
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		
	}

	// 3.3 test $configs.length advance by 1 after addConfig
	function test_addConfig_configLength(uint blockcnt, uint ratiobase) public {
		uint len = yuzustake.configLength();
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		assertEq(yuzustake.configLength(), len+1);
		
	}

	// 3.3 test $configs[-1].blockCount == $_blockCount, $configs[-1].ratioBase10000 == $_ratioBase10000 when addConfig succeed
	function test_addConfig_config_value(uint blockcnt, uint ratiobase) public {
		hevm.prank(admin);
		yuzustake.addConfig(blockcnt, ratiobase);
		(uint blockcnt_, uint ratiobase_) = yuzustake.configs(0);
		assertEq(blockcnt, blockcnt_);
		assertEq(ratiobase, ratiobase_);
	}

	// 3.4 test event::ConfigChanged(uint32(configs.length - 1), _blockCount, _ratioBase10000) emit, with correct parameters
	function test_addConfig_event_emit(uint blockcnt, uint ratiobase) public {
		hevm.prank(admin);
		hevm.expectEmit(true, true, true, true);
		emit ConfigChanged(0, blockcnt, ratiobase);
		yuzustake.addConfig(blockcnt, ratiobase);
		
		(uint blockcnt_, uint ratiobase_) = yuzustake.configs(0);
		assertEq(blockcnt, blockcnt_);
		assertEq(ratiobase, ratiobase_);
	}

	// 4. stake(uint256 _amount, uint32 _cid) configExists(_cid) nonReentrant
	
	// 4.1 test modifier::configExists(_cid) stake revert if $_cid is equal or greater to $configs.length
	function test_stake_revert_on_non_exisit_config() public {
		// 1. give user some yuzu
		yuzu.mint(u1, 1000);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), 1000);
		
		// 2. stake 
		hevm.expectRevert("YuzuStake: config should exists");
		yuzustake.stake(10, 0);
	}

	// 4.2 test stake revert if Config.blockCount == 0 OR Config.ratioBase10000 == 0
	function test_stake_revert_on_zero_config() public {
		// 1. add config first 
		hevm.prank(admin);
		yuzustake.addConfig(0, 0);
		// 2. give user some yuzu
		yuzu.mint(u1, 1000);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), 1000);
		
		// 2. stake 
		hevm.expectRevert("YuzuStake: Config should be inited");
		yuzustake.stake(10, 0);
	}

	// 4.3 test balance(this) increase $_amount AND balance(msg.sender) decrease $_amount AND xyuzu.balance(msg.sender) increase $_amount / 10_000 (according to their doc)
	function test_stake_succeed(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		
		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));
	}

	// 4.4 test $userOrdreIds[msg.sender][-1] is $orders.length
	function test_stake_userOrderIds_length(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		
		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);
	}

	// 4.5 test $orders[-1] is:
	/* 
		status: StakeOrderStatus.STAKING, == 0
		from: msg.sender,
		stakedAt: currentBlock,
		stakeEndBlockNumber: currentBlock + stakeConfig.blockCount,
		unstakedAt: 0,
		unstakedEndBlockNumber: 0,
		withdrawAt: 0,
		depositAmount: _amount,
		mintAmount: mintAmount == _amount / 10_000
	*/

	function test_stake_userOrderIds_value(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		
		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);
		// uint8(status);
		assertEq(uint256(status), uint256(YUZUStake.StakeOrderStatus.STAKING));
		assertEq(from, u1);
		assertEq(stakedAt, block.number);
		assertEq(stakeEndBlockNumber, block.number + blockcnt);
		assertEq(unstakedAt, 0);
		assertEq(unstakedEndBlockNumber, 0);
		assertEq(withdrawAt, 0);
		assertEq(depositAmount, amount);

	}

	function test_stake_userOrderIds_value1(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		
		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);
		// uint8(status);
		assertEq(depositAmount, amount);
		assertEq(mintAmount, mintAmount_);

	}

	// 4.6 test $orders.length increase by 1, $userOrdreIds[msg.sender] increase by one
	function test_stake_length(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();
		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);
	}

	// 4.7 test event::OrderCreated(parameters) emit. Parameters:
	/*
		orderId,
		msg.sender,
		currentBlock,
		currentBlock + stakeConfig.blockCount,
		_amount,
		mintAmount
	*/

	function test_stake_OrderCreated_event(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);
	}


	// 5 unstake(uint256 _oid) external orderExists(_oid) nonReentrant

	// 5.1 test modifier::orderExists(_oid) unstake revert if $_oid is equal or greater to $orders.length
	function test_unstake_revert_on_nonexist_order_0(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		hevm.expectRevert("YuzuStake: order should exists");
		yuzustake.unstake(0);

	}

	function test_unstake_revert_on_nonexist_order_1(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// unstake
		hevm.expectRevert("YuzuStake: order should exists");
		yuzustake.unstake(1);

	}

	// 5.2 test unstake revert if $msg.sender is NOT $orders[_oid].from
		function test_unstake_revert_on_wrong_msgsender(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// u1 stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		hevm.stopPrank();

		// u2 unstake
		hevm.expectRevert("YuzuStake: not order owner ");
		hevm.prank(u2);
		yuzustake.unstake(0);

	}

	// 5.3 test unstake revert if $orders[_oid] is NOT in state::StakeOrderStatus.STAKING (== 0)

	// 5.4 test unstake revert if call before stakeEndBlockNumber reached (stakeEndBlockNumber <= block.number)

	// 5.5 (THEY DO INTERACTION BEFORE STATE CHANGE) test $orders[_oid].mintAmount lpToken burn from $msg.sender after unstake 
	function test_unstake_values(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
				// u1 stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);


		// unstake
		hevm.roll(block.number + blockcnt);
		yuzustake.unstake(0);
		// 1. check user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1), 0);
		// 2. check contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), amount);
		assertEq(yuzustake.totalSupply(),  0);

	}
	// 5.6 test order status update: 
	/*
		stakeOrder.status: StakeOrderStatus.STAKED => StakeOrderStatus.UNSTAKED (0 => 1)
        stakeOrder.unstakedAt: block.number (0 => block.number)
        
		variable = min(block.number - stakeOrder.stakeEndBlockNumber, stakeOrder.stakeEndBlockNumber - stakeOrder.stakedAt)
        
		stakeOrder.unstakedEndBlockNumber: block.number + freezeBlockCount (0 => block.number + variable)
	*/

	function test_unstake_states(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
				// u1 stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);


		// unstake
		hevm.roll(block.number + blockcnt);
		yuzustake.unstake(0);
		// 1. check user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1), 0);
		// 2. check contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), amount);
		assertEq(yuzustake.totalSupply(),  0);
		// 3. check status and unstakedEndBlockNumber
		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);

		uint freezcount = (stakeEndBlockNumber - stakedAt)>(block.number - stakeEndBlockNumber)?(block.number - stakeEndBlockNumber):(stakeEndBlockNumber - stakedAt);
		uint expectEnd = block.number + freezcount;
		assertEq(uint256(status), uint256(YUZUStake.StakeOrderStatus.UNSTAKED));
		assertEq(from, u1);
		assertEq(unstakedAt, block.number);
		assertEq(unstakedEndBlockNumber, expectEnd);
		
	}
	// 5.7 test event::OrderUnstaked(parameters) emit. Parameters:
	/*
		_oid, 
		unstakedAt (block.number), 
		unstakedEndBlockNumber (block.number + var)
	*/

	function test_unstake_event_emit(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// u1 stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);


		// unstake
		hevm.roll(block.number + blockcnt);
		hevm.expectEmit(true, true, true, true);
		emit OrderUnstaked(0, block.number, block.number);
		yuzustake.unstake(0);

		// 1. check user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1), 0);
		// 2. check contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), amount);
		assertEq(yuzustake.totalSupply(),  0);
		// 3. check status and unstakedEndBlockNumber
		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);

		uint freezcount = (stakeEndBlockNumber - stakedAt)>(block.number - stakeEndBlockNumber)?(block.number - stakeEndBlockNumber):(stakeEndBlockNumber - stakedAt);
		uint expectEnd = block.number + freezcount;
		assertEq(uint256(status), uint256(YUZUStake.StakeOrderStatus.UNSTAKED));
		assertEq(from, u1);
		assertEq(unstakedAt, block.number);
		assertEq(unstakedEndBlockNumber, expectEnd);
		
	}


	// 6 function withdraw(uint256 _oid) orderExists(_oid) nonReentrant

	// BORROW FROM 5.1 - 5.4
	// 6.1 test modifier::orderExists(_oid) withdraw revert if $_oid is equal or greater to $orders.length
	function test_withdraw_revert_on_nonexist_order_0(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		hevm.expectRevert("YuzuStake: order should exists");
		yuzustake.unstake(0);

	}

	function test_withdraw_revert_on_nonexist_order_1(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// withdraw
		hevm.expectRevert("YuzuStake: order should exists");
		yuzustake.unstake(1);

	}

	// 6.2 test withdraw revert if $msg.sender is NOT $orders[_oid].from
	function test_withdraw_revert_on_wrong_msgsender(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// withdraw
		hevm.expectRevert("YuzuStake: not order owner ");
		hevm.prank(u2);
		yuzustake.unstake(0);

	}

	// 6.3 test withdraw revert if $orders[_oid] is NOT in state::StakeOrderStatus.UNSTAKED (== 1)
	function test_withdraw_revert_on_wrong_state(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// withdraw before unstake
		hevm.expectRevert("YuzuStake: Order status need to be unstaked ");
		hevm.roll(block.number + blockcnt);
		yuzustake.withdraw(0);

	}

	// 6.4 test withdraw revert if call before stakeEndBlockNumber reached (unstakedEndBlockNumber <= block.number)
	function test_withdraw_revert_on_before_block_limit(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// unstake
		hevm.roll(block.number + blockcnt);
		yuzustake.unstake(0);
		// withdraw before unstake
		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);

		uint freezcount = (stakeEndBlockNumber - stakedAt)>(block.number - stakeEndBlockNumber)?(block.number - stakeEndBlockNumber):(stakeEndBlockNumber - stakedAt);
		uint expectEnd = block.number + freezcount;
		hevm.roll(expectEnd - 1);
		hevm.expectRevert("YuzuStake: current block should exceed unstakedEndBlockNumber");
		yuzustake.withdraw(0);

	}
	// 6.5 test order status update: 
	/*
		stakeOrder.status: StakeOrderStatus.UNSTAKED => StakeOrderStatus.WITHDRAW (1 => 2)
        stakeOrder.withdrawAt: block.number (0 => block.number)
	*/
	function test_withdraw_states(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// unstake
		hevm.roll(block.number + blockcnt);
		yuzustake.unstake(0);
		// withdraw before unstake

		// uint freezcount = (stakeEndBlockNumber - stakedAt)>(block.number - stakeEndBlockNumber)?(block.number - stakeEndBlockNumber):(stakeEndBlockNumber - stakedAt);
		uint expectEnd = block.number + blockcnt;
		hevm.roll(expectEnd);
		yuzustake.withdraw(0);

		// check states
		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);

		assertEq(uint256(status), uint256(YUZUStake.StakeOrderStatus.WITHDRAW));
		assertEq(withdrawAt, block.number);

	}
	// 6.6 test token transfer from address(this) to msg.sender
		function test_withdraw_balances(uint32 blockcnt, uint32 ratiobase, uint128 amount) public {
		// stake 
		// 1. add config first 
		hevm.prank(admin);
		hevm.assume(blockcnt!= 0 && ratiobase != 0);
		yuzustake.addConfig(uint256(blockcnt), uint256(ratiobase));
		// 2. give user some yuzu
		yuzu.mint(u1, amount);
		hevm.startPrank(u1);
		yuzu.approve(address(yuzustake), amount);
		uint mintAmount_ = uint256(amount).mul(ratiobase).div(PRECISION);
		uint len = yuzustake.orderLength();

		hevm.expectEmit(true, true, true, true);
		emit OrderCreated(0, u1, block.number,block.number + blockcnt, amount, mintAmount_);

		// 2. stake 
		yuzustake.stake(amount, 0);

		// 3.1 user balance
		assertEq(yuzu.balanceOf(u1), 0);
		assertEq(yuzustake.balanceOf(u1),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)), uint256(amount));
		assertEq(yuzustake.totalSupply(),  uint256(amount).mul(ratiobase).div(PRECISION));

		// 3.3 check user orders
		uint oid = yuzustake.userOrdreIds(u1, 0);
		assertEq(oid, 0);

		assertEq(yuzustake.orderLength(), len + 1);

		// unstake
		hevm.roll(block.number + blockcnt);
		yuzustake.unstake(0);
		// withdraw before unstake

		// uint freezcount = (stakeEndBlockNumber - stakedAt)>(block.number - stakeEndBlockNumber)?(block.number - stakeEndBlockNumber):(stakeEndBlockNumber - stakedAt);
		uint expectEnd = block.number + blockcnt;
		hevm.roll(expectEnd);
		yuzustake.withdraw(0);

		// check states
		(
			YUZUStake.StakeOrderStatus  status, //current status of order
			address from, // who create this order
			uint256 stakedAt, // block number of call stake
			uint256 stakeEndBlockNumber, // block number of stake end
			uint256 unstakedAt, // block number of  call unstake
			uint256 unstakedEndBlockNumber, //block number of unstake end
			uint256 withdrawAt, //block number of call withdraw
			uint256 depositAmount, // amount of YUZU to deposit
			uint256 mintAmount //amount of xYUZU to mint)
		) = yuzustake.orders(0);

		assertEq(uint256(status), uint256(YUZUStake.StakeOrderStatus.WITHDRAW));
		assertEq(withdrawAt, block.number);

		// balance checking
		// 1 user balance
		assertEq(yuzu.balanceOf(u1), amount);
		assertEq(yuzustake.balanceOf(u1),  0);

		// 2 contract balance
		assertEq(yuzu.balanceOf(address(yuzustake)),0);
		assertEq(yuzustake.totalSupply(),  0);

	}

	// EOF
	

	
	

	


	





}