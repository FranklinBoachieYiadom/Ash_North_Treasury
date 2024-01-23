//Function to check the username and password to help you login
function login(event) {
  event.preventDefault();
  var userName = document.getElementById("uName").value;
  var passWord = document.getElementById("uPass").value;
  if (
    (userName == "franklin" && passWord == "franklin") ||
    (userName == "eben" && passWord == "eben")
  ) {
    /*  alert("Login Successful"); */
    var targetPageUrl = "home.html";
    window.location.href = targetPageUrl;
  } else {
    alert("Wrong Credentials");
  }
}

// The function to generate current Date
function date() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var out = day + "/" + month + "/" + year;
  document.getElementById("date").innerText = out;
}

// This function controls the Income Book, it is the onlickfunction for the calculate button
var Amnt = [];
var sum = 0;
function SumOfIncme() {
  //I have named all the text boxes where you type the amounts with an a1, a2, a3 and so on, this loop will get all the values from the text boxes and store it in an array declared up there called Amt
  for (let i = 1; i <= 18; i++) {
    var getElmt = document.getElementById("a" + i);
    var val = getElmt.value;
    //Now we realised its not all times that there would be a value for a particular item, so i only store items with values in the array
    if (val != "") {
      //Here i dnt know why when i push the values i get it goes as a string to be stored in the array, hence cannot be used for calculation,
      //so i used the the parseFloat to convert it to a float number, since there could be decimals in the amounts
      Amnt.push(parseFloat(val));
    }
  }
  //This is where the items in the array is added up to get Total
  for (let i = 0; i < Amnt.length; i++) {
    sum += Amnt[i];
  }
  document.getElementById("Inc").textContent = "Ghc " + sum.toFixed(2);

  //Here we are getting the inner text of the income particulars and sending it to the Local particulars side
  for (let i = 2; i <= 8; i++) {
    var particulars = document.getElementById("p" + i).innerText;
    document.getElementById("l" + i).textContent = particulars;
  }
  //Here is for Local Particulars
  for (let i = 9; i <= 18; i++) {
    var particulars = document.getElementById("p" + i).value;
    document.getElementById("l" + i).textContent = particulars;
  }
  //Here is for Conference Particulars
  for (let i = 1; i <= 4; i++) {
    var particulars = document.getElementById("p" + i).innerText;
    document.getElementById("c" + i).textContent = particulars;
  }
  //Here is for District Particulars
  for (let i = 2; i <= 4; i++) {
    var particulars = document.getElementById("p" + i).innerText;
    document.getElementById("d" + i).textContent = particulars;
  }
  //Here is for Local Raw Amounts
  for (let i = 5; i <= 18; i++) {
    var amount = document.getElementById("a" + i).value;
    document.getElementById("la" + i).textContent = amount;
  }
  //Here is For conference raw tithe amount
  var tithe = document.getElementById("a1").value;
  document.getElementById("ca1").textContent = tithe;

  //Here are for calculations
  var cbfAmount = document.getElementById("a2").value;
  var looseOfferingAmount = document.getElementById("a3").value;
  var thanksAmount = document.getElementById("a4").value;

  //Here are for Local funds Calculation 50%
  var LcbfAmount = cbfAmount * (50 / 100);
  var LlooseOfferingAmount = looseOfferingAmount * (50 / 100);
  var LthanksAmount = thanksAmount * (50 / 100);
  //Here are for Conference Calculation 40%
  var CcbfAmount = cbfAmount * (40 / 100);
  var ClooseOfferingAmount = looseOfferingAmount * (40 / 100);
  var CthanksAmount = thanksAmount * (40 / 100);
  //Here are for District Calculation 10%
  var DcbfAmount = cbfAmount * (10 / 100);
  var DlooseOfferingAmount = looseOfferingAmount * (10 / 100);
  var DthanksAmount = thanksAmount * (10 / 100);
  //Here are the values obtained from calculations for Local Funds
  document.getElementById("la2").textContent = LcbfAmount;
  document.getElementById("la3").textContent = LlooseOfferingAmount;
  document.getElementById("la4").textContent = LthanksAmount;
  //Here are the values obtained from calculations for Conference Funds
  document.getElementById("ca2").textContent = CcbfAmount.toFixed(2);
  document.getElementById("ca3").textContent = ClooseOfferingAmount.toFixed(2);
  document.getElementById("ca4").textContent = CthanksAmount.toFixed(2);
  //Here are the values obtained from calculations for District Funds
  document.getElementById("da2").textContent = DcbfAmount.toFixed(2);
  document.getElementById("da3").textContent = DlooseOfferingAmount.toFixed(2);
  document.getElementById("da4").textContent = DthanksAmount.toFixed(2);

  //Here i am puting all the values i get from the ones we won't calculate into an array, then i will add the calculated values and add them.
  var LAmount = [];
  var Lsum = 0;
  for (let i = 5; i <= 18; i++) {
    var vals = document.getElementById("a" + i).value;
    if (vals != "") {
      LAmount.push(parseFloat(vals));
    }
  }
  //Here i am coming to push all the calculated values for local fund into that array
  LAmount.push(LcbfAmount, LlooseOfferingAmount, LthanksAmount);
  //Here i am adding all the items in the array, to give me the total of the Local Fund
  for (let i = 0; i < LAmount.length; i++) {
    Lsum += LAmount[i];
  }
  document.getElementById("lTotal").textContent = "Ghc " + Lsum.toFixed(2);

  //Here i am adding all the items in the array, to give me the total of the Conference Fund
  var cFunds =CcbfAmount + ClooseOfferingAmount + CthanksAmount + parseFloat(tithe);
  document.getElementById("cTotal").textContent = "Ghc " + cFunds.toFixed(2);

  //Here i am adding all the items in the array, to give me the total of the District Fund
  var dFunds = DcbfAmount + DlooseOfferingAmount + DthanksAmount;
  document.getElementById("dTotal").textContent = "Ghc " + dFunds.toFixed(2);
}

