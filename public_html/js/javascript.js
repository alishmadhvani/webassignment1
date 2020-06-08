/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var x=2;

function func1(){
        document.getElementById("content").style.visibility="hidden";
    if(x==2){
      document.getElementById("leg").innerHTML="Q2. What was the name of Iron Man in MCU?"  ;
      document.getElementById("wa1").innerHTML="pony stark";
      document.getElementById("ra").innerHTML="tony stark";
      document.getElementById("wa2").innerHTML="lony stark";
      document.getElementById("wa3").innerHTML="grony stark";
      x=x+1;
    }   
    if(x==3){
        document.getElementById("leg").innerHTML="Q3. 1 second is how many millisecond ?"  ;
      document.getElementById("wa1").innerHTML="100";
      document.getElementById("ra").innerHTML="1000";
      document.getElementById("wa2").innerHTML="10";
      document.getElementById("wa3").innerHTML="10000";
    }
}