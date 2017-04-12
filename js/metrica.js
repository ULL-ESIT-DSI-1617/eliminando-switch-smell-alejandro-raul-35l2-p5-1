// Clase metrica hereda de medida
(function(exports) {
    "use strict"
    
    function Metrica(valor, tipo) {
        
        Medida.call(this, valor, tipo);
    }
    
    Metrica.prototype = new Medida();
    Metrica.prototype.constructor = Metrica;
    
    
    // Clase pulgada heredada de metrica
    function Pulgadas(valor) {
        
        Metrica.call(this, valor);
    }
    
    Pulgadas.prototype = new Metrica();
    Pulgadas.prototype.constructor = Pulgadas;
    
    Pulgadas.prototype.toMetros = function () {
        return (this.valor * 0.0254);
    };
    
    
    // Clase metros heredada de metrica
    function Metros(valor) {
        
        Metrica.call(this, valor);
    }
    
    Metros.prototype = new Metrica();
    Metros.prototype.constructor = Metros;
    
    Metros.prototype.toPulgadas = function () {
        return (this.valor * 39.3701);
    };
    
    exports.Metrica = Metrica;
    exports.Pulgadas = Pulgadas;
    exports.Metros = Metros;
})(this);
