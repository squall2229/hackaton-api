const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const {secret} = require("../config")

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }

  return jwt.sign(payload, secret, {
    expiresIn: "24h"
  })
}

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Ошибка при регистрации", errors })
      }

      const { username, password } = req.body
      const candidate = await User.findOne({ username })

      if (candidate) {
        return res.status(400).json({ message: "пользователь с таким именем уже существует" })
      }

      const hashPassword = bcrypt.hashSync(password, 7)
      const user = new User({ username, password: hashPassword })
      await user.save()
      return res.json({ message: "Пользователь успешно зарегистрирован" })

    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Registration error" })
    }
  }

  async login(req, res) {
    try {
      const {username, password} = req.body;
      const user = await User.findOne({ username })

      if (!user) {
        return res.json(400).json({ message: `Пользователь ${username} не найден` })
      }

      const validPassword = bcrypt.compareSync(password, user.password)

      if (!validPassword) {
        return res.json(400).json({ message: `Неверный пароль` })
      }

      const token = generateAccessToken(user._id, user.roles)
      
      return res.json({token})

    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

module.exports = new AuthController()