// Here is the function that allows you to print or save documment as PDF
function toPrint(){
    window.print();
}

//Here is the function that lets you go to the Balance page
function goToSecondPage(){
  window.location.href="balance.html"
  }

//Here for the Calculation ofthe Balance Sheet (Income and Expenditure)
function balanceCalculation(){
  var arrBalance=[];
    var expSum=0;
//Here is getting all the expenditure values and putting it in an array called arrBalance    
    for(let i=1; i<=21; i++){
        var expenseValues=document.getElementById("e"+i).value;
        if(expenseValues!==""){
            arrBalance.push(parseFloat(expenseValues));
        }  
      } 
//Here is for adding all the items in arrBalance
    for(i=0; i<arrBalance.length; i++){
        expSum +=arrBalance[i];
    }
//Calculation of the Total Local income from the Expenses
    var localFundBal=document.getElementById("totalFromLfund").value;
    var totalBalance= localFundBal- expSum;
    document.getElementById("balance").innerText="GHc "+totalBalance.toFixed(2);
//Here check if the amount i am getting is less than zero
    if(totalBalance<0){
      document.getElementById("balance").style.color="red"
    }
}

//Here is a function, when clicked, takes you to Cut-off page
function goToCutoff(){
  window.location.href="cutoff.html" 
}

//This the portion for cut off Calculations and among others

