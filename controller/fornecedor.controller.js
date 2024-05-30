import Fornecedor from '../models/fornecedor.model.js'
import { validationResult } from 'express-validator'

export default class FornecedorController {
    static async index(req, res) {
      const fornecedores = await Fornecedor.findMany()
        res.json(fornecedores)
    }

    static async create(req, res) {
      const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const fornecedor = await Fornecedor.create({
          data: req.body
        })
        console.log(fornecedor)
        res.json(fornecedor)
      }

      static async show(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const fornecedor = await Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!fornecedor) {
            return res.status(404).json({ message: 'Fornecedor não encontrado' })
        }
        res.json(fornecedor)
    }
    
    static async update(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const fornecedor = await Fornecedor.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!fornecedor) {
            return res.status(404).json({ message: 'Fornecedor não encontrado' })
        }
        const updatedFornecedor = await Fornecedor.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedFornecedor)
    }

    static async delete(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const fornecedor = await Fornecedor.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!fornecedor) {
          return res.status(404).json({ message: 'Fornecedor não encontrado' })
        }
        await Fornecedor.delete({
          where: {
            id: parseInt(req.params.id)
          }
        })
        res.json({ message: 'Fornecedor deletado com sucesso' })
      }
}



