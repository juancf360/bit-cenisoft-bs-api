const Sale = require('./model')

const createSale = (req, res) => {
    const newSale = new Sale(req.body)
    newSale.save((error, saleSaved) => {
        if (error) {
            console.error('Error saving sale ', error)
            res.status(500).send(error)
        } else {
            res.send(saleSaved)
        }
    })
}

const getSale = (req, res) => {
    Sale.findById(req.params.id, (error, sale) => {
        if (error) {
            res.status(500).send(error)
        } else if (sale) {
            res.send(sale)
        } else {
            res.status(404).send({})
        }
    })
}

const getSales = (req, res) => {
    let query = req.query
    if (req.query.idClient) {
      query = { idClient: new RegExp(`.*${req.query.idClient}.*`, 'i') }
    }
  
    Sale.find(query, (error, sales) => {
      if (error) {
        res.status(404).send(error)
      } else {
        res.send(sales)
      }
    })
  }




const updateSale = (req, res) => {
    Sale.updateOne({ _id: req.params.id }, req.body, (error, result) => {
        if (error) {
            res.status(422).send(error)
        } else {
            res.send(result)
        }
    })
}


const deleteSale = (req, res) => {
    Sale.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.send(result)
        }
    })
}



module.exports = { createSale, getSale, getSales, updateSale, deleteSale }