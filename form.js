// email validation

var email=document.getElementById("email");
var error=document.getElementById("error");


function validate(){
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color="green";
        email.style.border="2px solid darkgreen"
        return true;
    }

    else  {
        error.innerHTML ="Invalid Email provided";
        error.style.color="red";
        email.style.border="2px solid red"
        return false;
    }

    
}
 function checkpass(){
     var pwd=document.getElementById("pwd");
     var pwd2=document.getElementById("pwd2");
     var message=document.getElementById("msg");
     var green = "#66cc66";
     var red = "#ff6666";
     var orange="#FFA500";

     if(pwd.value.length>8){
        pwd.style.backgroundColor = green;
        message.style.color = green;
        message.innerHTML = "character number ok!"
     }
     else if(pwd.value.length>5 ){
        pwd.style.backgroundColor =orange ;
     }

     else {
        pwd.style.backgroundColor = red;
        message.style.color = red;
        message.innerHTML = " you have to enter at least 8 digit!"
        return;
    }
    if (pwd.value == pwd2.value) {
        pwd2.style.backgroundColor = green;
        message.style.color = green;
        message.innerHTML = "success!"
    } else {
        pwd2.style.backgroundColor = red;
        message.style.color = red;
        message.innerHTML = " These passwords don't match"
    }
}

    var re = document.getElementById("phvalid");

// function phonenumber(phvalid) {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     var phone = /^\d{10}$/;
//     if ((re.value.match(phoneno)) || (re.value.match(phone))) {
//         return true;
//     } 
//     else {
//         alert("Phone Number Invalid!");
//         return false;
//     }
// }
$(document).ready(function () {

    $(".phone_us").keyup(function (e) {
        var value = $(".phone_us").val();
        if (e.key.match(/[0-9]/) == null) {
            value = value.replace(e.key, "");
            $(".phone_us").val(value);
            return;
        }
    
        if (value.length == 3) {
            $(".phone_us").val(value + "-")
        }
        if (value.length == 7) {
            $(".phone_us").val(value + "-")
        }
    });
    });

