import db from "../db.js"

const allUsers = async () => {
  const [usuarios] = await db.execute('SELECT * FROM usuarios')
  return usuarios
}

const putUser = async (id, { rolId, nombres, apellidos, fechaNacimiento }) => {
  const query = 'UPDATE usuarios SET nombres = ?, apellidos = ?, fecha_nacimiento = ?, rol_id = ? WHERE usuario_id = ?'
  const [result] = await db.execute(query, [nombres, apellidos, fechaNacimiento, rolId, id])
  return result
}

const patchUser = async (id, body) => {
  const queryParams = Object.keys(body)
    .map(key => `${key} = ?`).join(', ')
  const values = [...Object.values(body), id]
  const query = `UPDATE usuarios SET ${queryParams} WHERE usuario_id = ?`
  const response = await db.execute(query, values)
  return response
}

const deleteUser = async (id) => {
  const query = 'DELETE FROM usuarios WHERE usuario_id = ?'
  const [result] = await db.execute(query, [id])
  return result
}

export default { allUsers, deleteUser, putUser, patchUser }