
function saludar() {
    let userName = prompt('Hola, como te llamas ?');
    alert('hola'  +  userName);
}

saludar();


let passUserSaved = "1234";
let continuar = true;
let passUser = prompt("hola, ingresa tu contrasenia");

while (continuar) {
    if (passUserSaved === passUser) {
        alert('hola, bienvenido/a');
        continuar = false;
        break;
    }

    alert('contrasenia incorrecta');

    passUser = prompt("ingresar tu contrasenia")
}

let option = prompt('Que vas a hacer?: /n1- comprar. /n2- vender. /n3 mirar.');

switch (option) {
    case '1':
        alert('comprar');
        break;

    case '2':
        alert('vender');
        break;

    case '3':
        alert('mirar');
        break;

   
    default:
        alert('opcion incorrecta')

}