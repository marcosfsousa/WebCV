// Max date is never beyond 'today' date. //

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();

 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy - 18+'-'+mm+'-'+dd; // 'yyyy - 18' to ensure the date of birth can't be validaded under 18 years of age.

document.getElementById("dob").setAttribute("max", today);

// Confirmation Message after form submission // 

function statusApproved() {
    // event.preventDefault();

    const status = document.querySelector(".status");    
    status.textContent = "Status: Approved";

  
    
}
