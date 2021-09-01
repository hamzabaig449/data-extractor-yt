const validator = require("validator");

exports.sanitizeData = (data)=>{
    for (const key in data) {
        data[key] = validator.trim(data[key]);
        data[key] = validator.escape(data[key]);
    }
}