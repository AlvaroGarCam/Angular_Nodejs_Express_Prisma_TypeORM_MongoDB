module.exports = (app) => {
     const { verifyJWT } = require('../middleware/verifyJWT');
     const verifyJWTOptional = require('../middleware/verifyJWTOptional');
     const comment = require('../controllers/comment.controller');

     //Coger todos los comentarios de un trabajo
     app.get('/:slug/comments', verifyJWTOptional, comment.getCommentsFromJob);

     //Añadir un comentario a un trabajo
     app.post('/:slug/comments', verifyJWT, comment.addCommentsToJob);

     //Borrar un comentario
     app.delete('/:slug/comments/:id', verifyJWT, comment.deleteComment);

     // Si hay tiempo haremos el update
     // app.put('/:slug/comments/:id', verifyJWT, comment.updateComment);
}