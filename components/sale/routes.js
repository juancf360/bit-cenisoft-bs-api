const express = require('express')
const router = express.Router()
const { getSale, createSale, updateSale, deleteSale }  = require('./actions')
// GET by ID

router.get('/:id', getSale)

// POST Create

router.post('/', createSale)

// PUT Update info

router.put('/:id', updateSale)

// DELETE by ID

router.delete('/:id', deleteSale)

module.exports = router