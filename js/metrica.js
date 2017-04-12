/*global
    Medida
*/

// Clase metrica hereda de medida
(function() {
    
    
    function Metrica(valor, tipo) {
        
        Medida.call(this, valor, tipo);
    }
    
    Metrica.prototype = new Medida();
    Metrica.prototype.constructor = Metrica;
    
    
    // Clase pulgada heredada de metrica
    function Pulgadas(valor) {
        
        Metrica.call(this, valor, "i");
    }
    
    Pulgadas.prototype = new Metrica();
    Pulgadas.prototype.constructor = Pulgadas;
    Medida.measures.i = Pulgadas;
    
    Pulgadas.prototype.toMetros = function () {
        return new Metros(this.valor * 0.0254);
    };
    
    Pulgadas.prototype.toString = function () {
        return this.valor.toFixed(2) + " Pulgadas";
    };
    
    
    // Clase metros heredada de metrica
    function Metros(valor) {
        
        Metrica.call(this, valor, "m");
    }
    
    Metros.prototype = new Metrica();
    Metros.prototype.constructor = Metros;
    Medida.measures.m = Metros;
    
    Metros.prototype.toPulgadas = function () {
        return new Pulgadas(this.valor * 39.3701);
    };
    
    Metros.prototype.toString = function () {
        return this.valor.toFixed(2) + " Metros";
    };
    
    
})(this);
