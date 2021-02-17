const express = require('express')
const router = express.Router()
const { getSale, getSales, createSale, updateSale, deleteSale }  = require('./actions')
// GET by ID

router.get('/:id', getSale)

// GET all
router.get('/', getSales)

// POST Create

router.post('/', createSale)

// PUT Update info

router.put('/:id', updateSale)

// DELETE by ID

router.delete('/:id', deleteSale)

module.exports = router