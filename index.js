var LoginBtn = document.getElementById("login_btn");
var main_page = document.getElementById("main_page");

main_page.style.display="none";


LoginBtn.addEventListener('click',function(){
 var Login_box=document.getElementById("login_box");
 var acc_no=document.getElementById("acc_no").value;
 var pass=document.getElementById("pass").value;

 
 if(acc_no=='' && pass==''){
    alert('account & password both are  required');
 }
 else if(acc_no==''){
    alert('account number is required');
 }
 else if(pass==''){
    alert('password is required');
 }
 else{
     Login_box.style.display="none";
     main_page.style.display="block";
 }
});

// add deposit starts here
var depositInput = document.getElementById("deposit_input");//for input data clear 

var add_depositBTN = document.getElementById("add_depositBTN");
add_depositBTN.addEventListener('click',function(){
   
   var deposit_input = document.getElementById("deposit_input").value;
   var deposit_New_input =parseFloat(deposit_input);

   
  
   
   
   var total_deposit = document.getElementById("total_deposit").innerHTML;
   var total_New_Deposit = parseFloat(total_deposit);

   var Total_Deposit = deposit_New_input + total_New_Deposit;

    document.getElementById("total_deposit").innerHTML= Total_Deposit.toFixed(2);

    //change balance
    var total_balance = document.getElementById("total_balance").innerHTML;
    var New_total_balance = parseFloat(total_balance); //for convert to float 
    var Total_New_Balance = deposit_New_input + New_total_balance ;
    depositInput.value = "";//for input data clear 

    document.getElementById("total_balance").innerHTML=Total_New_Balance.toFixed(2);
    
 //console.log(deposit_input);

});
// add deposit ends here

//withdraw starts here 
var balance = document.getElementById("total_balance");//for 1st if else condition in total balance 
var withdrawInput = document.getElementById("withdraw_input");//for input data clear 
var withdrawBTN = document.getElementById("withdraw_BTN");
withdrawBTN.addEventListener('click',function(){
   const value = withdrawInput.value;//for 2nd if else condition 

   if ( Number(balance.innerText) <= '1000.00' || Number(value) > Number(balance.innerText)) {
      alert("You minimum balance have to be 1000");
      withdrawInput.value = "";
  }
   else {

   var withdraw_input = document.getElementById("withdraw_input").value;
   var New_withdraw_input = parseFloat(withdraw_input);
   
   var withdraw_total = document.getElementById("withdraw_total").innerHTML;
   var New_withdraw_total = parseFloat(withdraw_total);

   var Total_withdraw = New_withdraw_total + New_withdraw_input ;

   document.getElementById("withdraw_total").innerHTML=Total_withdraw.toFixed(2);

   //subtraction 
   var total_balance = document.getElementById("total_balance").innerHTML;
   var New_total_balance = parseFloat(total_balance); //for convert to float 
   var subtraction =  New_total_balance - New_withdraw_input ;
   document.getElementById("total_balance").innerHTML = subtraction.toFixed(2);
   }
});
//withdraw ends here


   /*var balancebox = document.getElementById("balance");

  var balancebox.addEventListener('click',function(){
   var total_balance = document.getElementById("total_balance").value ;
   
   if(total_balance == 00.00){
      alert('no sufficient balance');
   }*/
   


  
  
/*
 const add_depositBTN = document.getElementById("add_depositBTN");
   add_depositBTN.addEventListener('click', function() {
    const depositStringToInt = getInputNumb("total_deposit");

    updateSpanTest("total_deposit", depositStringToInt);
    updateSpanTest("total_balance", depositStringToInt);*/

    


 