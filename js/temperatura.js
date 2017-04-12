// Clase temperatura hereda de medida
(function(exports) {
    "use strict"
    
    function Temperatura(valor, tipo) {
        
        Medida.call(this, valor, tipo);
    };
    
    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;
    
    
    // Clase celsius heredada de temperatura
    function Celsius(valor) {
        
        Temperatura.call(this, valor);
    }
    
    Celsius.prototype = new Temperatura();
    Celsius.prototype.constructor = Celsius;
    
    Celsius.prototype.toFarenheit = function () {
        return (this.valor * 9 / 5 + 32);
    };
    Celsius.prototype.toKelvin = function () {
        return (this.valor + 273.15);
    };
    
    
    
    // Clase farenheit heredada de temperatura
    function Farenheit(valor) {
        
        Temperatura.call(this, valor);
    }
    
    Farenheit.prototype = new Temperatura();
    Farenheit.prototype.constructor = Farenheit;
    
    Farenheit.prototype.toCelsius = function () {
        return ((this.valor - 32) * 5 / 9);
    };
    Farenheit.prototype.toKelvin = function () {
        return ((this.valor - 32) * 5 / 9 + 273.15);
    };
    
    
    // Clase kelvin heredada de temperatura
    function Kelvin(valor) {
        
        Temperatura.call(this, valor);
    }
    
    Kelvin.prototype = new Temperatura();
    Kelvin.prototype.constructor = Kelvin;
    
    Kelvin.prototype.toCelsius = function () {
        return (this.valor - 273.15);
    };
    Kelvin.prototype.toFarenheit = function () {
        return ((this.valor -273.15) * 9 / 5 + 32);
    };
    
    exports.Temperatura = Temperatura;
    exports.Celsius = Celsius;
    exports.Farenheit = Farenheit;
    exports.Kelvin = Kelvin;
})(this);