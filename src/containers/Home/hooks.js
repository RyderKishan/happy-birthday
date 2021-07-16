import { useQuery } from 'react-query';
import { get } from '../../api';
import { API_HOST } from '../../constants';

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useTimeOffset = () =>
  useQuery(
    'timeOffset',
    async () => {
      const response = await get(`${API_HOST}/api`);
      const { timestamp } = response || {};
      if (!timestamp) throw Error();
      const offset = new Date().valueOf() - new Date(timestamp).valueOf();
      return offset || 0;
    },
    {
      onError: (err) => {
        console.log('Error', err);
      },
    }
  );
