const sideL = document.getElementById("sideL");
const numsides = document.getElementById("sides");
const btn1 = document.getElementById("calcbtn");
const out1 = document.getElementById("output1");
const out2 = document.getElementById("output2");
const out3 = document.getElementById("output3");
const out4 = document.getElementById("output4");



function calc() {
 /*A = (1/4)na2 cot(π/n)*/
  var n = parseInt(document.getElementById('sides').value);
  var a = parseInt(document.getElementById('sideL').value);
  var form = document.getElementById('formula').value;
  if(form ==='A')
  {
    document.getElementById('result').value= (n * Math.pow(a, 2) / 4) * (1 / Math.tan ((Math.PI) / n))+"m^2";
  }
  if(form ==='P'){
   
    document.getElementById('result').value = n*a+" "+"m";
  }
  if(form ==='r'){
    
    document.getElementById('result').value=(a/2)*(1 / Math.tan ((Math.PI) / n))+" "+"m"
  }
  if(form ==='cr'){

    document.getElementById('result').value =(a/2)*(1/Math.sin((Math.PI) / n))+" "+"m"
  }
}

function funoutput() {
  out1.innerHTML = "n=" + sides.value + " "+"sides";
  out2.innerHTML = "a=" + sideL.value + " " + "m";
  
}
btn1.addEventListener('click',calc);

