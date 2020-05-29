function validate() {
    //shkruaj valdimin
    event.preventDefault();
    var Name = document.getElementById('Name');
    var NamePattern = /^\p{L}{3,20}$/u;

    if(!Name.value.match(NamePattern)){
        alert('Emri eshte shkruar ne format gabim!');
    }

    var LastName = document.getElementById('LastName');
    var LastNamePattern = /^\p{L}{3,20}$/u;

    if(!LastName.value.match(LastNamePattern)){
        alert('Mbiemri eshte shkruar ne format gabim!');
    }

    var Password = document.getElementById('Password');
    var PasswordPattern = /^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?\."]).*$/;

    if(!Password.value.match(PasswordPattern)){
        alert('Passwordi eshte shkruar ne format gabim!');
    }

    var CPassword = document.getElementById('CPassword');

    if(CPassword.value !== Password.value){
        alert("Shkruani passwordin njesoj si ne fushen me larte");
    }

    var Birthday = document.getElementById('Birthday');
    var BdayPattern =/^((?:0[1-9])|(?:1[0-2]))\.((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\.(\d{4})$/;
    var BdayPattern2 =/^((?:0[1-9])|(?:1[0-2]))\-((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\-(\d{4})$/;
    var BdayPattern3 =/^((?:0[1-9])|(?:1[0-2]))\/((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/(\d{4})$/;

    var BdayPattern4 =/^((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\.((?:0[1-9])|(?:1[0-2]))\.(\d{4})$/;
    var BdayPattern5 =/^((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\-((?:0[1-9])|(?:1[0-2]))\-(\d{4})$/;
    var BdayPattern6 =/^((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/((?:0[1-9])|(?:1[0-2]))\/(\d{4})$/;
 

    if(!Birthday.value.match(BdayPattern) & !Birthday.value.match(BdayPattern2)&!Birthday.value.match(BdayPattern3) &!Birthday.value.match(BdayPattern4) &!Birthday.value.match(BdayPattern5) &!Birthday.value.match(BdayPattern6)){
        alert("Formati i ditelindjes eshte shenuar gabim!");
    }
}