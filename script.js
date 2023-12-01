//Function to check the username and password to help you login 
function login(event){
    event.preventDefault();
    var userName = document.getElementById("uName").value;
    var passWord = document.getElementById("uPass").value;
    if(userName == "franklin" && passWord =="franklin" ||userName == "eben" && passWord =="eben"){
        alert("Login Successful");
        var targetPageUrl = 'main.html';
        window.location.href = targetPageUrl;    
    }
    else{
        alert("Wrong Credentials");    
    }   
}

// The function to generate current Date
 function date(){
        var currentDate= new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth()+1;
        var year= currentDate.getFullYear(); 
        var out= day +"/"+month+"/"+year ;
        document.getElementById("date").innerText= out;
    }


// This function controls the whole program, it is the onlickfunction for the calculate button
var Amnt=[];
var sum =0;
function SumOfIncme(){
  //I have named all the text boxes where you type the amounts with an a1, a2, a3 and so on, this loop will get all the values from the text boxes and store it in an array declared up there called Amt
    for(let i=1;i<=18;i++){
  var getElmt=document.getElementById("a"+i);
  var val=getElmt.value;
  //Now we realised its not all times that there would be a value for a particular item, so i only store items with values in the array
  if(val!=""){
  //Here i dnt know why when i push the values i get it goes as a string to be stored in the array, hence cannot be used for calculation, 
  //so i used the the parseFloat to convert it to a float number, since there could be decimals in the amounts
    Amnt.push(parseFloat(val));
  }
}
//This is where the items in the array is added up to get Total
    for(let i=0; i<Amnt.length; i++){
        sum +=Amnt[i];
    }
    document.getElementById("Inc").textContent="Ghc "+sum.toFixed(2);

//Here we are getting the inner text of the income particulars and sending it to the Local particulars side
    for(let i=2; i<=8; i++){
     var particulars=document.getElementById("p"+i).innerText
     document.getElementById("l"+i).textContent=particulars
    }
//Here is for Local Particulars 
    for(let i=9; i<=18; i++){
     var particulars=document.getElementById("p"+i).value
     document.getElementById("l"+i).textContent=particulars
    }
//Here is for Conference Particulars
    for(let i=1; i<=4; i++){
     var particulars=document.getElementById("p"+i).innerText
     document.getElementById("c"+i).textContent=particulars
    }
//Here is for District Particulars
    for(let i=2; i<=4; i++){
     var particulars=document.getElementById("p"+i).innerText
     document.getElementById("d"+i).textContent=particulars
    }
//Here is for Local Raw Amounts
    for(let i=5; i<=18; i++){
    var amount= document.getElementById("a"+i).value;
    document.getElementById("la"+i).textContent=amount;
    }
//Here is For conference raw tithe amount
var tithe=document.getElementById("a1").value;
document.getElementById("ca1").textContent=tithe;

//Here are for calculations
var cbfAmount=document.getElementById("a2").value;
var looseOfferingAmount=document.getElementById("a3").value;
var thanksAmount=document.getElementById("a4").value;

//Here are for Local funds Calculation 50%
var LcbfAmount=cbfAmount*(50/100);
var LlooseOfferingAmount=looseOfferingAmount*(50/100);
var LthanksAmount=thanksAmount*(50/100);
//Here are for Conference Calculation 40%
var CcbfAmount=cbfAmount*(40/100);
var ClooseOfferingAmount=looseOfferingAmount*(40/100);
var CthanksAmount=thanksAmount*(40/100);
//Here are for District Calculation 10%
var DcbfAmount=cbfAmount*(10/100);
var DlooseOfferingAmount=looseOfferingAmount*(10/100);
var DthanksAmount=thanksAmount*(10/100);
//Here are the values obtained from calculations for Local Funds
document.getElementById("la2").textContent=LcbfAmount
document.getElementById("la3").textContent=LlooseOfferingAmount
document.getElementById("la4").textContent=LthanksAmount
//Here are the values obtained from calculations for Conference Funds
document.getElementById("ca2").textContent=CcbfAmount
document.getElementById("ca3").textContent=ClooseOfferingAmount
document.getElementById("ca4").textContent=CthanksAmount
//Here are the values obtained from calculations for District Funds
document.getElementById("da2").textContent=DcbfAmount
document.getElementById("da3").textContent=DlooseOfferingAmount
document.getElementById("da4").textContent=DthanksAmount

//Here i am puting all the values i get from the ones we won't calculate into an array, then i will add the calculated values and add them.
var LAmount=[];

for(let i=5;i<=18;i++){
    var vals=document.getElementById("a"+i).value;
    if(vals!=''){
        LAmount.push(parseFloat(vals));
    } 
}
//Here i am coming to push all the calculated values for local fund into that array
LAmount.push(LcbfAmount,LlooseOfferingAmount,LthanksAmount)
//Here i am adding all the items in the array, to give me the total of the Local Fund
var Lsum=0;
for(let i=0; i<LAmount.length; i++){
    Lsum +=LAmount[i]
}
document.getElementById("lTotal").textContent="Ghc "+Lsum.toFixed(2)

//Here i am adding all the items in the array, to give me the total of the Conference Fund
var cFunds= CcbfAmount+ClooseOfferingAmount+CthanksAmount+ parseFloat(tithe)
document.getElementById("cTotal").textContent="Ghc "+cFunds.toFixed(2)

//Here i am adding all the items in the array, to give me the total of the District Fund
var dFunds= DcbfAmount+DlooseOfferingAmount+DthanksAmount
document.getElementById("dTotal").textContent="Ghc "+dFunds.toFixed(2)

}

// The function to download page as PDF
function downloadAsPDF() {
    // Select the element that you want to convert to PDF
    const element = document.getElementById("table") ;
    // Use html2pdf library to generate PDF
    html2pdf(element)
        .from(element)
        .save();
}
