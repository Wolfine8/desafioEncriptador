function textoEncriptado()
{
    let encriptarTextoUsuario = document.getElementById('textoUsuario').value;
    validarTexto(encriptarTextoUsuario);
    let textoEncriptado = encriptacion(encriptarTextoUsuario);
    return textoEncriptado;
}

function textoDesencriptado()
{
    let desencriptarTextoUsuario = document.getElementById('textoUsuario').value;
    validarTexto(desencriptarTextoUsuario);
    let textoDesencriptado = desencriptacion(desencriptarTextoUsuario);
    return textoDesencriptado;
}

function ajustarTamaño(elemento) 
{
    // Ajuste de altura
    elemento.style.height = 'auto';
    elemento.style.height = elemento.scrollHeight + 'px';

    // Ajuste de anchura
    elemento.style.width = 'auto';
    elemento.style.width = (elemento.scrollWidth + 2) + 'px';
}

function validarTexto(texto) 
{
    // Expresión regular para detectar mayúsculas y caracteres especiales
    const regex = /^[\s]|[A-Z]|[^a-z\s]/;
    let alerta;
    if (regex.test(texto)) 
        {
            alerta = alert("Error: No se permiten letras mayusculas ni caracteres especiales, tampoco se permite iniciar las frases con un espacio.");
            //Recarga la pagina en caso de mostrar error
            window.location.reload();
        } 
    else 
        {
            console.log("Texto válido.");
        }

    return alerta;
}

function encriptarTexto()
{
    // Si el texto ingresado esta vacio que ejecute el if en caso contrario si contiene carecteres ejecute el else
    if(textoEncriptado() == '')
    {
        
        let imagen = document.getElementById('muñeco');
        imagen.remove();
    }
    else if (textoEncriptado() != '')
    {
        let textareaDos = document.getElementById('textoEntregado');
        textareaDos.hidden = false;
        textareaDos.disabled = false;
        textareaDos.innerHTML = textoEncriptado('textoEncriptado');
        let botonCopiar = document.getElementById('copiar');
        botonCopiar.hidden = false;
        botonCopiar.disabled = false;
        let imagenes = document.getElementById('imagenes');
        imagenes.remove();
        
    }
    
}

function desencriptarTexto()
{
    // Si el texto ingresado esta vacio que ejecute el if en caso contrario si contiene carecteres ejecute el else
    if(textoDesencriptado() == '')
    {
        
        let imagen = document.getElementById('muñeco');
        imagen.remove();
    }
    else if (textoDesencriptado() != '')
    {
        let textareaDos = document.getElementById('textoEntregado');
        textareaDos.hidden = false;
        textareaDos.disabled = false;
        textareaDos.innerHTML = textoDesencriptado('textoDesencriptado');
        let botonCopiar = document.getElementById('copiar');
        botonCopiar.hidden = false;
        botonCopiar.disabled = false;
        let imagenes = document.getElementById('imagenes');
        imagenes.remove();
        
        
    }
    
}
       
function encriptacion(texto) 
{
    // Reemplazar las letras según las reglas especificadas
    let resultado = texto
        .replace(/e/g, 'enter') // Reemplaza todas las 'E' por 'ENTER'
        .replace(/i/g, 'imes')  // Reemplaza todas las 'I' por 'IMES'
        .replace(/a/g, 'ai')   // Reemplaza todas las 'A' por 'AI'
        .replace(/o/g, 'ober')  // Reemplaza todas las 'O' por 'OBER'
        .replace(/u/g, 'ufat') // Reemplaza todas las 'U' por 'UFAT'  
        return resultado;
}

function desencriptacion(texto) 
{
    // Reemplazar las letras según las reglas especificadas
    let resultado = texto
        .replace(/enter/g, 'e') 
        .replace(/imes/g, 'i')  
        .replace(/ai/g, 'a')   
        .replace(/ober/g, 'o')  
        .replace(/ufat/g, 'u') 
        return resultado;
}

function limpiarCaja() 
{
    document.querySelector('#textoUsuario').value = '';
}

async function copiarTexto() 
{
    const texto = document.getElementById('textoEntregado').value;
    try 
    {
        await navigator.clipboard.writeText(texto);

    }
    catch
    {
    }
}
//Funcion para ajustar el tamaño del textarea y para limpiar la caja de texto de el Usuario
document.getElementById('desencriptar').addEventListener('click',function()
{
const textareaDesencriptada = document.getElementById('textoEntregado');
ajustarTamaño(textareaDesencriptada);
limpiarCaja();
});
//Funcion para ajustar el tamaño del textarea y para limpiar la caja de texto de el Usuario
document.getElementById('encriptar').addEventListener('click',function()
{
const textareaEncriptada = document.getElementById('textoEntregado');
ajustarTamaño(textareaEncriptada);
limpiarCaja();
});
