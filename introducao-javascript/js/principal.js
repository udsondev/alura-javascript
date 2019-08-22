var titulo = document.querySelector(".titulo");
titulo.textContent = ("Aparecida Nutricionista");

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; pacientes.length; i++){

    paciente = pacientes[i]


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true
    var alturaEhValido = true


    if (peso <= 0 || peso >= 300) {
        alert('Peso Invalido')
        pesoEhValido = false
        tdImc.textContent = "Peso invalido"
    }

    if (altura <= 0 || altura >= 3.00) {
        alert("Altura invalida")
        alturaEhValido = true
        tdImc.textContent = "Altura inválida"
    }    

    if (pesoEhValido && alturaEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);

    } 
}
