  document.querySelector('#calculate').addEventListener('click', calcLoan);

function calcLoan(e) {
    // prompt('function reached');
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlypayment = document.querySelector('#monthly-payment');
    const totalpayment = document.querySelector('#total-payment');
    const totalinterest = document.querySelector('#total-iterest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    } else {
        alert('check your number');
        showError('please check your numbers');
    }
    // console.log(amount.value);
    // console.log(interest.value);
    // console.log(years.value);

    e.preventDefault();
}

function showError(error) {
    //create div
    const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    //clear error
    setTimeout(clearError, 1000);

}

function clearError() {
    document.querySelector('.alert').remove();
}