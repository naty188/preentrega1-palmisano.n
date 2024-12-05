/*
HTML *
FUNCION PARA CALCULAR DIA DE COMPRAS*
FUNCION PARA GENERAR DESCUENTOS  *
FUNCION PARA CALCULAR PRECIO FINAL*
FUNCION PARA GENERAR DESCUENTOS *
VARIABLES *
3 TIPOS DE DESCUENTOS*
BUCLE *
OPERADOR LOGICO (&&,||, !=)
CONDICIONAL *
ALERT *
PROMPT *

*/


// Función para calcular el descuento según el día de compra
function calcularDescuento(importe, diaDeCompra) {
    let descuento = 0;

    // Asignar descuento según el día
    if (diaDeCompra === "viernes") {
        descuento = 20; // 20%
    } else if (diaDeCompra === "sabado") {
        descuento = 25; // 25%
    } else if (diaDeCompra === "domingo") {
        descuento = 30; // 30%
    }

    // Calcular el importe con descuento
    let resultado = importe - (importe * descuento / 100);
    alert(`El importe a abonar, menos el descuento es de: $${resultado.toFixed(2)}`);
}

// Función para solicitar el día de compra al usuario
function calcularDiadeCompra() {
    let diaDeCompra = prompt("Ingresa el día de tu compra (lunes a domingo):").toLowerCase();

    if (!diaDeCompra == null) {
        alert("No se reconoció el día de tu compra. Inténtalo de nuevo más tarde.");
        
    }

    // Verificar si el día está entre lunes a jueves
    if (diaDeCompra === "lunes" || diaDeCompra === "martes" || diaDeCompra === "miercoles" || diaDeCompra === "jueves") {
        alert("No tienes descuentos estos días.");
        return null;
    }

    // Verificar si el día es viernes, sábado o domingo
    if (diaDeCompra === "viernes" || diaDeCompra === "sabado" || diaDeCompra === "domingo") {
        alert("¡Obtuviste un descuento en tu compra!");
        return diaDeCompra;
    }

    alert("El día ingresado no es válido. Inténtalo de nuevo.");
    return null;
}

// Función principal para calcular el precio final
function calcularPrecioFinal() {
    let continuar;

    do {
        let precioDelProducto = 60000; // Precio fijo del producto
        let diaDeCompra = calcularDiadeCompra();

        // Si el día es válido, calcular el descuento
        if (diaDeCompra) {
            calcularDescuento(precioDelProducto, diaDeCompra);
        }

        continuar = confirm("¿Deseas calcular otro descuento?");
    } while (continuar);
}

// Llamar a la función principal
calcularPrecioFinal();



