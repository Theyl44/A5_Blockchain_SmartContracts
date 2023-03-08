let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertif",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "firstNameUser",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "lastNameUser",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "dpUser",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "dateDiplome",
                "type": "string"
            }
        ],
        "name": "addCertificate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "getCertificate",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "firstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "lastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "dp",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    }
                ],
                "internalType": "struct wlgCertification.certificate",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "getDateDiplome",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "getDp",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "getFirstName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "getId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "getLastName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNumberOfCertif",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
let contractAddress = "0xB527E9C5ef39Ed670447eBbE9A508d93bD19e74E";
let accountAddress = "0xf276c0FC85d74eB379A160F04f32BAccC9e1Cf03";
let gazForSC =  145000;
let gazPrice = 100000;
let contract = new web3.eth.Contract(abi, contractAddress,{
    from: accountAddress,
    gas:gazForSC});


//Getters
async function getCertificate(hashCertificate){
    return await
        contract.methods.getCertificate(hashCertificate).call()
            .then(result => {
                console.log(result)
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function getFirstName(hashCertificate){
    return await
        contract.methods.getFirstName(hashCertificate).call()
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function getLastName(hashCertificate){
    return await
        contract.methods.getLastName(hashCertificate).call()
            .then(result => {
                console.log(result)
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function getDp(hashCertificate){
    return await
        contract.methods.getDp(hashCertificate).call()
            .then(result => {
                console.log(result)
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function getDateDiplome(hashCertificate){
    return await
        contract.methods.getDateDiplome(hashCertificate).call()
            .then(result => {
                console.log(result)
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function getId(hashCertificate){
    return await
        contract.methods.getId(hashCertificate).call()
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function getNumberOfCertificate(hashCertificate){
    return await
        contract.methods.getNumberOfCertif().call()
            .then(result => {
                console.log(result)
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}


//Setters
async function addCertificate(hashCertificate, firstName, lastName, dp, dateDiplome){
    await contract.methods.addCertificate(hashCertificate, firstName, lastName, dp, dateDiplome).send({from : accountAddress})
        .on('transactionHash', function(hash){
            //
        })
        .on('confirmation', function(confirmationNumber, receipt){
            //
        })
        .on('receipt', function(receipt) {
            // receipt example
            console.log(receipt);
        })
        .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log(error+" on the "+receipt);
        });
}

function summaryDiplome(hashCertificate){
    let fName = getFirstName(hashCertificate);
    let lName = getLastName(hashCertificate);
    console.log(fName);
    let dp1 = getDp(hashCertificate);
    let dateDiplome = getDateDiplome(hashCertificate);
    console.log("Diplome de : "+fName+" "+lName+ " in dp : "+dp1+" gain in "+dateDiplome);
}
//"7775e2a1b0fc7635e0a22aabab5f02b0716e9fbdf79bac1acd7f818b505931c6","Theo","Lopez","Cyber","01/10/2023"

let hash = "7775e2a1b0fc7635e0a22aabab5f02b0716e9fbdf79bac1acd7f818b505931c6";
let firstName = "Theo";
let lastName = "Lopez";
let dp="Cyber";
let date="01/10/2023";

//"bonjour","Emeric","Guichet","Cyber","10/10/2023"

let hash2="bonjour";
let firstName2 = "Emeric";
let lastName2 = "Guichet";
let dp2="Cyber";
let date2="10/10/2023";

addCertificate(hash2, firstName2, lastName2, dp2, date2);
summaryDiplome(hash);