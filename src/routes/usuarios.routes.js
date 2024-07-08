import { Router } from "express"
import {
  deleteUser, getUsers,
  patchUser,
  putUser
} from "../controllers/usuarios.controller.js"

const router = Router()

router.get('/all', getUsers)
router.delete('/:id', deleteUser)
router.put('/:id', putUser)
router.patch('/:id', patchUser)

export default router