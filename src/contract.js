import Web3 from 'web3'
const {networks, abi} = require('./MyContract.json')

const PContract = () => {
    const web3 = new Web3('http://127.0.0.1:7545')
    const contractAddress = networks['5777']['address'];

    return new web3.eth.Contract(
        abi,
        contractAddress
    )
}

export default PContract