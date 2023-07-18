const { getLivros, getLivro, postLivro } = require("../controladores/livro")
const {Router} = require('express')

const router = Router()

router.get('/', getLivros)
router.get('/:id', getLivro )

router.patch('/',( req,res )=>{
    res.send('requisicao editar')
})
router.post('/', postLivro)

router.delete('/',( req,res )=>{
    res.send('requisicao delete')
})


module.exports = router
