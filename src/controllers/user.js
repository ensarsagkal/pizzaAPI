"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const User= require("../models/user")
module.exports={
    
    list:async(req,res)=>{
        /*
        #swagger.tags = ["Personnels"]
        #swagger.summary = "List Personnels"
        #swagger.description = `
            You can send query with endpoint for search[], sort[], page and limit.
            <ul> Examples:
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */
        const data= await res.getModelList(User)
        res.status(200).send({
            error:false,
            detail: await res.getModelListDetails(User),
            data,
        })
    },

    create:async(req,res)=>{},

    read:async(req,res)=>{},

    update:async(req,res)=>{},

    delete:async(req,res)=>{},
}