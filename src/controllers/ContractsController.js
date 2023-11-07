const contracts = require("../models/Contracts")
const { v4: uuidv4 } = require("uuid")

const ContractsController = {
  async index(req, res) {},
  async show(req, res) {
    const contracts = contracts.findAll()
    return res.status(200).json(contracts)
  },
  async create(req, res) {
    const { number_Contracts } = req.body

    const newContracts = await contracts.create({
      id: uuidv4(),
      number_Contracts,
    })
    return res.status(201).json(newContracts)
  },
  async update(req, res) {},
  async delete(req, res) {},
}

module.exports = ContractsController
