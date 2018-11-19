'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
  	user_id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		autoIncrement: true
  	}
    username: DataTypes.TEXT
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};