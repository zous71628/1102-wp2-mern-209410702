import express from 'express';
const router = express.Router();
import {
  register_02,
  login_02,
  updateUser_02,
} from '../controller/authorController_02.js';

router.route('/register_02').post(register_02);
router.route('/login_02').post(login_02);
router.route('/updateuser_02').post(updateUser_02);
export default router;