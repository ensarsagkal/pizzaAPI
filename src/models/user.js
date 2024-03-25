"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const passwordEncrypyt=require("../helpers/passwordEncrypt")

const UserSchema= new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            trim: true,
            required: true,
           
          },
          email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            validate: (email) => email.includes("@") && email.includes("."),
          },
          isActive: {
            type: Boolean,
            default: true,
          },
          isAdmin: {
            type: Boolean,
            default: false,
          },
    },
    {
        collection:"users",
        timestamps:true
    })
    module.exports= mongoose.model("User",UserSchema)