import {body,param} from 'express-validator'

export const createFornecedorValidator = [
    body('nome').isString().withMessage("Nome inválido"),
    body('telefone').isInt().withMessage("Número de telefone inválido"),
    body('email').isString().withMessage("email inválido"),
    body('quantidade').isInt().withMessage("Quantidade inválida"),
    body('produtoId').isInt().withMessage("produto inválido")
  ]
  
  export const updateFornecedorValidator = [
      param('id').isInt().withMessage("ID Inválido"),
      body('telefone').isFloat().withMessage("Número de telefone inválido"),
      body('email').isString().withMessage("email inválido"),
      body('quantidade').isInt().withMessage("Quantidade inválida"),
      body('produtoId').isInt().withMessage("produto inválido")  
  ]
  
  export const idFornecedorValidator = [
      param('id').isInt().withMessage("ID Inválido")
  ]