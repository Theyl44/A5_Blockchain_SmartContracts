async function verifyAccount(){
    let walletAddress = sessionStorage.getItem("walletAddress");
    let realPassword = await getHashedPassword();
    if(walletAddress === null || walletAddress !== accountAddress){
        window.location.href = "../html/register.html";
    }else{
        let password = sessionStorage.getItem("password");
        if(password === null || password !== realPassword){
            window.location.href = "../html/register.html";
        }
    }
}

verifyAccount().then(r => {});
