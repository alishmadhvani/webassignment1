/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var x=1;
var y=0;
function func1(){
    if(document.getElementById("ra").checked){
        document.getElementById("content").style.display="none";
         document.getElementById("results1").style.display="block";
         y=y+1
    }
    else{
        document.getElementById("results2").style.display="block";
         document.getElementById("content").style.display="none";
    }    
}

function func2(){
     document.getElementById("results1").style.display="none";
      document.getElementById("results2").style.display="none";
    x=x+1
    document.getElementById("content").style.display="block";
     if(x==2){
         
      document.getElementById("leg").innerHTML="Q2. What was the name of Iron Man in MCU?"  ;
      document.getElementById("opt1").innerHTML="pony stark";
      document.getElementById("opt2").innerHTML="tony stark";
      document.getElementById("opt3").innerHTML="lony stark";
      document.getElementById("opt4").innerHTML="grony stark";
    }   
    
    if(x==3){
        document.getElementById("leg").innerHTML="Q3. 1 second is how many millisecond ?"  ;
      document.getElementById("opt1").innerHTML="100";     
      document.getElementById("opt2").innerHTML="1000";
      document.getElementById("opt3").innerHTML="10";
      document.getElementById("opt4").innerHTML="10000";
    }
    
    if(x==4){
        document.getElementById("content").style.display="none";
        document.getElementById("finalscr").style.display="block";
        document.getElementById("finalscr").innerHTML="The Final Score is "+y;
    }
}