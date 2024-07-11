import axios from 'axios';
import { API_BASE_URL } from './config';

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/referrals`, referralData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
