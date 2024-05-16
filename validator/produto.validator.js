import { body, param } from 'express-validator'

export const produtoValidator = [
  body('nome').isString().withMessage("nome inválido"),
  body('lote').isString().withMessage("lote inválido"),
  body('validade').isString().withMessage("validade inválido"),
]

export const produtoUpdateValidator = [
  param('id').isInt().withMessage("ID obrigatório"),
  body('nome').isString().withMessage("nome inválido"),
  body('lote').isString().withMessage("lote inválido"),
  body('validade').isString().withMessage("validade inválido"),
]

export const produtoIdValidator = [
  param('id').isInt().withMessage("ID obrigatório"),
]