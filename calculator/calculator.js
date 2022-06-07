 
function resultfv(){
var a=parseInt(document.querySelector("#formGroupExampleInput").value);
var b= parseInt(document.querySelector("#formGroupExampleInput2").value);
var divide= b/100;
var plus=1+divide;
var plus_result=plus;
var c =parseInt(document.querySelector("#formGroupExampleInput3").value);
var power= Math.pow(plus_result,c);
var power_result=power;
var sum=a*power_result;
var sum1=Math.round(sum);
 


 document.querySelector("#output").innerHTML=sum1;

}
 
document.querySelector("#input_btn2").addEventListener("click",resultpv);

function resultpv(){
    var a=parseInt(document.querySelector("#formGroupExampleInput").value);
    var b= parseInt(document.querySelector("#formGroupExampleInput2").value);
    var divide= b/100;
    var plus=1+divide;
    var plus_result=plus;
    var c =parseInt(document.querySelector("#formGroupExampleInput3").value);
    var power= Math.pow(plus_result,c);
    var power_result=power;
    var sum=a/power_result;
    var sum1=Math.round(sum);
     
    
    
     document.querySelector("#output").innerHTML=sum1;
    
    }
     