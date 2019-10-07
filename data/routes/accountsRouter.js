const express = require('express');

const Accounts = require('../accountsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Accounts.find()
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was an error", err})
    })
})

router.get('/:id', (req, res) => {
    Accounts.findById(req.params.id)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was an error", err})
    })
})

router.post('/', (req, res) => {
    Accounts.insert(req.body)
    .then(account => {
        res.status(201).json(account)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was an error", err})
    })
})

router.put('/:id', (req, res) => {
    Accounts.update(req.params.id, req.body)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was an error", err})
    })
})

router.delete('/:id', (req, res) => {
    Accounts.remove(req.params.id)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was an error", err})
    })
})

module.exports = router;