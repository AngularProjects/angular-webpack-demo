'use strict';

import {Router} from 'express';
import * as controller from './user.controller';

const router = new Router();

router.get('/getAllUsers', controller.getAllUsers);

module.exports = router;
