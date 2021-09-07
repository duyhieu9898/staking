import Web3 from 'web3';

export const web3Default = {
  //BSC Mainnet
  56: {
    web3Default: new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')),
    name: 'BSC Mainnet',
    explorer: 'https://bscscan.com/tx/',
  },
  //BSC Testnet
  97: {
    web3Default: new Web3(
      new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s3.binance.org:8545/')
    ),
    name: 'BSC Testnet',
    explorer: 'https://testnet.bscscan.com/tx/',
  },
};

export const listInjectNetwork = {
  56: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  97: {
    chainId: '0x61',
    chainName: 'BSC-Testnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
  },
};

// export const networkDefault = 56;
export const networkDefault = !!localStorage.getItem('chainId')
  ? parseInt(localStorage.getItem('chainId'))
  : 56;

export const getWeb3List = (_chainId) => {
  return web3Default[_chainId];
};
export const getInjectNetwork = (_chainId) => {
  return listInjectNetwork[_chainId];
};
