import { Router } from 'express'
import EstoqueController from '../controller/estoque.controller.js'
import { createEstoqueValidator, updateEstoqueValidator, idEstoqueValidator} from '../validator/estoque.validator.js'

const router = Router()

router.get('/', EstoqueController.index)
router.post('/', createEstoqueValidator, EstoqueController.create)
router.get('/:id', idEstoqueValidator, EstoqueController.show)
router.put('/:id', updateEstoqueValidator, EstoqueController.update)
router.delete('/:id', idEstoqueValidator, EstoqueController.delete)

export default router