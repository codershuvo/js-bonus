
function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000; // 1 kilometer = 1000 meter
    return meter; 
}



function budgetCalculator(watch, phone, laptop) {
    // watch price $50, phone price $100, laptop price $500
    return (watch * 50) + (phone * 100) + (laptop * 500); 
}



// first 10 day cost $100, second 10 day cost $80, third 10 day cost $50
function hotelCost(days) {
    var cost = 0; 
    if (days <= 10) {
        cost = days * 100; 
    }
    else if (days <= 20) {
        const firstTenDaysCost = 10 * 100; 
        const remainingDaysCost = days - 10; 
        const secondTenDaysCost = remainingDaysCost * 80;
        cost = firstTenDaysCost + secondTenDaysCost; 
    }
    else {
        const firstTenDaysCost = 10 * 100; 
        const secondTenDaysCost = 10 * 80;
        const remainingThirdTime = days - 20;
        const thirdTimeCost = remainingThirdTime * 50; 
        cost = firstTenDaysCost + secondTenDaysCost + thirdTimeCost; 
    }
    return cost; 
}


// find array max element
function megaFriend (array) {
    let lgth = 0; 
    let max = ""; 
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > lgth) {
            lgth = array[i].length; 
            max = array[i]; 
        }
    }
    return max; 
}

