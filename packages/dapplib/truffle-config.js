require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike rival mad hole give civil army gentle'; 
let testAccounts = [
"0x47f5c1ab86f5c0a0178cefdfdda7d00ac85014ca421d25da3fd1f999b8aedd27",
"0x3784ef02112bdbcbdef48ca74a0b5de1e6e6a9ba8409b4802fe33c12f5439ae4",
"0x9b058aceafd83dbc300049fb0f1411453caba9fe89fadc22d6caa35607861632",
"0x4f95bd3c4f36be5a4508cf87beeaea5c282ea0e7ddc6a039c2a55f969cdce159",
"0xfda47accc4273a7aa5479088ea6c726d8975d6c7ffc5d586e49cc48e740e1cfd",
"0xf91cc74edbe55905113f07242007946fd71e2e0513f7e6c55321267b607fea49",
"0x39b74ef6f63676e05508886dc20e582c7cffa94f8b0d17f0b8428306e4d8ef03",
"0xe40f7cb68409987995f7046c778370d3a551829d13d2840e2c3053eacf8bb137",
"0xe850b2ae0e4a6748055106d0f202bcf7846c29074e6afc635bdb831bca030769",
"0xe6b01b9ed1eb392580643a1812fa743a2474635f079fdca4e3849561da6be615"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

