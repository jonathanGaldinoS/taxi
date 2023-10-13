function calculateFare() {
    const distance = parseFloat(document.getElementById('distance').value);
    const initialFlag = parseFloat(document.getElementById('initialFlag').value);

    if (isNaN(distance) || isNaN(initialFlag)) {
        displayError('Por favor, insira valores válidos.');
        return;
    }

    const baseFare = 5.5; // Bandeirada
    const flag1PerKmFare = 4.0; // Preço por km Bandeira 1
    const flag2PerKmFare = 5.2; // Preço por km Bandeira 2

    const flag1Fare = baseFare + (distance * flag1PerKmFare);
    const flag2Fare = baseFare + (distance * flag2PerKmFare);

    const finalFare = (initialFlag === 1) ? flag1Fare : flag2Fare;

    displayResult(`Estimativa de preço: R$${finalFare.toFixed(2)}`);
}

function displayError(message) {
    document.getElementById('error').innerHTML = message;
    document.getElementById('result').innerHTML = '';
}

function displayResult(message) {
    document.getElementById('error').innerHTML = '';
    document.getElementById('result').innerHTML = message;
}