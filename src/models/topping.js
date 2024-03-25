// Topping Model:

const ToppingSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:true,
    }
},{
    collection:'toppings',
    timestamps:true
})
module.exports = mongoose.model("Topping",ToppingSchema)