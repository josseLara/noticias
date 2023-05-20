import jwt from 'jsonwebtoken'

function createToken(req, res, next) {
  const user = req.body;
  
  const token = jwt.sign(user, process.env.SECRET_KEY,{expiresIn:'5m'});
 
  if (req.headers.authorization) {
    // Eliminar el token anterior si existe
    const [, oldToken] = req.headers.authorization.split(' ');
    jwt.verify(oldToken, process.env.SECRET_KEY, (err, decoded) => {
      if (!err) {
        // Si el token anterior es válido, lo eliminamos
        req.user.deleteToken(oldToken, (err, user) => {
          if (err) {
            console.error(err);
          }
        });
      }
    });
  }
  req.user = user;
  req.token = token;
  
  next();
}

export default createToken;