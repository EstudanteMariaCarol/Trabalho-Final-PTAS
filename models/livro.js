'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  livro.init({
    autorId: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    editora: DataTypes.STRING,
    data - publicação: DataTypes.DATE,
    preco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'livro',
  });
  return livro;
};