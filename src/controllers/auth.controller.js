import { User } from "../models/user.model.js"

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
      res.status(500).json({success: false, error: "debe completar todos los campos para poder registrarse"})
    }

      const newUser = await User.create({
        username,
        email,
        password
      })
  } catch (error) {
    res.status(400).json({success: false, error: error.message}
    )
  }
}

// const getUsers = async (req, res) => {
//   try {
//     const fetchedUsers = await User.find()
//     return res.status(201).json({success: true, data: fetchedUsers})
//   } catch (error) {
//     return res.status(500).json({success: false, error: error.message})
//   }
// }

// const createUser = async (req, res) => {
//   try {
//     const {username, email, password} = req.body
//     const newUser = await User.create({
//       username,
//       email,
//       password
//     })
//     return res.status(201).json({success: true, data: newUser})
//   } catch (error) {
//     return res.status(500).json({success: false, error: error.message})
//   }
// }

// const updateUser = async (req, res) => {
//   try {
//     const id = req.params.id
//     const updates = req.body
//     const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true })
//     return res.status(201).json({success: true, data: updatedUser})
//   } catch (error) {
//     return res.status(500).json({success: false, error: error.message})
//   }
// }

// const deleteUser = async (req, res) => {
//   try {
//     const id = req.params.id
//     const deletedUser = await User.findByIdAndDelete(id)
//     return res.status(201).json({success: true, data: deletedUser})
//   } catch (error) {
//     return res.status(500).json({success: false, error: error.message})
//   }
// }

// export {getUsers, createUser, updateUser, deleteUser}