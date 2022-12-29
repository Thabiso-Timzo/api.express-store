
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    offerPrice:{
        type:String,
    },
    color:{
        type: String,
    },
    size:{
        type: String,
    },
    ratings:{
        type: Number,
        default: 0,
    },
    images:[{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    }],
    category:{
        type: String,
        required: true,
    },
    Stock:{
        type: Number,
        required: true,
    },
    numOfReviews:{
        type: Number,
        default: 0
      },
    reviews:[{
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        comment:{
            type:String,
        },
        time:{
            type: Date,
            default: Date.now()
        },
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    createAt:{
        type:Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;