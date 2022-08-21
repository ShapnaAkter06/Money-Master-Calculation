document.getElementById('calculate-button').addEventListener('click', function(){
    const totalIncome = getInputFieldValueById('total-income');
    const foodExpenses = getInputFieldValueById('food-expenses');
    const rentExpenses = getInputFieldValueById('rent-expenses');
    const clothExpenses = getInputFieldValueById('cloth-expenses');

    if( (isNaN(foodExpenses) || foodExpenses < 0) || (isNaN(rentExpenses) || rentExpenses < 0) || (isNaN(clothExpenses) || clothExpenses < 0) ){
        alert("Please check your all input field");
        return;
    }

    const totalCost = foodExpenses + rentExpenses + clothExpenses;
    seTextElementValueById('total-expenses', totalCost);

    if((isNaN(totalIncome) || totalIncome < 0) || (totalCost > totalIncome)){
        alert ("You can't spend money more than your income");
        return;
    }

    const newbalance = totalIncome - totalCost;
    seTextElementValueById('balance', newbalance)
})
document.getElementById('save-button').addEventListener('click', function(){
    const totalIncome = getInputFieldValueById('total-income');
    const saveInput = getInputFieldValueById('save-input');
    const newbalance = getTextElementValueById('balance');

    if(isNaN(saveInput) || saveInput > 100 || saveInput < 0 || isNaN(totalIncome)){
        alert("Please enter valid number");
        return;
    }
    const newSaveAmount = totalIncome * (saveInput / 100);
    seTextElementValueById('save-amount', newSaveAmount);

    if (newbalance < newSaveAmount){
        alert("You can not save money more than your balance");
        return;
    }
    
    const currentBalance = newbalance - newSaveAmount;
    seTextElementValueById('remaining-balance', currentBalance)
})