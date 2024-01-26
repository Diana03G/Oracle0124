/*let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}*/

//alert('¡Bienvenida y bievenido a nuestro sitio web!');

/*let edad = prompt('¿Que edad tienes?');

if(edad>=18) {
    alert('Puedes obtener tu licencia de conducir!');
}*/

let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt('Me indicas un numero entre 1 y 10 por favor:'));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}. `);        
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }

        // Incrementamos el contador cuando no acierta
        //intentos = intentos +1;
        //intentos += 1;
        intentos ++;
        palabraVeces = 'veces';
    }
    if (intentos > maximosIntentos){
        alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
        break;
    }
}


