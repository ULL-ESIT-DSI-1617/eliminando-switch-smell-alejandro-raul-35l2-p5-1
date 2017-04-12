/*global
    Medida
*/


// Clase temperatura hereda de medida
(function() {
    
    
    function Temperatura(valor, tipo) {
        
        Medida.call(this, valor, tipo);
    };
    
    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;
    
    
    // Clase celsius heredada de temperatura
    function Celsius(valor) {
        
        Temperatura.call(this, valor, "c");
    }
    
    Celsius.prototype = new Temperatura();
    Celsius.prototype.constructor = Celsius;
    Medida.measures.c = Celsius;
    
    Celsius.prototype.toFahrenheit = function () {
        return new Fahrenheit(this.valor * 9 / 5 + 32);
    };
    Celsius.prototype.toKelvin = function () {
        return new Kelvin(this.valor + 273.15);
    };
    
    Celsius.prototype.toString = function () {
        return this.valor.toFixed(2) + " Celsius";
    };
    
    // Clase farenheit heredada de temperatura
    function Fahrenheit(valor) {
        
        Temperatura.call(this, valor, "f");
    }
    
    Fahrenheit.prototype = new Temperatura();
    Fahrenheit.prototype.constructor = Fahrenheit;
    Medida.measures.f = Fahrenheit;
    
    Fahrenheit.prototype.toCelsius = function () {
        return new Celsius((this.valor - 32) * 5 / 9);
    };
    Fahrenheit.prototype.toKelvin = function () {
        return new Kelvin((this.valor - 32) * 5 / 9 + 273.15);
    };
    
    Fahrenheit.prototype.toString = function () {
        return this.valor.toFixed(2) + " Fahrenheit";
    };
    
    
    // Clase kelvin heredada de temperatura
    function Kelvin(valor) {
        
        Temperatura.call(this, valor, "k");
    }
    
    Kelvin.prototype = new Temperatura();
    Kelvin.prototype.constructor = Kelvin;
    Medida.measures.k = Kelvin;
    
    Kelvin.prototype.toCelsius = function () {
        return new Celsius(this.valor - 273.15);
    };
    Kelvin.prototype.toFahrenheit = function () {
        return new Fahrenheit((this.valor -273.15) * 9 / 5 + 32);
    };
    
    Kelvin.prototype.toString = function () {
        return this.valor.toFixed(2) + " Kelvin";
    };
    
})(this);