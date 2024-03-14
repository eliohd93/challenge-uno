const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat" 


   function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
   }

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    // textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.getElementById("texto2").innerHTML = "";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
    
   function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
   }

    function desencriptar(stringDesencriptada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase()
    
        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
        }
        return stringDesencriptada
    }
    function copy() {
        var txtcopiar = document.querySelector("#mensaje");
    
        // Selecciona el contenido del textarea
        txtcopiar.select();
    
        try {
            // Copia el contenido seleccionado al portapapeles
            document.execCommand('copy');
            alert("Copiado al portapapeles");
        } catch (err) {
            // Maneja errores
            console.error('Error al copiar: ', err);
            alert('Error al copiar');
        }
    }

    

    

