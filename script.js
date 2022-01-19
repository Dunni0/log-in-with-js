const usernameDom = document.querySelector(".username")
const passwordDom = document.querySelector(".password")
var logIn = document.querySelector(".btn")
var users=[
{"username": "dee",
 "password":"1234" 
},
{
  "username": "bola",
  "password" : "123"
}
]
var log_in = ("click", function(){
    users.forEach((element,index) =>{
   var user= element.username;
   var pass=element.password;
   console.log(user)
   console.log(pass)
   if (usernameDom.value == user && passwordDom.value == pass){
    document.location.href="index2.html";
    var error=document.querySelector(".error");
    error.style.display="none";
    document.querySelector(".h4").style.display="none";
    document.querySelector(".h5").style.display="none";
    document.querySelector(".h6").style.display="none";
    document.querySelector(".h7").style.display="none";
   }
   else if(usernameDom.value == "" || passwordDom.value == ""){
    var error2= document.querySelector(".error2");
    error2.textContent="space cannot be left empty";
    error2.classList.add("thirdH5");
   }
    else{
        var a= document.querySelector("#aError");
        var a2= document.querySelector("#aError2");
        var error=document.querySelector(".error");
        error.textContent="password or username not correct";
        error.classList.add("secondH5");
        a.style.color="red"
        a2.style.color="red"
    }
    });
});

var clk = function(){
    document.querySelector(".btn").addEventListener("click",log_in)

        document.addEventListener("keypress",function(){
            if(event.charCode==13|| event.which==13){
                log_in();
            }
        })
    }
    clk();