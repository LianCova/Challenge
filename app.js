const textMensaje = document.querySelector(".text__mensaje");
const respuesta = document.getElementById("respuesta");

function bontonE(){

    let textoEncript = encriptar(textMensaje.value);
    respuesta.value = textoEncript;
    textMensaje.value = "";
    respuesta.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    // let matrizA = [["a"],["e"],["i"],["o"],["u"]];
    // let matrizB = [["ai"],["enter"],["imes"],["ober"],["ufat"]];
    let matrizGeneral = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    //console.table(matrizGeneral);
    stringEncriptado = stringEncriptado.toLowerCase();

    for(  var i = 0; i < matrizGeneral.length; i++){
        
        // for (let i2= 0; i2 < matrizB.length; i2++) {

            if (stringEncriptado.includes(matrizGeneral[i][0])) {

                stringEncriptado = stringEncriptado.replaceAll(matrizGeneral[i][0], matrizGeneral[i][1]);
                
            } 
            
        }
        return stringEncriptado

    // }
}

function bontonD(){

    const textoDesencript = desencriptar(textMensaje.value)
    respuesta.value = textoDesencript
    textMensaje.value = "";
    respuesta.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado){
    let matrizGeneral = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    //console.table(matrizGeneral);
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for( i = 0; i < matrizGeneral.length; i++){
        if (stringDesencriptado.includes(matrizGeneral[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(matrizGeneral[i][1], matrizGeneral[i][0])

        } 
       
    }
    return stringDesencriptado
}

function bontonC() {
    document.getElementById("respuesta").style.visibility = "visible";
    const textoOrigen = document.getElementById("respuesta").value;
    navigator.clipboard.writeText(textoOrigen)
    respuesta.value = "";
    respuesta.style.background =""
    
}
// function bontonC() {
//     const texto = respuesta.innerText || respuesta.textContent;
    
//     // Usar la API del portapapeles para copiar el texto
//     navigator.clipboard.writeText(texto)
//         .then(() => {
//             alert("Texto copiado: " + texto);
//         })
//         .catch(err => {
//             console.error("Error al copiar el texto: ", err);
//         });
// }

// function bontonC(){
//     try {
//         await navigator.clipboard.writeText('Hola mundo')
//         console.log('Texto copiado al portapapeles')
//       } catch (err) {
//         console.error('Error al copiar al portapapeles:', err)
//       }
// }

// async function bontonC(respuesta) {
//     try {
//         await navigator.clipboard.writeText(respuesta);
//         console.log('Texto copiado al portapapeles:', respuesta);
//     } catch (err) {
//         console.error('Error al copiar el texto al portapapeles:', err);
//     }
// }

// // Ejemplo de uso
// // bontonC('¡Hola, este es un texto copiado al portapapeles!');