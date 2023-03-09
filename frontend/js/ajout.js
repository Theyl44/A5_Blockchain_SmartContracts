async function hashDocument() {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        console.log('Data: ' + data);
        var encrypted = CryptoJS.SHA256(data);
        console.log('encrypted: ' + encrypted);
        addACertificate(encrypted.toString());
    };
    reader.readAsBinaryString(file);
}

function collectInformationOfStudent(){
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let dp = document.getElementById("dpInput").value;
    let date = document.getElementById("dateCertification").value;
    return [firstName, lastName, dp, date];

}

async function addACertificate(encrypted){
    let informationOfStudent = collectInformationOfStudent();
    let fName = informationOfStudent[0];
    let lName = informationOfStudent[1];
    let dp = informationOfStudent[2];
    let date = informationOfStudent[3];

    await addCertificate(encrypted, fName, lName, dp, date);
}
