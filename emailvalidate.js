function validatemail(email){

    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if(!re.test(email)){
        console.log("Please enter a valis email address !!");

    }

    alert("Welcome user !");
}

var email=window.prompt("Enter email");


validatemail(email);