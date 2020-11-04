const router = require('express').Router()
const db = require('../database/db-config.js')
const Types = require('./typesModel')

router.get('/', (req, res, next) => {
    Types.findAll()
        .then(types => res.status(200).json({data: types}))
        .catch(err => next({ code: 500, message: 'Problems getting Types', err}))
})

router.get('/:id', (req, res) => {
    Types.findById(req.params.id)
        .then(type => {
            if (type) {
                res.status(200).json({data: type})
            } else {
                res.status(404).json({ message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting Types', err})
        })
})

router.post('/', (req, res) => {
    Types.add(req.body)
        .then(type => {
            res.status(201).json({data: type})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Types'})
        })
});

router.put('/:id', (req, res) => {
    Types.update(req.params.id, req.body)
    .then(type => {
        if (type) {
            res.status(200).json({data: type})
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating type' })
    })
})

router.delete('/:id', (req, res) => {
    Types.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that type' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing type' })
    })
})

module.exports = router