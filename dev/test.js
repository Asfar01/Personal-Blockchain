const Blockchain = require('./blockchain');

const sikay = new Blockchain();

const bc1 ={
"chain": [
{
"index": 1,
"timestamp": 1590103903059,
"transactions": [],
"nonce": 100,
"hash": "d5b592c05dc25b5032553f1b27f4139be95e881f73db33b02b05ab20c3f9981e",
"previousBlockHash": null
},
{
"index": 2,
"timestamp": 1590103935630,
"transactions": [],
"nonce": 284978,
"hash": "00003660ad09c1046d41a4d7973077027c577f4d9d9f3c0c61d843afb2a85a73",
"previousBlockHash": "d5b592c05dc25b5032553f1b27f4139be95e881f73db33b02b05ab20c3f9981e"
},
{
"index": 3,
"timestamp": 1590103941253,
"transactions": [
{
"amount": 10,
"sender": "00",
"recipient": "3a7aafd09bbb11eaa27743fdfa16735f",
"timestamp": 1590103935686,
"transactionId": "4dee16609bbb11eaa27743fdfa16735f"
}
],
"nonce": 12715,
"hash": "0000f5aef304052b9efc0672974a8c2e9ee477757f75760bd8834859f10dd542",
"previousBlockHash": "00003660ad09c1046d41a4d7973077027c577f4d9d9f3c0c61d843afb2a85a73"
},
{
"index": 4,
"timestamp": 1590103946905,
"transactions": [
{
"amount": 10,
"sender": "00",
"recipient": "3a7aafd09bbb11eaa27743fdfa16735f",
"timestamp": 1590103941257,
"transactionId": "514027909bbb11eaa27743fdfa16735f"
}
],
"nonce": 102395,
"hash": "000097bf0e3d7afd57638c7186ee66674850674f37c4b965a9eac9d0c58f352b",
"previousBlockHash": "0000f5aef304052b9efc0672974a8c2e9ee477757f75760bd8834859f10dd542"
},
{
"index": 5,
"timestamp": 1590103947948,
"transactions": [
{
"amount": 10,
"sender": "00",
"recipient": "3a7aafd09bbb11eaa27743fdfa16735f",
"timestamp": 1590103946911,
"transactionId": "549ee2f09bbb11eaa27743fdfa16735f"
}
],
"nonce": 10232,
"hash": "000059a044981a6ec1944aeff83dd19d4d13c34659b4e7adb72506c879af89e8",
"previousBlockHash": "000097bf0e3d7afd57638c7186ee66674850674f37c4b965a9eac9d0c58f352b"
},
{
"index": 6,
"timestamp": 1590103949834,
"transactions": [
{
"amount": 10,
"sender": "00",
"recipient": "3a7aafd09bbb11eaa27743fdfa16735f",
"timestamp": 1590103947951,
"transactionId": "553d93f09bbb11eaa27743fdfa16735f"
}
],
"nonce": 36170,
"hash": "0000e83e12499a8fcab3f394a8d548c261245951d91d261e8c685c8960aa6835",
"previousBlockHash": "000059a044981a6ec1944aeff83dd19d4d13c34659b4e7adb72506c879af89e8"
}
],
"pendingTransactions": [
{
"amount": 10,
"sender": "00",
"recipient": "3a7aafd09bbb11eaa27743fdfa16735f",
"timestamp": 1590103949838,
"transactionId": "565d82e09bbb11eaa27743fdfa16735f"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

    console.log('VALID:',sikay.chainIsValid(bc1.chain));