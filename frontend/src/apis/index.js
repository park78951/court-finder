import axios from 'axios';
import { DEVLOPMENT_HOST, PRODUCTION_HOST } from '../config/constants';

const apiURL = process.env.NODE_ENV === 'development' 
  ? DEVLOPMENT_HOST 
  : PRODUCTION_HOST;

export default axios.create({
  baseURL: apiURL,
  timeout: 3000,
});