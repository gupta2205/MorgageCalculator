//calculate morgage by formula
// c = \frac{r P}{1-(1+r)^{-N}} = \frac {Pr(1+r)^N}{(1+r)^N-1}.
//

function Calculate(p,r,n)
{
r= PercentCalculate(r) ;
n= ConvertIntoMonth(n);
var MonthlyPayment= ((r*p)/(1-Math.pow((1+r),(-n))));
return parseFloat(MonthlyPayment.toFixed(2));
}

function post(pmt){
var amt= document.getElementById("spanid");
amt.innerText= "$"+pmt ;
}
// connecting all text field with javaScript 


var abc = document.getElementById("buttons");
console.log(abc);
abc.onclick = function(){
var TotalAmount = document.getElementById("amount").value;

if(TotalAmount<=0 || TotalAmount==""){
alert("Invalid value");
return false;
} 

var DownAmount = document.getElementById("down").value;

if( TotalAmount <= DownAmount ){
alert("Downpayment can't be greater than actual cost");

}


var Interest = document.getElementById("rate").value;
var TotalTime = document.getElementById("time").value;
var cost= TotalAmount-DownAmount;
var pmt = Calculate(cost,Interest,TotalTime);
post(pmt);
};


function PercentCalculate(percent){
return (percent/12)/100 ;

}
function ConvertIntoMonth(year){
return year*12;

}