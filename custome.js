
let Cards = document.querySelectorAll('#card');
let discountBtn = document.getElementById('discount-btn');
discountBtn.disabled = true;
let nextPurBtn = document.getElementById('purchase-btn');
nextPurBtn.disabled = true;
let setCheckArray = [];
let count = 0;
let counter = 1;
let totalAmount = 0;
let seatAccessCount = 0;


for (let card of Cards) {
    card.addEventListener('click', () => {
        // Validation For apply cupne but not purchess 
        if (seatAccessCount == 0) {
            let valueOfSeat = card.childNodes[1].innerHTML;
            // Validation For One Seat Select one Time
            if (setCheckArray.includes(valueOfSeat)) {
                alert('Al Ready Added this Seat');
            } else {
                // Validation for one persone select 4 Seat ;
                if (count < 4) {
                    discountBtn.disabled = false;
                    // Background Change Funtion
                    BackgroundChange(card);
                    setCheckArray.push(valueOfSeat);
                    let setCounter = document.getElementById('seat-Count');
                    let setCounterValue = parseInt(setCounter.innerHTML);
                    setCounter.innerHTML = setCounterValue + counter;
                    count++;
                    let setPrize = setDocument(valueOfSeat);
                    let TotalAmount = totalAmount += setPrize;
                    document.getElementById('Total-Amount').innerHTML = TotalAmount;
                    document.getElementById('amount-first').innerHTML = TotalAmount;
                } else {

                    alert('you al Ready book 4 Seat');
                }
            }
        } else {

            alert("Please Confirm the Order");

        }
    });
}

let CopneCount = 0;
function applyCoupe() {
    // Validation For Use Coupne only one Time
    if (CopneCount < 1) {
        let disInput = document.getElementById('coupne-input');
        let disInputValue = disInput.value;
        if (disInputValue === "NEW15" || disInputValue === "NEW20") {
            let AmountPlace = document.getElementById('Total-Amount');
            let Amount = parseInt(document.getElementById('Total-Amount').innerHTML);
            if (disInputValue === "NEW15") {
                let discountAmount = (Amount * 15) / 100;
                let netAmount = Amount - discountAmount;
                AmountPlace.innerHTML = netAmount;
                // Table Create Function1
                createTable(discountAmount);
                document.getElementById('coupne-input').value = "";
            } else {
                let discountAmount = (Amount * 20) / 100;
                let netAmount = Amount - discountAmount;
                AmountPlace.innerHTML = netAmount;
                // Table Create Function2
                createTable2(discountAmount);
                document.getElementById('coupne-input').value = "";
            }
        } else {
            alert('Please Enter A Valid Coupne');
            document.getElementById('coupne-input').value = "";
        }

    } else {

        alert("You Used One Coupne");
        document.getElementById('coupne-input').value = "";
    }

    CopneCount++;      // Validation For Use Coupne only one Time Counter .
    seatAccessCount++; // Validation For apply cupne but not purchess  Counter .
}


let Email = document.getElementById('pacenger-Email');
Email.addEventListener('keyup',(event)=>{

    if(event.key){
     
        if( count>0){
            let nextPurBtn = document.getElementById('purchase-btn');
            nextPurBtn.disabled = false;
        }
    }
});
 

function success(){
let fullBody=document.getElementById('main-hiiden');
  fullBody.classList.add('hidden');
let successModal= document.getElementById('Success-section');
successModal.classList.remove('hidden');
 
}

function Countinue(){

    let fullBody=document.getElementById('main-hiiden');
    fullBody.classList.remove('hidden');
    let successModal= document.getElementById('Success-section');
    successModal.classList.add('hidden');
    location.reload();

}