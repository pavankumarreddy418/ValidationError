
function validate(){  
var name=document.f1.name.value;  
var passwordlength=document.f1.password.value.length; 
var otplength =document.f1.OTP.value.length; 
var atdate=name.indexOf("@");  
var comma=name.lastIndexOf(".");  
 
var status=false;  
if(name==""){  
document.getElementById("namelocation").innerHTML= "*Please enter your name";  
status=false;
}
else{  
document.getElementById("namelocation").innerHTML="Please Wait Sever is validdating Your Deatils";  
status=true;
}  

if(atdate<1 || comma<atdate+2 || comma+2>=name.length){  
    document.getElementById("namelocation").innerHTML= "*Please enter  valid e-mail address or Correct user Name";  
    status=false;
    }
    else{  
    document.getElementById("namelocation").innerHTML="Please Wait Sever is validdating Your Deatils";  
    status=true;
    } 

if(passwordlength<6){  
document.getElementById("passwordlocation").innerHTML="*Password must be greater than 6";  
status=false; 
}else{  
document.getElementById("passwordlocation").innerHTML="Please Wait Sever is validdating Your Deatils";
status=true;
}  

if(otplength<4){  
    document.getElementById("OTPlocation").innerHTML="*OTP must be four Digits";  
    status=false; 
    }else{  
    document.getElementById("OTPlocation").innerHTML="Please Wait Sever is validdating Your Deatils";
    status=true;
    }  
return status;  
}  

// sign form

function validatesign(){  
    var name=document.f2.name1.value;  
    var passwordlength=document.f2.password1.value.length; 
    var otplength =document.f2.OTP1.value.length; 
    var atdate=name.indexOf("@");  
    var comma=name.lastIndexOf(".");  

    if(name==""){  
    document.getElementById("namelocation1").innerHTML= "*Please enter your name";  
        }
    else{  
    document.getElementById("namelocation1").innerHTML="Please Wait Sever is validdating Your Deatils";  
       }  
    
    if(atdate<1 || comma<atdate+2 || comma+2>=name.length){  
        document.getElementById("namelocation1").innerHTML= "*Please enter  valid e-mail address or Correct user Name";  
               }
        else{  
        document.getElementById("namelocation1").innerHTML="Please Wait Sever is validdating Your Deatils";  
                } 
    
    if(passwordlength<6){  
    document.getElementById("passwordlocation1").innerHTML="*Enter Full Name";  
       }else{  
    document.getElementById("passwordlocation1").innerHTML="Please Wait Sever is validdating Your Deatils";
       }  
    
    if(otplength<10){  
        document.getElementById("OTPlocation1").innerHTML="*Enter Correct Phone Number";  
        
        }else{  
        document.getElementById("OTPlocation1").innerHTML="Please Wait Sever is validdating Your Deatils";
       
        }  
    }  
    