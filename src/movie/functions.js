const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try{
       const response = await Movie.create(movieObj);
       console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try{
        const allMovies = await Movie.findAll();
        console.log("All Movies:", JSON.stringify(allMovies, null, 2));
    } catch (error) {
        console.log(error);
    }
};

