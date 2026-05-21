import express from 'express'

export default function publicRoutes(prisma) {
  const router = express.Router()

  router.post('/cadastro', async (req, res) => {
    try {
      const { email, name, password } = req.body

      if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' })
      }

      const user = await prisma.user.create({
        data: { email, name, password },
      })

      return res.status(201).json(user)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao cadastrar usuário.' })
    }
  })

  router.get('/usuarios', async (req, res) => {
    try {
      const users = await prisma.user.findMany()
      return res.json(users)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao buscar usuários.' })
    }
  })

  return router
}
