const peliculas = require("./movies");
//console.log(peliculas);

let moviesDH = {
    listMovies:() => {
        let lista = peliculas.map((pelicula) => {
            return pelicula;
        })
        return lista;
    },
    searchMovie:(id)=> {
        
        let peliculaBuscada = peliculas.find(pelicula => id == pelicula.id);
        if(peliculaBuscada){
            return peliculaBuscada;
        } else {
            return null;
        }
    },
    searchMoviesByGenre:(genero) => {

        let generoBuscado = peliculas.filter(pelicula => genero == pelicula.genre);
        if(generoBuscado.length){
            return generoBuscado;
        } else {
            return null;
        }
    },
    totalPrice: () => {

        let precioTotal = peliculas.reduce((precio,pelicula) => precio + pelicula.price, 0)
        return precioTotal;
    },
    


};
//console.log(moviesDH.listMovies(peliculas));
//console.log(moviesDH.searchMovie(8));
//console.log(moviesDH.searchMoviesByGenre('Acción'));
console.log(moviesDH.totalPrice());


        // let busqueda = movies.filter((movie)=>{
        //     return movie.id == clave || movie.title == clave;
        // })

        // if (busqueda.length > 0) {
        //         busqueda.forEach((movie,index) => {
        //         for (let property in movie) {
        //             console.log (property + ': ' + movie[property])
        //         }
        //     });
        // } else {
        //     console.log (null);
        // }
