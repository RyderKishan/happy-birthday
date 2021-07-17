import { useQuery, useMutation } from 'react-query';
import { get, post } from '../../api';
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
      }
    }
  );

export const useCallHook = () =>
  useMutation(
    async () => {
      const {
        appName = `Can't get appName`,
        appCodeName = `Can't get appCodeName`,
        appVersion = `Can't get appVersion`,
        cookieEnabled = `Can't get cookieEnabled`,
        deviceMemory = `Can't get deviceMemory`,
        hardwareConcurrency = `Can't get hardwareConcurrency`,
        language = `Can't get language`,
        platform = `Can't get platform`,
        userAgent = `Can't get userAgent`,
        vendor = `Can't get vendor`
      } = navigator || {};
      const { location } = document;
      const { href = `Can't get href` } = location;
      const response = await post(
        'https://webhook.site/9865ba9c-4b3d-4e22-8a7a-1f08871b0aba',
        {
          appName,
          appCodeName,
          appVersion,
          cookieEnabled,
          deviceMemory,
          hardwareConcurrency,
          language,
          platform,
          userAgent,
          vendor,
          href
        }
      );
      return response;
    },
    {
      onSuccess: (response) => {
        console.log('response', response);
      }
    }
  );
