//BigBasket Reward Point to Gift Voucher System


// Declaring Variables

let customerName="Barath";                           // You can change Customer Name
let purchaseAmt=5000;                               // You can change Purchase Amount


//Function for calculating Bonus Points

function calculateBonusPoint(amt){
    let bonus=0;

    if(amt>=100 && amt<1000){
        bonus=0.05;
    }else if(amt>=1000 && amt<2500){
        bonus=0.1;
    }else if(amt>=2500 && amt<5000){
        bonus=0.15;
    }else{
        bonus=0.2;
    }return amt*bonus;                                   //Return the Bonus Points Value
}

let bonusPoints= calculateBonusPoint(purchaseAmt);      // Storing Bonus Point into variable

if(purchaseAmt<100){                                    // For Purchase value less than 100 
    console.log("Thank You For Visiting Us!!!");     
}
else{
    let voucherValue=Math.round(bonusPoints);           //Round Value for Voucher Calculation
    
    console.log(`Welcome ${customerName}!`);
    console.log(`Your Purchase Amount Rs. ${purchaseAmt}.\n You have rewarded Rs.${voucherValue} Gift Voucher for your ${bonusPoints} Bonus Points...`);

    let optionNum=parseInt(prompt("You can Select Reward Points from Bonus Points by choosing below Options : \n1 to redeem all \n2 to redeem 50%  \n0 to Cancel"));    //Showing Prompt to select the Redeem Option
    
    switch(optionNum){                                   // SwitchCase for Redeem Options
        case 0:
            console.log(`You cancelled the redeem option \nYou have pay Rs. ${purchaseAmt} \nYou ${voucherValue} remaining Gift Voucher`);
            break;
        case 1:
            console.log(`Congratulations! You Redeemed all your Gift Voucher \nYou have pay Rs. ${purchaseAmt-voucherValue} \nYou 0 remaining Reward Points`);
            break;
        case 2:
            voucherValue=Math.round(voucherValue/2);
            console.log(`Congratulations! You Redeemed ${voucherValue} Gift Voucher \nYou have pay Rs. ${purchaseAmt-voucherValue} \nYou ${voucherValue} remaining Gift Voucher`);
            break;
        default:
            console.log("Enter '0', '1' or '2' options");
    }

}