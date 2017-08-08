module.exports = function(sequelize, DataTypes) {
  var Gallery = sequelize.define("Gallery", {
    title: DataTypes.STRING,
    url: DataTypes.STRING
  });

  Gallery.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Gallery.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Gallery;
};