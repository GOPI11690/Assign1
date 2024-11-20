let customerName="Barath";
let purchaseAmt=3550;

let voucherValue=0;

function calculateBonusPoint(amt){
    
    let bonus=0;
   
    if(amt>=100 && amt<1000){
        bonus=0.05;
    }
    else if(amt>=1000 && amt<2500){
        bonus=0.1;
    }else if(amt>=2500 && amt<5000){
        bonus=0.15;
    }
    else{
        bonus=0.2;
    }
    return amt*bonus;
}

let bonusPoints= calculateBonusPoint(purchaseAmt);
if(purchaseAmt<100){
    console.log("Thank You For Visiting Us!!!");
}
else{
    console.log(`Welcome ${customerName}! You have rewarded Rs.${voucherValue} Gift Voucher for your ${bonusPoints} Bonus Points...`);
}