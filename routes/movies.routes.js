const express = require('express')
const router = express.Router()

const Movie = require('./../model/movie.model')


//All movies

router.get('/', (req, res) => {

    Movie
        .find()                                                                                            
        .then(allMovies => res.render('movies-view/movies-list', { allMovies }))     
        .catch(err => console.log(err))
})


//Detail movies


router.get('/detalle/:movies_id', (req, res) => {

    const moviesId = req.params.movies_id
    console.log(moviesId)

    Movie
        .findById(moviesId)
        .then(theMovie => res.render('movies-view/show', theMovie))
        .catch(err => console.log(err))
})

//Create new movie


router.get('/new', (req, res) => res.render('movies-view/new'))

    router.post('/new', (req, res) => {

        const { title, genre, plot } = req.body

        Movie
            .create({ title, genre, plot })
            .then(() => res.redirect('/movies'))
            .catch(res.render('movies-view/new'))
    })


//Delete one movie

router.get('/eliminar-movie', (req, res) => {

    const moviesId = req.query.movies_id
    console.log(moviesId)

    Movie
        .findByIdAndDelete(moviesId)
        .then(() => res.redirect('/movies'))
        .catch(err => res.render(console.log(err)))
    
}) 


//Edit one movie

router.get('/editar-movie', (req, res) => {

    const moviesId = req.query.movies_id

    Movie
        .findById(moviesId)
        .then(mov => res.render('movies-view/edit', mov))
        .catch(err => res.render(console.log(err)))

})


router.post('/editar-movie', (req, res) => {

    const moviesId = req.query.movies_id   
    console.log(moviesId)

    const { title, genre, plot }  = req.body   

    Movie
        .findByIdAndUpdate(moviesId, { title, genre, plot })
        .then(info => res.redirect('/movies'))
        .catch(err => console.log(err))
})



module.exports = router