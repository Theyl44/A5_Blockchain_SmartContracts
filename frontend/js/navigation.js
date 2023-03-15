async function adaptNavigation(){
    let walletAddress = sessionStorage.getItem("walletAddress");
    let realPassword = await getHashedPassword();
    if(walletAddress === null || walletAddress !== accountAddress){
        document.getElementById("linkToAddCertificate").innerHTML = "";
    }else{
        let password = sessionStorage.getItem("password");
        if(password === null || password !== realPassword){
            document.getElementById("linkToAddCertificate").innerHTML = "";
        }
    }
}

adaptNavigation().then(r => {});