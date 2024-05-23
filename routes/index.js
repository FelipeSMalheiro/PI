import { Router } from 'express'
import ProdutoRoute from './produto.route.js'
import EstoqueRoute from './estoque.route.js'

const router = Router()

router.use('/produtos', ProdutoRoute)
router.use('/estoques', EstoqueRoute)

export default router