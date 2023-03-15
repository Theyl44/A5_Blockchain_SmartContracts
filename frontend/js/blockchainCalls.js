let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let contractAddress = "0x614381aC673fB63e891F8a7EB1B25D7D188841A2";
let accountAddress = "0x430b0d8b8add71E5b5EA552b743d44660c16d822";
let gazForSC =  200000;
let gazPrice = 100000;
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
                    },
                    {
                        "internalType": "bool",
                        "name": "isUsed",
                        "type": "bool"
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
        "inputs": [],
        "name": "getHashedPassword",
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
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hashCertificate",
                "type": "string"
            }
        ],
        "name": "isCertificateExist",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let contract = new web3.eth.Contract(abi, contractAddress,{
    from: accountAddress,
    gas:gazForSC});


//Getters
async function getCertificate(hashCertificate){
    return await
        contract.methods.getCertificate(hashCertificate).call()
            .then(result => {
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
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}

async function doesCertificateExist(hashCertificate){
    return await
        contract.methods.isCertificateExist(hashCertificate).call()
            .then(result => {
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

async function summaryDiplome(hashCertificate){

    let isCertificateValid = await doesCertificateExist(hashCertificate);
    let result = [];
    if(isCertificateValid){
        let fName = await getFirstName(hashCertificate);
        let lName = await getLastName(hashCertificate);
        let dp = await getDp(hashCertificate);
        let dateDiplome = await getDateDiplome(hashCertificate);
        console.log("Diplome de : "+fName+" "+lName+ " in dp : "+dp+" gain the "+dateDiplome);
        result.push(fName);
        result.push(lName);
        result.push(dp);
        result.push(dateDiplome);
    }else{
        console.log("No diploma for this certificate, wrong certificate");
    }
    return result;
}

async function checkIfCertificateExist(hashCertificate){
    let isCertificateValid = await doesCertificateExist(hashCertificate);
    if(isCertificateValid) {
        return true;
    }else{
        return false;
    }
}

async function getHashedPassword(){
    return await
        contract.methods.getHashedPassword().call()
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log(error);
            })
}
async function authen() {
    let pass = await getHashedPassword();
    let user_pass = document.getElementById("motdepasse").value;
    let user_add = document.getElementById("addresse").value;
    var encrypted_pass = CryptoJS.SHA256(user_pass);

    if(encrypted_pass == pass){
        //alert("OKOK");
        sessionStorage.setItem("walletAddress", user_add);
        sessionStorage.setItem("password", encrypted_pass);
        window.location.href = "../html/ajout.html";
    }else {
        //alert("NOT OK");
        var t1 = document.getElementById("title");
        t1.innerHTML+= "<div class='alert alert-danger' role='alert'> Accès non autorisé </div>";
    }
}

//--------------- For Tests ----------------------

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