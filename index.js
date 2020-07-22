document.querySelector("#logIn").addEventListener("click", function(){
    document.querySelector(".content").style.display ="none";
    document.querySelector(".bankArea").style.display ="block";
})
document.querySelector("#deposite").addEventListener("click", function(){
   const dipositeValu =  document.querySelector("#dipositeIn").value;
   const dipositeConvert = parseFloat(dipositeValu);
   const dipositeBalance = document.querySelector("#dopositeValue").innerText;
   const balanceConvert = parseFloat(dipositeBalance);
   const totalAmount = dipositeConvert + balanceConvert;
   document.querySelector("#dopositeValue").innerText = totalAmount;
   document.querySelector("#dipositeIn").value ="";


   const cBalance = document.querySelector("#addAmount").innerText;
   const curentBaConvert = parseFloat(cBalance);
   const newBalance = curentBaConvert + dipositeConvert;
   document.querySelector("#addAmount").innerText = newBalance;
   
})


document.querySelector("#dipositeButton").addEventListener("click", function(){
    const outBalance = document.querySelector("#outBalance").value;
    const outBalanceConvert = parseFloat(outBalance);

    const totalOut = document.querySelector("#totalOut").innerText;
    const convertOutB = parseFloat(totalOut);

    const intotalOut = outBalanceConvert + convertOutB;
    document.querySelector("#totalOut").innerText = intotalOut;

    const minus = document.querySelector("#addAmount").innerText;
    const convertMinus = parseFloat(minus);

    const finalA = convertMinus -1 * outBalanceConvert;
    document.querySelector("#addAmount").innerText = finalA;

    document.querySelector("#outBalance").value ="";
})