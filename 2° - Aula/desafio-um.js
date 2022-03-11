
const moedas= [{nome:'Dolar', valor:5.5}, {nome:'Euro', valor:6}];



console.log(moedas);


/*
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");


fetch('https://economia.awesomeapi.com.br/json/all').then(resposta => {
  return resposta.json()
}).then(corpo => {
  document.querySelectorAll(".currency").innerHTML = console.log(corpo)
})


fetch('https://economia.awesomeapi.com.br/json/all').then((resposta) => resposta.json()).then((resposta) => {
  display(resposta);
});

function display(resposta) {
  const entries = Object.entries(resposta);
  console.log(entries.length)
  for(var i = 0; i < entries.length; i++){
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if(currency1 != currency2) {
    convert(currency1, currency2, value);
  }else{
    alert("Escolha uma moeda diferente!");
  }
});

function convert(currency1, currency2, value) {
  const host = "economia.awesomeapi.com.br/json/all";
  fetch(`http://${host}/latest?amount=${value}&from=${currency1}&to${currency2}`).then((val) => val.json()).then((val) => {
    console.log(val);
  })
}

  
/*
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  */