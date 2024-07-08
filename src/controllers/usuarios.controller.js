import userModel from "../models/usuario.js"

export const getUsers = async (req, res) => {
  const response = await userModel.allUsers()
  res.json(response)
}

export const createUser = (req, res) => {
  res.send('create user');
}

export const putUser = (req, res) => {
  const response = userModel.putUser(req.params.id, req.body)
  if (response.affectedRows === 0)
    return res.status(404)
      .json({ message: 'No se pudo actualizar el usuario' })
  res.json({ message: 'Usuario actualizado' })
}

export const patchUser = async (req, res) => {
  const response = await userModel.patchUser(req.params.id, req.body)
  if (response.affectedRows === 0)
    return res.status(404)
      .json({ message: 'No se pudo actualizar el usuario' })
  res.json({ message: 'en proceso', response })
}

export const deleteUser = async (req, res) => {
  const response = await userModel.deleteUser(req.params.id)
  if (response.affectedRows === 0)
    return res.status(404)
      .json({ message: 'No se pudo eliminar al usuario' })
  res.json({ message: 'Usuario eliminado' })
}
