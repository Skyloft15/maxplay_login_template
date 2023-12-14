
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
    //nombre: /^[a-zA-ZÃ€-Ã¿\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    clave: /^.{4,16}$/, // 4 a 12 digitos.
    //correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const campos = {
    usuario: false,
    clave: false,

}


///VALIDAR FORMULARIO
const validarForm = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarcampo(expresiones.usuario, e.target, 'usuario');
            break;

        case "clave":
            validarcampo(expresiones.clave, e.target, 'clave');
            break;

        case "licencia":
            validarcampo(expresiones.clave, e.target, 'licencia');
            break;

    }
}

//funcion de validacion de campos
const validarcampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        campos[campo] = false;
    }
}





///event listener de los campos
inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});


///event listener submit
formulario.addEventListener('submit', (e) => {
   console.log('quaso')
    if (campos.usuario && campos.clave) {
        return true;
    } else {
        e.preventDefault();
        toastr.error('Revise que los Campos esten Correctamente Ingresados.', 'Error!');
        return false;
    }

});