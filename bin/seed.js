
//MOVIES SEED

// const mongoose = require('mongoose')
// const Movie = require('../model/movie.model')

// const dbName = 'celebrity-webmad1020'
// mongoose.connect(`mongodb://localhost/${dbName}`)



// const movies = [
//     {
//         title: "Interestellar",
//         genre: "science fiction",
//         plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//         title: "Origen",
//         genre: "science fiction",
//         plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//         title: "La mala educación",
//         genre: "drama",
//         plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
// ]



// Movie
//     .create(movies)
//     .then(allMoviesCreated => {
//         console.log(`Created ${allMoviesCreated.length} movies`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))




//CELEBRITY SEED


const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const dbName = 'celebrity-webmad1020'
mongoose.connect(`mongodb://localhost/${dbName}`)



const celebrities = [
    {
        name: "C Tangana",
        occupation: "singer",
        catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Kutxi Romero",
        occupation: "singer",
        catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "La Rosalía",
        occupation: "singer",
        catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]



Celebrity
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

