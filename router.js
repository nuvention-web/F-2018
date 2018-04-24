import express, { Router } from 'express';

import {createUser, logUser} from './controllers/users';

const path = require('path');

const router = Router();

  /*
router.get('/test', (req, res) => {
    res.send('hello world');
});*/


router.route('/users/create').post(createUser);

router.route('/users/login').post(logUser);

export default router;