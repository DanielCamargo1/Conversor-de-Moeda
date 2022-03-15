function converter() {//chama a função;
    var valorInserido = parseFloat(document.getElementById("valor").value);// Pega o valor do input;
    var valorDoSelect = document.getElementById("moeda").value;// peega o valor da opção;
    if(valorDoSelect == "dolar") {
      var valorRealEmDolar = valorInserido * 5.16;//condiconal;
      console.log(valorRealEmDolar);
      var elementoValorConvertido = document.getElementById("resultado");
      var valorConvertido = "O resultado em Real é R$:" + valorRealEmDolar;
      elementoValorConvertido.innerHTML = valorConvertido;
    } else {
      var valorRealEmEuro = valorInserido * 5.45;
      console.log(valorRealEmEuro);
      var elementoValorConvertido = document.getElementById("resultado");
      var valorConvertido = "O resultado em Real é R$:" + valorRealEmEuro;
      elementoValorConvertido.innerHTML = valorConvertido;
      
    }
    
  }