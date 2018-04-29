/**
 * Arquivo: todo.js
 * Author: Oliveira Wesley
 * Description: Arquivo onde trataremos o modelo do projeto.
 * Definição dos esquemas para serem utilizadas na Base de Dados (MongoDb)
 * Data: 29 de Abril de 2018
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    description: String,
    done: {type: Boolean, default: false},
    createdAd: {type:Date, default:Date.now}
});

module.exports = mongoose.model('Todo', TodoSchema);
