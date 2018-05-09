/**
 * Arquivo: todo.js
 * Author: Oliveira Wesley
 * Description: Arquivo onde trataremos o modelo do projeto.
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 * Data: 09 de Maio de 2018
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    description: {type:String, required:false},
    done: {type: Boolean, default: false},
    createdAd: {type:Date, default:Date.now},
    address: {type:String, required:false}
});

module.exports = mongoose.model('Todo', TodoSchema);
