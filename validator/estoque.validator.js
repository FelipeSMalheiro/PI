import { body, param } from 'express-validator'

export const createEstoqueValidator = [
  body('nome').isString().withMessage("Nome inválido"),
  body('quantidade').isInt().withMessage("Quantidade inválida"),
  body('categoria').isString().withMessage("Categoria inválida"),
  body('produtoId').isInt().withMessage("produto inválido")
]

export const updateEstoqueValidator = [
    param('id').isInt().withMessage("ID Inválido"),
    body('quantidade').isInt().withMessage("Quantidade inválida"),
    body('categoria').isString().withMessage("Categoria inválida"),
    body('produtoId').isInt().withMessage("produto inválido")  
]

export const idEstoqueValidator = [
    param('id').isInt().withMessage("ID Inválido")
]