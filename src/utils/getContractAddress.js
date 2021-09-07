import bnb from 'Assets/icons/binance-smart-chain-icon.png';

import Artboard1 from 'Assets/icons/Artboard1.png';
import Artboard3 from 'Assets/icons/Artboard3.png';
import Artboard4 from 'Assets/icons/Artboard4.png';

const contractAddress = {
  //BSC Mainnet
  56: {
    USDT: { address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', symbol: 'BUSD', decimals: '18' },
    NATIVE: {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      symbol: 'WBNB',
      decimals: '18',
    }, // WBNB
    PairUsdtNative: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // pair USDT-WBNB
  },
  //BSC Testnet
  97: {
    USDT: { address: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7', symbol: 'BUSD', decimals: '18' },
    NATIVE: {
      address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      symbol: 'WBNB',
      decimals: '18',
    }, // WBNB
    PairUsdtNative: '0xd57c0c65a8e7b7Fb0a81B9b2ba70Ce11372599d0', // pair USDT-WBNB
  },
};

const listTokensFarmDefault = {
  56: [
  ],
  97: [
    {
      icon: Artboard3,
      namePair: 'WANA-BUSD',
      addressLP: '0x22ABa1512Aa98574406bdbAea5e1aB312590a310',
      wana: '0x47a09fc7E7C55f81Bc0dE6b26101f3BF83df9356',
      contractFarm: '0x3b883Db5d5CcE09032fd41cE2331DcAb9D9181d7',
      contractVesting: '0x13dACc57d20bd1803683638605DEB055CaF7af2A',
      token0: 'BUSD', // it can be an address or a symbol
      symbolEarn: 'WANA',
      decimalsWana: 18,
      allowanceFarm: 0,
      pendingReward: 0,
      amountStake: 0,
      balanceLP: 0,
      claimableAmount: 0,
      amountLocking: 0,
      vestingDuration: 0,
      apr: 0,
      yearlyWanaReward: 458957,
      multiplier: 0.1,
      autoRestake: false,
    },
  ],
};

const listTokensPoolDefault = {
  56: [
  ],
  97: [
    {
      icon: Artboard4,
      namePair: 'WANA',
      addressLP: '0x47a09fc7E7C55f81Bc0dE6b26101f3BF83df9356',
      pairTokenAndNative: '0x7164c4F91Feb60b29E3781a2deA79CB0b1CcB0C1',
      contractPool: '0x175ac1B701f4A4A11F0E8AEd98e8fb06024606Ff',
      token0: 'BNB', // it can be an address or a symbol
      symbolEarn: 'WANA',
      decimalsLP: 18,
      allowanceFarm: 0,
      pendingReward: 0,
      amountStake: 0,
      balanceLP: 0,
      vestingDuration: 0,
      apr: 0,
      yearlyWanaReward: 378114,
      multiplier: 0.02,
      autoRestake: false,
      statusCompound: true,
    },
  ],
};

const rootUrlsView = {
  56: {
    addLP: 'https://exchange.pancakeswap.finance/#/add/',
    viewContract: 'https://bscscan.com/address/',
    seePairInfo: 'https://pancakeswap.info/pair/',
    blocksPerMonth: 864000,
    swap: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=',
  },
  97: {
    addLP: 'https://pancake.kiemtienonline360.com/#/add/',
    viewContract: 'https://testnet.bscscan.com/address/',
    seePairInfo: 'https://pancake.kiemtienonline360.com/pair/',
    blocksPerMonth: 864000,
    swap: 'https://pancake.kiemtienonline360.com/#/swap?outputCurrency=',
  }
};

export const listChainsSupport = [
  { chainId: 56, name: 'BSC', icon: bnb, isETH: false /*BSC Mainnet*/ },
  { chainId: 97, name: 'BSC Testnet', icon: bnb, isETH: false /*BSC Testnet*/ },
];

const infoChains = {
  //BSC Mainnet
  56: { name: 'BSC', icon: bnb },
  //BSC Testnet
  97: { name: 'BSC-Testnet', icon: bnb },
};

export const getContractAddress = (_chainId) => {
  return contractAddress[_chainId];
};
export const getListTokensFarmDefault = (_chainId) => {
  return listTokensFarmDefault[_chainId];
};
export const getListTokensPoolDefault = (_chainId) => {
  return listTokensPoolDefault[_chainId];
};
export const getRootUrlView = (_chainId) => {
  return rootUrlsView[_chainId];
};
export const getInfoChain = (_chainId) => {
  return infoChains[_chainId];
};
