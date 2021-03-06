const router = require('express').Router()
const db = require('../database/db-config.js')
const Projects = require('./projectModel')

router.get('/', (req, res, next) => {
    Projects.findAll()
        .then(projects => res.status(200).json({data: projects}))
        .catch(err => next({ code: 500, message: 'Problems getting Projects', err}))
})

// router.get('/:id', (req, res) => {
//     Projects.findById(req.params.id)
//         .then(project => {
//             if (project) {
//                 res.status(200).json({data: project})
//             } else {
//                 res.status(404).json({ message: 'ID not found'})
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ message: 'Trouble getting Projects', err})
//         })
// })

router.get('/:types_id', (req, res) => {
    const {types_id} = req.params;
    db('projects')
     .where("types_id", types_id)
     .then((project) => res.status(200).json({data: project}))
     .catch(err => {
         console.log(err)
         res.status(500).json({ message: 'Trouble getting Projects of that Type' })
     })
});

router.post('/', (req, res) => {
    Projects.add(req.body)
        .then(project => {
            res.status(201).json({data: project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Projects'})
        })
});

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        if (project) {
            res.status(200).json({data: project})
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating Project' })
    })
})

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that project' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing Project' })
    })
})

module.exports = router