let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.addEventListener("keyup", convertCelsius);
fahrenheit.addEventListener("keyup", convertFahreit);
kelvin.addEventListener("keyup", convertKelvin);

function convertCelsius() {
  let valorFahrenheit = (parseFloat(celsius.value)) * (9 / 5) + 32;
  fahrenheit.value = valorFahrenheit.toFixed(2);

  let valorKelvin = parseFloat(celsius.value) + 273.15;
  kelvin.value = valorKelvin.toFixed(2);
}

function convertFahreit() {
  let valorCelsius = (parseFloat(fahrenheit.value) - 32) * (5 / 9);
  celsius.value = valorCelsius.toFixed(2);

  let valorKelvin = (parseFloat(fahrenheit.value) - 32) * (5 / 9) + 273.15;
  kelvin.value = valorKelvin.toFixed(2);
}

function convertKelvin() {
  let valorCelsius = parseFloat(kelvin.value) - 273.15;
  celsius.value = valorCelsius.toFixed(2);

  let valorFahrenheit = (parseFloat(kelvin.value) - 273.15) * (9 / 5) + 32;
  fahrenheit.value = valorFahrenheit.toFixed(2);
}




/*
function Converter() {
  let valorCeusius = document.getElementById("valor").value;
  let valorEmFahrenheit = parseFloat(valorCeusius);

  //(0 °C × 9/5) + 32 = 32 °F
  
  let valorFahrenheit = valorEmFahrenheit * (9 / 5) + 32;
  console.log(valorFahrenheit);

  let elementoValorConvertido = document.getElementById("valorConvertido");
  let valorConvertido = "O resultado em Fahrenheit é: " + valorEmReal + " °";
  elementoValorConvertido.innerHTML = valorConvertido;
}
*/

// fahrenheit para celsius (32 °F − 32) × 5/9 = °C
