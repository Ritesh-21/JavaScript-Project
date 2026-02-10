let email = document.querySelector("#email")
let password = document.querySelector("#password")
let warn = document.querySelectorAll(".Warn"); 

document.querySelector("form").addEventListener("submit",function(dets){
    dets.preventDefault();

    //    warn[0].textContent=" ";
    //    warn[1].textContent=" ";

 const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let eresult = emailregex.test(email.value)
let presult = passwordregex.test(password.value)

let isvalid = true ;

if(!eresult){
   warn[0].style.display = "initial";
   isvalid = false ;
}

if(!presult){
    warn[1].style.display = "initial";
    isvalid = false ;
}

if(isvalid){
    document.querySelector(".ok").style.display = "initial";

}
    
})