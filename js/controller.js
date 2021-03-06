
     document.querySelector('#calculate').addEventListener('click', (e)=>{

        //showing loader
         document.getElementById('loading').style.display ="block";
        //hide results
        document.getElementById('results').style.display='none';
        setTimeout(calcLoan,2000);
        e.preventDefault();
     })
 
 
// prompt('function reached');

function calcLoan() {
   
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');
    
    var principal = parseFloat(amount.value);
    var calculatedInterest = parseFloat(interest.value) / 100 / 12;
    var calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    var x = Math.pow(1 + calculatedInterest, calculatedPayments);
    var monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        //show results
        document.getElementById('results').style.display='block';
        //hide loader
        document.getElementById('loading').style.display='none';
    } else {
        // alert('check your number');
        showError('please check your numbers');
    }
    
    // console.log(amount.value);
    // console.log(interest.value);
    // console.log(years.value);

    
}

function showError(error) {
    //hiding loader when input fields are empty
    document.getElementById('loading').style.display ='none';
    //create div
    var errorDiv = document.createElement('div');
    //get elements
    var card = document.querySelector('.card');
    var heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    //clear error
    setTimeout(clearError, 2000);


}

function clearError() {
    document.querySelector('.alert').remove();
}

// function emicalculate(){
   
// }