const mongoose = require('mongoose');

// Definir el esquema de la blacklist
const blacklistSchema = new mongoose.Schema(
     {
          token: {
               type: String,
               required: true,
               unique: true, // Evitar tokens duplicados en la blacklist
          },
          userId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'User', // Referencia al modelo de usuario
               required: true,
          },
     },
     {
          collection: 'Blacklist'
     },
     {
          timestamps: true, // Añadir campos createdAt y updatedAt automáticamente
     }
);

// Crear el modelo
const Blacklist = mongoose.model('Blacklist', blacklistSchema);

module.exports = Blacklist;