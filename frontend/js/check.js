function myFunc() {
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        console.log('Data: ' + data);
        var encrypted = CryptoJS.SHA256(data);
        console.log('encrypted: ' + encrypted);
    };
    reader.readAsBinaryString(file);
}