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

exports.updateMovie = async (theOriginal, theUpdate) => {
    try {
         const response = await Movie.update(
            {title: theUpdate.title},      
            {
                where: {
                    title: theOriginal.title
                }
            }
        ) 
        console.log(response);
    } catch (error) {
    console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({where: movieObj});
        console.log("deleted");
    } catch (error) {
        console.log(error);
    }
};


