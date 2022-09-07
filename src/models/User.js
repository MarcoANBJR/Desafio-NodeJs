import mongoose from 'mongoose';

const regexDate = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;

const userSchema = new mongoose.Schema(
    {
        id : {type: String} ,
        name :{type: String, required: true, validate: /^[A-zÀ-ú\s]+$/} ,
        cpf :{type: Number, required: true, validate: /^[0-9]+$/, maxlength: 11, minlength: 11} ,
        birthDate : {type: String, required: true, validate: regexDate} ,
        email :{type: String, required: true, validate: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/} ,
        password :{type: String, required: true, validate: /^[0-9A-Za-z]+$/, minlength: 6} ,
        address :{type: String, required: true, validate: /^[A-zÀ-ú\s]+$/} ,
        number :{type: String, required: true, validate:  /^[0-9A-Za-z]+$/} ,
        complement :{type: String, required: true, validate: /^[A-Za-z\s]+$/} ,
        city :{type: String, required: true, validate: /^[A-zÀ-ú\s]+$/} ,
        state :{type: String, required: true, validate: /^[A-zÀ-ú\s]+$/} ,
        country :{type: String, required: true, validate: /^[A-zÀ-ú\s]+$/} ,
        zipCode :{type: Number, required: true, validate: /^[0-9]+$/}
    }
);

const users = mongoose.model('users', userSchema);
export default users;