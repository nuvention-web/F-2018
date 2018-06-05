import express, { Router } from 'express';

import {createUser, logUser, getUserProfile, addUserProfile, getUserName, deleteProfileByUserName, writeCSV, getProfileByUsername, updateProfileByUserName, getAll} from './controllers/users';

//const path = require('path');

const router = Router();

  /*
router.get('/test', (req, res) => {
    res.send('hello world');
});*/


router.route('/users/create').post(createUser);

router.route('/users/login').post(logUser);

router.route('/users/profile').get(getUserProfile);

router.route('/users/getusername').get(getUserName);

router.route('/users/addprofile').post(addUserProfile);

router.route('/users/deleteprofile').post(deleteProfileByUserName);

router.route('/users/updateprofile').post(updateProfileByUserName);

router.route('/csv').get(writeCSV);

router.route('/users/all').get(getAll);

router.route('/users/:username').get(getProfileByUsername);

export default router;