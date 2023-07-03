const {Schema,model} = require('mongoose')
const bcrypt = require('bcrypt')

const JsaPages = require('./JsaPages')

const JsaFiles = new Schema(


    {
        siteID:{
            type:String,
        },
        pages:[JsaPages]
    }
)




const JSA = model('JSA', JsaFiles);

module.exports = JSA;