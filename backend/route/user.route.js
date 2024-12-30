import {Router} from 'express'
import {postdata} from '../controllers/user.controller.js'

const userRouter=Router()

userRouter.post("/postdata",postdata)

export default userRouter