import axios from 'axios';
import { LOCALHOST } from '../config/constants';

export default axios.create({
  baseURL: LOCALHOST,
  timeout: 3000,
});