function calCutOff(){
//Here is for transfering all the Dates Choosen for Conference to District too
for( let i=1; i<=5; i++){
var changeDate=document.getElementById("cdate"+i).value
document.getElementById("ddate"+i).value=changeDate;
}

 //For finding the  sum of tithes
  var totalTithe=[];
  var sumOfTotalTithe=0;
  for(let i=1; i<=5; i++){
    var singleTithe=document.getElementById("t"+i).value;
  if(singleTithe!=""){
    totalTithe.push(parseFloat(singleTithe));
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalTithe.length; i++){ 
  sumOfTotalTithe +=totalTithe[i]; 
}
document.getElementById("totalTithe").innerText=sumOfTotalTithe.toFixed(2);
 
//For finding the  sum of Conference C.B.F
  var totalCbf=[];
  var sumOfTotalCbf=0;
  for(let i=1; i<=5; i++){
    var singleCbf=document.getElementById("c"+i).value;
  if(singleCbf!=""){
    totalCbf.push(parseFloat(singleCbf));
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalCbf.length; i++){ 
  sumOfTotalCbf +=totalCbf[i]; 
}
document.getElementById("totalCbf").innerText=sumOfTotalCbf.toFixed(2);
 
//For finding the  sum of Loose Offering
  var totalLoffering=[];
  var sumOfTotalLoffering=0;
  for(let i=1; i<=5; i++){
    var singleLoffering=document.getElementById("l"+i).value;
  if(singleLoffering!=""){
    totalLoffering.push(parseFloat(singleLoffering));
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalLoffering.length; i++){ 
  sumOfTotalLoffering +=totalLoffering[i]; 
}
document.getElementById("totalLoffering").innerText=sumOfTotalLoffering.toFixed(2);
 
//For finding the  sum of Thanksgiving
  var totalTgiving=[];
  var sumOfTotalTgiving=0;
  for(let i=1; i<=5; i++){
    var singleTgiving=document.getElementById("tg"+i).value;
  if(singleTgiving!=""){
    totalTgiving.push(parseFloat(singleTgiving));
   
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalTgiving.length; i++){ 
  sumOfTotalTgiving +=totalTgiving[i]; 
}
document.getElementById("totalTgiving").innerText=sumOfTotalTgiving.toFixed(2);
 
//For finding the  sum of Sabbath School Order
  var totalSsch=[];
  var sumOfTotalSsch=0;
  for(let i=1; i<=5; i++){
    var singleSsch=document.getElementById("s"+i).value;
  if(singleSsch!=""){
    totalSsch.push(parseFloat(singleSsch));
   
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalSsch.length; i++){ 
  sumOfTotalSsch +=totalSsch[i]; 
}
document.getElementById("totalSsch").innerText=sumOfTotalSsch.toFixed(2);

 
//For finding the  sum of First Empty Text Field
  var totalFirstInp=[];
  var sumOfTotalFirstInp=0;
  for(let i=1; i<=5; i++){
    var singleFirstInp=document.getElementById("firstInp"+i).value;
  if(singleFirstInp!=""){
    totalFirstInp.push(parseFloat(singleFirstInp));
   
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalFirstInp.length; i++){ 
  sumOfTotalFirstInp +=totalFirstInp[i]; 
}
document.getElementById("totalFirstInp").innerText=sumOfTotalFirstInp.toFixed(2);
 
//For finding the  sum of Second Empty Text Field
  var totalSecondInp=[];
  var sumOfTotalSecondInp=0;
  for(let i=1; i<=5; i++){
    var singleSecondInp=document.getElementById("secondInp"+i).value;
  if(singleSecondInp!=""){
    totalSecondInp.push(parseFloat(singleSecondInp));
   
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalSecondInp.length; i++){ 
  sumOfTotalSecondInp +=totalSecondInp[i]; 
}
document.getElementById("totalSecondInp").innerText=sumOfTotalSecondInp.toFixed(2);
 
//For finding the  sum of Third Empty Text Field
  var totalThirdInp=[];
  var sumOfTotalThirdInp=0;
  for(let i=1; i<=5; i++){
    var singleThirdInp=document.getElementById("thirdInp"+i).value;
  if(singleThirdInp!=""){
    totalThirdInp.push(parseFloat(singleThirdInp)); 
  } 
  }
 //Here we are going to add up all the values in the array
for(let i=0; i<totalThirdInp.length; i++){ 
  sumOfTotalThirdInp +=totalThirdInp[i]; 
}
document.getElementById("totalThirdInp").innerText=sumOfTotalThirdInp.toFixed(2);


//Here we are going to get the total sum Conference Items
var allConfSum= sumOfTotalTithe+sumOfTotalCbf+sumOfTotalLoffering+sumOfTotalTgiving+sumOfTotalSsch+sumOfTotalFirstInp+sumOfTotalSecondInp+sumOfTotalThirdInp
document.getElementById("totalConfFund").textContent=allConfSum.toFixed(2);

//Here we are going to get the sum for each week
// Here is sum for week 1
var weekOne=[];
var firstTithe=document.getElementById("t1").value
if(firstTithe!=""){
  weekOne.push(parseFloat(firstTithe))
}
var firstCbf=document.getElementById("c1").value
if(firstCbf!=""){
  weekOne.push(parseFloat(firstCbf))
}
var firstOffering=document.getElementById("l1").value
if(firstOffering!=""){
  weekOne.push(parseFloat(firstOffering))
}
var firstthanks=document.getElementById("tg1").value
if(firstthanks!=""){
  weekOne.push(parseFloat(firstthanks))
}
var firstSsch=document.getElementById("s1").value
if(firstSsch!=""){
  weekOne.push(parseFloat(firstSsch))
}
var firstEmptyOne=document.getElementById("firstInp1").value
if(firstEmptyOne!=""){
  weekOne.push(parseFloat(firstEmptyOne))
}
var firstEmptyTwo=document.getElementById("secondInp1").value
if(firstEmptyTwo!=""){
  weekOne.push(parseFloat(firstEmptyTwo))
}
var firstEmptyThree=document.getElementById("thirdInp1").value
if(firstEmptyThree!=""){
  weekOne.push(parseFloat(firstEmptyThree))
}
//Here we calculate the sum of the items in the array for Week 1
var sumOfweekOne=0;
for(let i=0; i<weekOne.length; i++){
  sumOfweekOne +=weekOne[i]
}
document.getElementById("weekOneSum").textContent=sumOfweekOne.toFixed(2);


//Here we are going to get the sum for each week
// Here is sum for week 2
var weekTwo=[];
var secondTithe=document.getElementById("t2").value
if(secondTithe!=""){
  weekTwo.push(parseFloat(secondTithe))
}
var secondCbf=document.getElementById("c2").value
if(secondCbf!=""){
  weekTwo.push(parseFloat(secondCbf))
}
var secondOffering=document.getElementById("l2").value
if(secondOffering!=""){
  weekTwo.push(parseFloat(secondOffering))
}
var secondthanks=document.getElementById("tg2").value
if(secondthanks!=""){
  weekTwo.push(parseFloat(secondthanks))
}
var secondSsch=document.getElementById("s2").value
if(secondSsch!=""){
  weekTwo.push(parseFloat(secondSsch))
}
var secondEmptyOne=document.getElementById("firstInp2").value
if(secondEmptyOne!=""){
  weekTwo.push(parseFloat(secondEmptyOne))
}
var secondEmptyTwo=document.getElementById("secondInp2").value
if(secondEmptyTwo!=""){
  weekTwo.push(parseFloat(secondEmptyTwo))
}
var secondEmptyThree=document.getElementById("thirdInp2").value
if(secondEmptyThree!=""){
  weekTwo.push(parseFloat(secondEmptyThree))
}
//Here we calculate the sum of the items in the array for Week 1
var sumOfWeekTwo=0;
for(let i=0; i<weekTwo.length; i++){
  sumOfWeekTwo +=weekTwo[i]
}
document.getElementById("weekTwoSum").textContent=sumOfWeekTwo.toFixed(2);

//Here we are going to get the sum for each week
// Here is sum for week 3
var weekThree=[];
var thirdTithe=document.getElementById("t3").value
if(thirdTithe!=""){
  weekThree.push(parseFloat(thirdTithe))
}
var thirdCbf=document.getElementById("c3").value
if(thirdCbf!=""){
  weekThree.push(parseFloat(thirdCbf))
}
var thirdOffering=document.getElementById("l3").value
if(thirdOffering!=""){
  weekThree.push(parseFloat(thirdOffering))
}
var thirdthanks=document.getElementById("tg3").value
if(thirdthanks!=""){
  weekThree.push(parseFloat(thirdthanks))
}
var thirdSsch=document.getElementById("s3").value
if(thirdSsch!=""){
  weekThree.push(parseFloat(thirdSsch))
}
var thirdEmptyOne=document.getElementById("firstInp3").value
if(thirdEmptyOne!=""){
  weekThree.push(parseFloat(thirdEmptyOne))
}
var thirdEmptyTwo=document.getElementById("secondInp3").value
if(thirdEmptyTwo!=""){
  weekThree.push(parseFloat(thirdEmptyTwo))
}
var thirdEmptyThree=document.getElementById("thirdInp3").value
if(thirdEmptyThree!=""){
  weekThree.push(parseFloat(thirdEmptyThree))
}
//Here we calculate the sum of the items in the array for Week 1
var sumOfWeekThree=0;
for(let i=0; i<weekThree.length; i++){
  sumOfWeekThree +=weekThree[i]
}
document.getElementById("weekThreeSum").textContent=sumOfWeekThree.toFixed(2);

//Here we are going to get the sum for each week
// Here is sum for week 4
var weekFour=[];
var fourthTithe=document.getElementById("t4").value
if(fourthTithe!=""){
  weekFour.push(parseFloat(fourthTithe))
}
var fourthCbf=document.getElementById("c4").value
if(fourthCbf!=""){
  weekFour.push(parseFloat(fourthCbf))
}
var fourthOffering=document.getElementById("l4").value
if(fourthOffering!=""){
  weekFour.push(parseFloat(fourthOffering))
}
var fourththanks=document.getElementById("tg4").value
if(fourththanks!=""){
  weekFour.push(parseFloat(fourththanks))
}
var fourthSsch=document.getElementById("s4").value
if(fourthSsch!=""){
  weekFour.push(parseFloat(fourthSsch))
}
var fourthEmptyOne=document.getElementById("firstInp4").value
if(fourthEmptyOne!=""){
  weekFour.push(parseFloat(fourthEmptyOne))
}
var fourthEmptyTwo=document.getElementById("secondInp4").value
if(fourthEmptyTwo!=""){
  weekFour.push(parseFloat(fourthEmptyTwo))
}
var fourthEmptyThree=document.getElementById("thirdInp4").value
if(fourthEmptyThree!=""){
  weekFour.push(parseFloat(fourthEmptyThree))
}
//Here we calculate the sum of the items in the array for Week 1
var sumOfWeekFour=0;
for(let i=0; i<weekFour.length; i++){
  sumOfWeekFour +=weekFour[i]
}
document.getElementById("weekFourSum").textContent=sumOfWeekFour.toFixed(2);

//Here we are going to get the sum for each week
// Here is sum for week 5
var weekFive=[];
var fifthTithe=document.getElementById("t5").value
if(fifthTithe!=""){
  weekFive.push(parseFloat(fifthTithe))
}
var fifthCbf=document.getElementById("c5").value
if(fifthCbf!=""){
  weekFive.push(parseFloat(fifthCbf))
}
var fifthOffering=document.getElementById("l5").value
if(fifthOffering!=""){
  weekFive.push(parseFloat(fifthOffering))
}
var fifththanks=document.getElementById("tg5").value
if(fifththanks!=""){
  weekFive.push(parseFloat(fifththanks))
}
var fifthSsch=document.getElementById("s5").value
if(fifthSsch!=""){
  weekFive.push(parseFloat(fifthSsch))
}
var fifthEmptyOne=document.getElementById("firstInp5").value
if(fifthEmptyOne!=""){
  weekFive.push(parseFloat(fifthEmptyOne))
}
var fifthEmptyTwo=document.getElementById("secondInp5").value
if(fifthEmptyTwo!=""){
  weekFive.push(parseFloat(fifthEmptyTwo))
}
var fifthEmptyThree=document.getElementById("thirdInp5").value
if(fifthEmptyThree!=""){
  weekFive.push(parseFloat(fifthEmptyThree))
}
//Here we calculate the sum of the items in the array for Week 1
var sumOfWeekFive=0;
for(let i=0; i<weekFive.length; i++){
  sumOfWeekFive +=weekFive[i]
}
document.getElementById("weekFiveSum").textContent=sumOfWeekFive.toFixed(2);


//Here we are going to find 25% of What ever value we got for Confernce, that will be for District

//Here we calculate for the District CBF 
var distCbf=[];
var sumOfDistCbf=0;
for(let i=1; i<=5; i++){
  var singleCbf=document.getElementById("c"+i).value;
  if(singleCbf!=""){
    var twentyFivePerSingleCbf=singleCbf*(25/100);
    distCbf.push(twentyFivePerSingleCbf);
    document.getElementById("cB"+i).textContent=twentyFivePerSingleCbf.toFixed(2);
  }
}
//Here we calculate for all the sum of the 25% received
for(let i=0; i<distCbf.length; i++){
  sumOfDistCbf +=distCbf[i]
}
document.getElementById("totalDistCbf").textContent=sumOfDistCbf.toFixed(2)

//Here we calculate for the District Loose Offering 
var distLO=[];
var sumOfDistLO=0;
for(let i=1; i<=5; i++){
  var singleLO=document.getElementById("l"+i).value;
  if(singleLO!=""){
    var twentyFivePerSingleLO=singleLO*(25/100);
    distLO.push(twentyFivePerSingleLO);
    document.getElementById("lO"+i).textContent=twentyFivePerSingleLO.toFixed(2);
  }
}
//Here we calculate for all the sum of the 25% received
for(let i=0; i<distLO.length; i++){
  sumOfDistLO +=distLO[i]
}
document.getElementById("totalDistLO").textContent=sumOfDistLO.toFixed(2)


//Here we calculate for the District Thanks Giving
var distTG=[];
var sumOfDistTG=0;
for(let i=1; i<=5; i++){
  var singleTG=document.getElementById("tg"+i).value;
  if(singleTG!=""){
    var twentyFivePerSingleTG=singleTG*(25/100);
    distTG.push(twentyFivePerSingleTG);
    document.getElementById("TG"+i).textContent=twentyFivePerSingleTG.toFixed(2);
  }
}
//Here we calculate for all the sum of the 25% received
for(let i=0; i<distTG.length; i++){
  sumOfDistTG +=distTG[i]
}
document.getElementById("totalDistTG").textContent=sumOfDistTG.toFixed(2)


//Here is the Amount for Transportation
var transport=100;
document.getElementById("transport").textContent=transport.toFixed(2);
document.getElementById("transTotal").textContent=transport.toFixed(2);

//Here is for Doryumu School
var school=170;
document.getElementById("school").textContent=school.toFixed(2);
document.getElementById("schTotal").textContent=school.toFixed(2);


//Here is the total for all the District cut off funds
var totalDistCutOffFunds= sumOfDistCbf+sumOfDistLO+sumOfDistTG+transport+school;
document.getElementById("totalDistCutFunds").textContent=totalDistCutOffFunds.toFixed(2);

//Here is the Calculation for the Grand Total, Conference plus District
var grandTotal=allConfSum+totalDistCutOffFunds;
document.getElementById("grandTotal").textContent=grandTotal.toFixed(2);


//Here we are going to get the sum for each week for DISTRICT CUT OFF
// Here is sum for week 1
var distWeekOne=[];
var firstdistCbf=document.getElementById("cB1").textContent
if(firstdistCbf!=""){
  distWeekOne.push(parseFloat(firstdistCbf))
}
var firstdistOffering=document.getElementById("lO1").textContent
if(firstdistOffering!=""){
  distWeekOne.push(parseFloat(firstdistOffering))
}
var firstdistthanks=document.getElementById("TG1").textContent
if(firstdistthanks!=""){
  distWeekOne.push(parseFloat(firstdistthanks))
}
var firstdistTrans=document.getElementById("transport").textContent
if(firstdistTrans!=""){
  distWeekOne.push(parseFloat(firstdistTrans))
}
var firstdistSch=document.getElementById("school").textContent
if(firstdistSch!=""){
  distWeekOne.push(parseFloat(firstdistSch))
}

//Here we calculate the sum of the items in the array for Week 1
var sumOfdistWeekOne=0;
for(let i=0; i<distWeekOne.length; i++){
  sumOfdistWeekOne +=distWeekOne[i]
}
document.getElementById("distWeekOneSum").textContent=sumOfdistWeekOne.toFixed(2);

//Here we are going to get the sum for each week for DISTRICT CUT OFF
// Here is sum for week 2
var distWeekTwo=[];
var seconddistCbf=document.getElementById("cB2").textContent
if(seconddistCbf!=""){
  distWeekTwo.push(parseFloat(seconddistCbf))
}
var seconddistOffering=document.getElementById("lO2").textContent
if(seconddistOffering!=""){
  distWeekTwo.push(parseFloat(seconddistOffering))
}
var seconddistthanks=document.getElementById("TG2").textContent
if(seconddistthanks!=""){
  distWeekTwo.push(parseFloat(seconddistthanks))
}

//Here we calculate the sum of the items in the array for Week 2
var sumOfdistWeekTwo=0;
for(let i=0; i<distWeekTwo.length; i++){
  sumOfdistWeekTwo +=distWeekTwo[i]
}
document.getElementById("distWeekTwoSum").textContent=sumOfdistWeekTwo.toFixed(2);


//Here we are going to get the sum for each week for DISTRICT CUT OFF
// Here is sum for week 3
var distWeekThree=[];
var thirddistCbf=document.getElementById("cB3").textContent
if(thirddistCbf!=""){
  distWeekThree.push(parseFloat(thirddistCbf))
}
var thirddistOffering=document.getElementById("lO3").textContent
if(thirddistOffering!=""){
  distWeekThree.push(parseFloat(thirddistOffering))
}
var thirddistthanks=document.getElementById("TG3").textContent
if(thirddistthanks!=""){
  distWeekThree.push(parseFloat(thirddistthanks))
}

//Here we calculate the sum of the items in the array for Week 3
var sumOfdistWeekThree=0;
for(let i=0; i<distWeekThree.length; i++){
  sumOfdistWeekThree +=distWeekThree[i]
}
document.getElementById("distWeekThreeSum").textContent=sumOfdistWeekThree.toFixed(2);


//Here we are going to get the sum for each week for DISTRICT CUT OFF
// Here is sum for week 4
var distWeekFour=[];
var fourthdistCbf=document.getElementById("cB4").textContent
if(fourthdistCbf!=""){
  distWeekFour.push(parseFloat(fourthdistCbf))
}
var fourthdistOffering=document.getElementById("lO4").textContent
if(fourthdistOffering!=""){
  distWeekFour.push(parseFloat(fourthdistOffering))
}
var fourthdistthanks=document.getElementById("TG4").textContent
if(fourthdistthanks!=""){
  distWeekFour.push(parseFloat(fourthdistthanks))
}

//Here we calculate the sum of the items in the array for Week 4
var sumOfdistWeekFour=0;
for(let i=0; i<distWeekFour.length; i++){
  sumOfdistWeekFour +=distWeekFour[i]
}
document.getElementById("distWeekFourSum").textContent=sumOfdistWeekFour.toFixed(2);



//Here we are going to get the sum for each week for DISTRICT CUT OFF
// Here is sum for week 5
var distWeekFive=[];
var FifthdistCbf=document.getElementById("cB5").textContent
if(FifthdistCbf!=""){
  distWeekFive.push(parseFloat(FifthdistCbf))
}
var FifthdistOffering=document.getElementById("lO5").textContent
if(FifthdistOffering!=""){
  distWeekFive.push(parseFloat(FifthdistOffering))
}
var Fifthdistthanks=document.getElementById("TG5").textContent
if(Fifthdistthanks!=""){
  distWeekFive.push(parseFloat(Fifthdistthanks))
}

//Here we calculate the sum of the items in the array for Week 5
var sumOfdistWeekFive=0;
for(let i=0; i<distWeekFive.length; i++){
  sumOfdistWeekFive +=distWeekFive[i]
}
document.getElementById("distWeekFiveSum").textContent=sumOfdistWeekFive.toFixed(2);

}

//Here is the function calculation of the Denominations
var totalCalculation=[];
function getInpt(){
 function innerHeight(id1,amount,id2){
        var inputs= document.getElementById(id1).value;
        var calculate=  amount * inputs
        document.getElementById(id2).innerText= "GH₵"+calculate.toFixed(2)
        totalCalculation.push(calculate);
    }
    innerHeight("twoHundred",200,"answer1")
    innerHeight("oneHundred",100,"answer2")
    innerHeight("fifty",50,"answer3")
    innerHeight("twenty",20,"answer4")
    innerHeight("ten",10,"answer5")
    innerHeight("five",5,"answer6")
    innerHeight("two",2,"answer7")
    innerHeight("one",1,"answer8")
    innerHeight("twoP",2,"answer9")
    innerHeight("oneP",1,"answer10")
    innerHeight("fiftyP",0.5,"answer11")
    innerHeight("twentyP",0.2,"answer12")
    innerHeight("tenP",0.1,"answer13")

    const grandTotal= totalCalculation.reduce((sum,int)=>sum+int,0);
    document.getElementById("grandTot").innerText="GH₵"+grandTotal.toFixed(2)   
} 
