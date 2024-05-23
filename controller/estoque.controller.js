import Estoque from '../models/estoque.model.js'
import { validationResult } from 'express-validator'

export default class EstoqueController {
    static async index(req, res) {
      const estoques = await Estoque.findMany({
            include: {
              produto: {
                select: {
                  nome: true
                }
              }
            }
          })
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
        res.json(estoque)
      }
}