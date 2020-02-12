import axios from 'axios';
import { 
  LOCAL_HOST, 
  MAIN_HOST, 
  WAITING_TIME 
} from '@constants';

export const apiForLocal = axios.create({
  baseURL: LOCAL_HOST,
  timeout: WAITING_TIME,
});
  
export const apiForServer = axios.create({
  baseURL: MAIN_HOST,
  timeout: WAITING_TIME,
});