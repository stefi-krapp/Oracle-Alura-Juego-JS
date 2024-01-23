let numeroMaximoPosible =100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible) + 1;
let numeroUsuario= 0;
let intentos= 1;
let palabraVeces= "vez";
let maximosIntentos = 10;

     while (numeroUsuario != numeroSecreto){
        numeroUsuario = parseInt(prompt(`Indicame un número entre 1 y ${numeroMaximoPosible} por favor:`));
         
        console.log(typeof(numeroUsuario));
        if (numeroUsuario == numeroSecreto) {
            alert(`Acertaste, el número es: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        } else {
            if (numeroUsuario > numeroSecreto){
                alert("el numero secreto es menor");
               } else {
                alert ("El numero secreto es mayor");  
               }
            intentos++;
            palabraVeces= "veces";
            if (intentos > maximosIntentos) {
                alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
                break; 
            }
    
    }
 }