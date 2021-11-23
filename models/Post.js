const Sequelize = require('sequelize');
const db = require('./db');

const Postagem = db.define('postagem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  conteudo: {
    type: Sequelize.TEXT,
  }
})

module.exports = Postagem;
