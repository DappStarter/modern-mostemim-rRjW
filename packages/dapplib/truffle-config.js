require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue repeat saddle hub grace hero forget gauge'; 
let testAccounts = [
"0x4037efd9b82912037ccf6db10c07b61074727a9fa630dd61ff2f529fe5467b8e",
"0x5a97809721a7cd63f3708163113e4a2a4a6ec028c00956cefb51a5b6dd440034",
"0x7ae5305eefe954db37f62c0f9137d0ab643d57059a802fdfeedd4811e61f1107",
"0x3e5c04cfa3e240f974ac83c1c1bcbf339b5bc9524c77f15a88e996a48e9950c1",
"0x7b436d6f78671655566171bf605e0794c234ad81c9e3c2e5ee5be2d11159e114",
"0x494029bad3a87e6307f7bdfe34d102f53e0697e0b21886080ad7847bb3044cd5",
"0xbe65a90fa0cafeba32045e6d58c658bc6845836151cd0d378731cc8eed4f55a9",
"0x1f584e69f1c464495b926fd7eb468d7971f749ddc6402d13e7b9e715823fbc15",
"0x378b2f8de044d23a18999e57656f1e28011c37c2938e3e253423315081cce87f",
"0x59b3bcaa8779c3671f6df06b92ee90bdd8cc5fe634e008a52eb13476d338a327"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


