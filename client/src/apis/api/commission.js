import { instance } from 'apis/utils';

export const getCommission = async id => {
  try {
    const res = await instance.get(`/commission/${id}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
