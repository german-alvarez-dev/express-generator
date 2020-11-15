const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


//All celebrities

router.get('/', (req, res) => {

    Celebrity
        .find()                                                                                            
        .then(allCelebrities => res.render('celebrities/celebrities-list', { allCelebrities }))     
        .catch(err => console.log(err))
})

//Detail celebrities


router.get('/detalle/:celebritie_id', (req, res) => {

    const celebritieId = req.params.celebritie_id

    Celebrity
        .findById(celebritieId)
        .then(theCelebritie => res.render('celebrities/show', theCelebritie))
        .catch(err => console.log(err))
})




//Create new celebritie


router.get('/new', (req, res) => res.render('celebrities/new'))

    router.post('/new', (req, res) => {

        const { name, occupation, catchPhrase } = req.body

        Celebrity
            .create({ name, occupation, catchPhrase })
            .then(() => res.redirect('/celebrities'))
            .catch(res.render('celebrities/new'))
    })


//Delete one celebritie

router.get('/eliminar-celebrity', (req, res) => {

    const celebrityId = req.query.celebrity_id
    console.log(celebrityId)

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => res.render(console.log(err)))
    
}) 


//Edit one celebritie


router.get('/editar-celebrity', (req, res) => {

    const celebrityId = req.query.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(celeb => res.render('celebrities/edit', celeb))
        .catch(err => res.render(console.log(err)))

})

router.post('/editar-celebrity', (req, res) => {

    const celebrityId = req.query.celebrity_id   
    console.log(celebrityId)

    const { name, occupation, catchPhrase } = req.body   

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(info => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})







module.exports = router