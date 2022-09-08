import mongoose from 'mongoose';

const regexLetterNumber = /^[0-9A-Za-z]+$/;
const regexNumber = /^[0-9]+$/;
const regexAllLetter = /^[A-zÀ-ú\s]+$/;

function birthDate(birth) {
    let birthDate = new Date(birth);
    let today = new Date();
    let age = Math.floor((today-birthDate)/31536000000);
    return age>17;
}

function formatDate(date) {
    let fDate = new Date(date);
    return fDate.toLocaleDateString();
}

const userSchema = new mongoose.Schema(
    {
        id : {type: String} ,
        name :{type: String, required: true, validate: regexAllLetter} ,
        cpf :{type: String, required: true, validate: /^[0-9]+$/, minlength: 11, maxlength: 11} ,
        birthDate : {type: String, set:date => formatDate(date), required: true, validate: [birthDate, 'Menor de idade !']} ,
        email :{type: String, required: true, validate: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/} ,
        password :{type: String, required: true, validate: regexLetterNumber, minlength: 6} ,
        address :{type: String, required: true, validate: regexAllLetter} ,
        number :{type: String, required: true, validate:  regexLetterNumber} ,
        complement :{type: String, required: true, validate: regexAllLetter} ,
        city :{type: String, required: true, validate: regexAllLetter} ,
        state :{type: String, required: true, validate: regexAllLetter} ,
        country :{type: String, required: true, validate: regexAllLetter} ,
        zipCode :{type: Number, required: true, validate: regexNumber}
    }
);

const users = mongoose.model('users', userSchema);
export default users;