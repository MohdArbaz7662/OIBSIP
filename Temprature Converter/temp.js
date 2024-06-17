function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('inputUnit').value;
    let result = '';

    if (isNaN(temp)) {
        result = 'Please enter a valid number';
    } else {
        switch (unit) {
            case 'Celsius':
                result = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F = ${(temp + 273.15).toFixed(2)}K`;
                break;
            case 'Fahrenheit':
                result = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
                break;
            case 'Kelvin':
                result = `${temp}K = ${(temp - 273.15).toFixed(2)}°C = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
        }
    }

    document.getElementById('result').innerText = result;
}
