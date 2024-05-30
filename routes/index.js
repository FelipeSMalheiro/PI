import { Router } from 'express'
import ProdutoRoute from './produto.route.js'
import EstoqueRoute from './estoque.route.js'
import FornecedorRoute from './fornecedor.route.js'

const router = Router()

router.use('/produtos', ProdutoRoute)
router.use('/estoques', EstoqueRoute)
router.use('/fornecedores', FornecedorRoute)

export default router