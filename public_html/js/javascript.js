/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var x=1;
var y=0;
var test=false;
function func1(){
   
    if(document.getElementById("ra").checked){
        document.getElementById("content").style.display="none";
         document.getElementById("results1").style.display="block";
         y=y+1
         test=true;
    }
    else{
        document.getElementById("results2").style.display="block";
         document.getElementById("content").style.display="none";
    }    
    document.getElementById("btn1").style.visibility="hidden";
    document.getElementById("buttons").style["margin-left"]="37%"
    
}

function func2(){
   
    document.getElementById("buttons").style["margin-left"]="42%"
    document.getElementById("btn1").style.visibility="visible";
    document.getElementById("wa1").checked=false;
    document.getElementById("ra").checked=false;
    document.getElementById("wa2").checked=false;
    document.getElementById("wa3").checked=false;    
     document.getElementById("results1").style.display="none";
      document.getElementById("results2").style.display="none";
    x=x+1
    document.getElementById("content").style.display="block";
     if(x==2){
        if(test===true){
            document.getElementById("shp1").style["background-color"]="green";
        }
        else{
            document.getElementById("shp1").style["background-color"]="red";
        }
      document.getElementById("leg").innerHTML="Q2. What was the name of Iron Man in MCU?"  ;
      document.getElementById("opt1").innerHTML="pony stark";
      document.getElementById("opt2").innerHTML="tony stark";
      document.getElementById("opt3").innerHTML="lony stark";
      document.getElementById("opt4").innerHTML="grony stark";
      test=false;
    }   
    
    if(x==3){
        if(test===true){
            document.getElementById("shp2").style["background-color"]="green";
        }
        else{
            document.getElementById("shp2").style["background-color"]="red";
        }
        document.getElementById("leg").innerHTML="Q3. 1 second is how many millisecond ?"  ;
      document.getElementById("opt1").innerHTML="100";     
      document.getElementById("opt2").innerHTML="1000";
      document.getElementById("opt3").innerHTML="10";
      document.getElementById("opt4").innerHTML="10000";
      test=false;
    }
    
    if(x==4){
         document.getElementById("btn1").style.visibility="hidden";
          document.getElementById("btn2").style.visibility="hidden";
        if(test===true){
            document.getElementById("shp3").style["background-color"]="green";
        }
        else{
            document.getElementById("shp3").style["background-color"]="red";
        }
        document.getElementById("content").style.display="none";
        document.getElementById("finalscr").style.display="block";
        document.getElementById("finalscr").innerHTML="The Final Score is "+y;
    }
}

function func3(){
    document.getElementById("maincontent").style.display="none";
    document.getElementById("help").style.display="block";
}
function func4(){
      document.getElementById("maincontent").style.display="block";
    document.getElementById("help").style.display="none";
}