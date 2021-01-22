
// <<<<<< kilometer To Meter >>>>>>
function kilometerToMeter(km){ 
let meter = 1000;
if(0 <= km){
meter = km * 1000;
}
else{
meter = "warning! input positive number";
}
return meter;
}
// <<<<<< kilometer To Meter >>>>>>


// <<<<<<< budget calculator area >>>>>>>
function budgetCalculator(a,b,c){
    const watchPrice = 50;
    const mobilePrice = 100;
const laptopPrice = 500;

if(0 <= a && 0 <= b && 0 <= c){

var totalWatch = watchPrice * a;
var totalMobile = mobilePrice * b;
var totalLaptop = laptopPrice * c;
total = totalWatch + totalMobile + totalLaptop;
}
else{
 total = "Warning! Please input positive numbers"; 
}
return total;
}
// <<<<<<< budget calculator area >>>>>>>


// <<<<<<< hotel cost area>>>>>>>>

function hotelCost(stay){
    var day = 0;
    if(stay <= 10 && stay > 0){
    day = stay * 100;
    }
    if(stay > 10 && stay <= 20){
    var firstPart = 10 * 100;
    var remaining = stay - 10;
    var secondPart = remaining * 80;
    day = firstPart + secondPart;
    }
    if(stay > 20) {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80
    var remaining = stay - 20;
    var thirdPart = remaining * 50;
    day = firstPart + secondPart + thirdPart;
    }
    if(stay <= 0){
day = "warning! stay can not be zero or negetive"
    }
    return day;
    }
// <<<<<<< hotel cost area>>>>>>>>


// <<<<<<<<<< mega friend area >>>>>>>>>>>

function megaFriend(friendList){
    let maxFrnd = friendList[0];
    for(var i = 0; i < friendList.length; i++){
    var element = friendList[i];
    if(element.length > maxFrnd.length){
    maxFrnd = element;
    }
    }
    return maxFrnd;
    }
// <<<<<<<<< mega friend area >>>>>>>>>>>