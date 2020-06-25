const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get current user')
})

router.post('/', (req, res) => {
    res.send('get current user')
})

module.exports = router