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
      new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s3.binance.org:8545/')
    ),
    name: 'BSC Testnet',
    explorer: 'https://testnet.bscscan.com/tx/',
  },
  4: {
    web3Default: new Web3(
      new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/0b24df5ffd004d22800cbf0fa8c87a85'
      )
    ),
    name: 'Rinkeby Test Network',
    explorer: 'https://rinkeby.etherscan.io',
  },
  1: {
    web3Default: new Web3(
      new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/0b24df5ffd004d22800cbf0fa8c87a85'
      )
    ),
    name: 'Ethereum Mainnet',
    explorer: 'https://etherscan.io',
  },
};

export const networkDefault = 4;

export const getWeb3List = (_chainId) => {
  return web3Default[_chainId];
};