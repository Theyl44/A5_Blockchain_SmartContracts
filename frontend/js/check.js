async function hashDocument() {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var data = e.target.result;
        let encrypted = CryptoJS.SHA256(data);
        console.log('encrypted: ' + encrypted);
        verifyACertificate(encrypted)
    };
    reader.readAsBinaryString(file);
}

async function verifyACertificate(hashToVerify) {
    if(await checkIfCertificateExist(hashToVerify.toString())){
        let informationOfStudent = await summaryDiplome(hashToVerify.toString());
        if(informationOfStudent.length > 0){
            let fName = informationOfStudent[0];
            let lName = informationOfStudent[1];
            let dp = informationOfStudent[2];
            let date = informationOfStudent[3];
            document.getElementById("firstNameResultInput").value = fName;
            document.getElementById("lastNameResultInput").value = lName;
            document.getElementById("dpResultInput").value = dp;
            document.getElementById("dateResultInput").value = date;
            document.getElementById("card-result-header").style.backgroundColor = "green";
            document.getElementById("containerResult").removeAttribute("hidden");
        }
    }else{
        document.getElementById("firstNameResultInput").value = "";
        document.getElementById("lastNameResultInput").value = "";
        document.getElementById("dpResultInput").value = "";
        document.getElementById("dateResultInput").value = "";
        document.getElementById("card-result-header").style.backgroundColor = "red";
        document.getElementById("containerResult").setAttribute("hidden", "hidden");
    }
}