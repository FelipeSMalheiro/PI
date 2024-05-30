import { Router } from 'express'
import FornecedorController from '../controller/fornecedor.controller.js'
import { createFornecedorValidator, updateFornecedorValidator, idFornecedorValidator} from '../validator/fornecedor.validator.js'

const router = Router()

router.get('/', FornecedorController.index)
router.post('/', createFornecedorValidator, FornecedorController.create)
router.get('/:id', idFornecedorValidator, FornecedorController.show)
router.put('/:id', updateFornecedorValidator, FornecedorController.update)
router.delete('/:id', idFornecedorValidator, FornecedorController.delete)

export default router