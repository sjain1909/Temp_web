document.getElementById("temperature-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;

    let convertedTemperature;

    if (fromUnit === "kelvin") {
        if (toUnit === "kelvin") convertedTemperature = temperature;
        else if (toUnit === "celsius") convertedTemperature = temperature - 273.15;
        else if (toUnit === "fahrenheit") convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
    } else if (fromUnit === "celsius") {
        if (toUnit === "kelvin") convertedTemperature = temperature + 273.15;
        else if (toUnit === "celsius") convertedTemperature = temperature;
        else if (toUnit === "fahrenheit") convertedTemperature = temperature * 9 / 5 + 32;
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "kelvin") convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
        else if (toUnit === "celsius") convertedTemperature = (temperature - 32) * 5 / 9;
        else if (toUnit === "fahrenheit") convertedTemperature = temperature;
    }

    document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
});
