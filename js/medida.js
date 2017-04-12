/*global
    XRegExp, console
*/

(function (exports) {
    "use strict";
    
    /* Expresion regular para matching */
    var regexp1 = XRegExp('(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) #valor              \n' +
                          '(?<espacio> \\s*)                                                       \n' +
			                    '(?<tipo> \\s*[fFcCkKmMiI])                          # tipo de entrada   \n' + 
			                    '(?<to> \\s*(?:to)?\\s*)                             # to opcional       \n' +
			                    '(?<destino> [fFcCkKmMpiI])                          # tipo destino', 'x');
		
    function Medida(valor, tipo) {      

          this.valor = valor; 
          this.tipo = tipo;  
    };

    Medida.constructor = Medida; 
    Medida.measures = Medida.measures || {};
    
    Medida.match = function(entrada)
    {
        return XRegExp.exec(entrada, regexp1);
    }


    Medida.convertir = function(valor) {
      
      valor = valor.toLowerCase();
      
      var measures = Medida.measures;
      var match = Medida.match(valor);
      
      if (match) {
        var numero = parseFloat(match.numero),
            tipo   = match.tipo,
            destino = match.destino;
            console.log("numero: " + numero);
            console.log("tipo: " + tipo);
            console.log("destino: " + destino);
    
        try {
          var source = new measures[tipo](numero);          // new Fahrenheit(32)
          var target = "to" + measures[destino].name;         // "toCelsius"//console.log(TARGET" + target);//
          return source[target]().toString();  // "0 Celsius";
        }
        catch(err) {
          return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
        }
      }
      else
        return "Introduzca una temperatura valida: 330e-1 F to C";
    };


    exports.Medida = Medida;
   
})(this);