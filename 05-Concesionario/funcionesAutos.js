let autos = require('./autos');

const concesionaria = {
    
   autos: autos,

   buscarAuto: function(patente) {
      let autoBuscado = autos.find(auto => patente == auto.patente);
        if(autoBuscado){
            return autoBuscado;
        } else {
            return null;
        }
   },

   venderAuto: function(patente) {
      let autoVendido = this.buscarAuto(patente);
      if (autoVendido) {
         autoVendido.vendido = true;
      } 
      
   },

   autosParaLaVenta: function() {
      let autosParaLaVenta = autos.filter( function(auto) {
         return !auto.vendido;
      } ) 
         return autosParaLaVenta;
   },

   autosNuevos: function() {
      let autosDisponibles = this.autosParaLaVenta();
      let autosNuevos = autosDisponibles.filter( function(auto) {
         return auto.km < 100;
      })
         return autosNuevos;
   },

   listaDeVentas: function() {

      let autosVendidos =  autos.filter( function(auto) {
         return auto.vendido;
      })
         return autosVendidos.map( function(auto) {
            return auto.precio;
         })
   },
   totalDeVentas: function() {

        let autosVendidos = this.listaDeVentas();
        let totalVentas = autosVendidos.reduce(function(total, precio) {
            return total + precio; 
        },0)

        return totalVentas;
    },

    puedeComprar: function(auto, persona) {
      
        return (persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas));
     
    },
   
    autosQuePuedeComprar: function(persona) {
 
       let autosDisponibles = this.autosParaLaVenta();
 
       let autosPuedeComprar = autosDisponibles.filter( auto => this.puedeComprar(auto, persona));
 
       return autosPuedeComprar;
    }
}

//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());

console.log(concesionaria.autosQuePuedeComprar({
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
    }))