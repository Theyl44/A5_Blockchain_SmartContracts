pragma solidity 0.8.19;

contract wlgCertification{
    address owner;
    uint numberOfCertificate = 100;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, 'Not the owner');
        _;
    }

    struct certificate{
        uint id;
        string firstName;
        string lastName;
        string dp;
        string date;
    }
    mapping(string => certificate) Certificates;

    function getCertificate(string memory hashCertificate) public view returns(certificate memory){
        return Certificates[hashCertificate];
    }

    function getFirstName(string memory hashCertificate) public view returns(string memory){
        return Certificates[hashCertificate].firstName;
    }

    function getLastName(string memory hashCertificate) public view returns(string memory){
        return Certificates[hashCertificate].lastName;
    }

    function getDp(string memory hashCertificate) public view returns(string memory){
        return Certificates[hashCertificate].dp;
    }

    function getDateDiplome(string memory hashCertificate) public view returns(string memory){
        return Certificates[hashCertificate].date;
    }

    function getId(string memory hashCertificate) public view returns(uint){
        return Certificates[hashCertificate].id;
    }

    function getNumberOfCertif()public view returns(uint){
        return numberOfCertificate;
    }

    function addCertificate(string memory hashCertif, string memory firstNameUser, string memory lastNameUser, string memory dpUser, string memory dateDiplome) public{
        Certificates[hashCertif].id = numberOfCertificate+1;
        Certificates[hashCertif].firstName = firstNameUser;
        Certificates[hashCertif].lastName = lastNameUser;
        Certificates[hashCertif].dp = dpUser;
        Certificates[hashCertif].date = dateDiplome;

        numberOfCertificate = numberOfCertificate+1;
    }

}