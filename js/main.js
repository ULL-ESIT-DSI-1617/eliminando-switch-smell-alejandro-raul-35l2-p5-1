(function(exports) {

    "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
    function main() {
        
        var datoTemp = original.value;    //guarda el texto que se inserta en la web
        
        var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFkKcCmMiI])\s*(?:to)?\s*([fFkKcCmMiI])\s*$/;
        
        var miValor = datoTemp.match(regexp);
    
        if (miValor) {
              
            var num = miValor[1];
            var type = miValor[2].toLowerCase();
            var typeTo = miValor[3].toLowerCase();
            
            num = parseFloat(num);
            
            switch (type) {
                
                case 'c': {
                
                    var celsius = new Celsius(num);
                    if (typeTo == 'f') {
                        converted.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
                    }
                    else if (typeTo == 'k') {
                        converted.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
                    }
                    break;
                }
                
                case 'f': {
                
                    var farenheit = new Farenheit(num);
                    if (typeTo == 'c') {
                        converted.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
                    }
                    else if (typeTo == 'k') {
                        converted.innerHTML = farenheit.toKelvin().toFixed(2) + " Kelvin";
                    }
                    break;
                }
                
                case 'k': {
                
                    var kelvin = new Kelvin(num);
                    if (typeTo == 'c') {
                        converted.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
                    }
                    else if (typeTo == 'f') {
                        converted.innerHTML = kelvin.toFarenheit().toFixed(2) + " Farenheit";
                    }
                    break;
                }
                
                case 'm': {
                
                    var metros = new Metros(num);
                    if (typeTo == 'i') {
                        converted.innerHTML = metros.toPulgadas().toFixed(2) + " Pulgadas";
                    }
                    break;
                }
                
                case 'i': {
                    
                    var pulgadas = new Pulgadas(num);
                    if (typeTo == 'm') {
                        converted.innerHTML = pulgadas.toMetros().toFixed(2) + " Metros";
                    }
                    break;
                }
                
                default: {
                    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
                }
            }
        }
        else {
            converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
        }
    }
    exports.main = main;
})(this);








