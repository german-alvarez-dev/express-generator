const express = requiere('express');
const router = express.Router();

const Movie = ("./../models/Movie.model")

/* GET movies page */

router.get('/', (req, res, next) => {
    Movie.find({}, {
        image: 1,
        title: 1
    })
    then(allMovies => res.render("movies", {
        allMovies
    }))
        .catch(err => console.log(`The was an error whit the DDBB`))
});

module.exports = router;