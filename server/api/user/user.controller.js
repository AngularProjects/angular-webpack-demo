'use strict';

import User from './user.model';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    return res.status(statusCode).json(err);
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function getAllUsers(req, res) {
  return User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}
