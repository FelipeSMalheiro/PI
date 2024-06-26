import Estoque from '../models/estoque.model.js'
import { validationResult } from 'express-validator'

export default class EstoqueController {
    static async index(req, res) {
      const estoques = await Estoque.findMany()
        res.json(estoques)
    }

    static async create(req, res) {
      const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const estoque = await Estoque.create({
          data: req.body
        })
        console.log(estoque)
        res.json(estoque)
      }

      static async show(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const estoque = await Estoque.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!estoque) {
            return res.status(404).json({ message: 'Estoque não encontrado' })
        }
        res.json(estoque)
    }
    
    static async update(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const estoque = await Estoque.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!estoque) {
            return res.status(404).json({ message: 'Estoque não encontrado' })
        }
        const updatedEstoque = await Estoque.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.json(updatedEstoque)
    }

    static async delete(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const estoque = await Estoque.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!estoque) {
          return res.status(404).json({ message: 'Estoque não encontrado' })
        }
        await Estoque.delete({
          where: {
            id: parseInt(req.params.id)
          }
        })
        res.json({ message: 'Estoque deletado com sucesso' })
      }
}



