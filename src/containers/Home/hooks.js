import { useQuery, useMutation } from 'react-query';
import queryString from 'query-string';
import { get } from '../../api';

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useTime = () =>
  useQuery(
    'time',
    async () => {
      const response = await get(
        'https://neave-birthday.netlify.app/.netlify/functions/api'
      );
      return (response && response.states) || [];
    },
    {
      onError: () => {},
    }
  );

export const useDistricts = (stateId, setSnack) =>
  useQuery(
    ['districts', stateId],
    async () => {
      if (!stateId) return [];
      const url = queryString.stringifyUrl(
        {
          url: `${process.env.REACT_APP_API_HOST}/cowin/districts`,
          query: {
            state: stateId,
          },
        },
        {
          arrayFormat: 'bracket-separator',
          skipEmptyString: true,
          skipNull: true,
        }
      );
      const response = await get(url);
      return (response && response.districts) || [];
    },
    {
      onError: () => {
        if (setSnack)
          setSnack({
            severity: 'error',
            message: 'Failed to fetch districts',
          });
      },
      enabled: Boolean(stateId),
    }
  );
