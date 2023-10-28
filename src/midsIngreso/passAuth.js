import passport from "passport";

export const passportCall = (strategy) => {
  return async (req, res, next) => {
    req.logger.info('Inicio de la autenticación');
    
    passport.authenticate(strategy, function (error, user, info) {
      console.log('Autenticación en proceso');
      
      if (error) {
        return next(error);
      }

      if (!user) {
        req.logger.warn('Autenticación fallida');
        return res.status(401).send({ error: info.messages ? info.messages : info.toString() });
      }

      req.user = user;
      req.logger.info('Autenticación exitosa');
      next();
    })(req, res, next);
  };
};

export const authorization = (roles) => {
return async (req, res, next) => {
  if (!req.user) {
    req.logger.warn('User is not authenticated'); 
    return res
      .status(401)
      .send({ status: "error", message: "Unauthorizated" });
  }

  if (!roles.includes(req.user.role)) {
    req.logger.warn('User does not have the required role'); 
    return res
      .status(403)
      .send({ status: "error", message: "No permissions" });
  }

  next();
};
};


