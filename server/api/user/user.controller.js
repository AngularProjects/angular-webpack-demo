'use strict';

import User from './user.model';

function handleError(res, statusCode) {
  // eslint-disable-next-line no-param-reassign
  statusCode = statusCode || 500;
  return (err) => {
    return res.status(statusCode).send(err);
  };
}

export function getAllUsers(req, res) {
  return User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}
