"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const user= require("../controllers/user")
const permissons=require("../middlewares/permissions")

router.route("/")
.get(permissons.isAdmin,user.list)
.post(user.create)


router.route("/:id")
.get(permissons.isLogin,user.read)
.put(permissons.isLogin,user.update)
.patch(permissons.isLogin,user.update)
.delete(permissons.isAdmin,user.delete)
/* ------------------------------------------------------- */
module.exports = router