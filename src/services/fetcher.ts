import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export type FetcherConfig = AxiosRequestConfig;

const fetcher = async <T>(url: string, options?: FetcherConfig): Promise<T> => {
  const { headers, ...axiosOptions } = options || {};

  const parsedOptions = {
    ...axiosOptions,
    headers: {
      ...(headers || {}),
    },
  };

  const currentInstance = instance;

  // eslint-disable-next-line no-useless-catch
  try {
    const res = await currentInstance(url, parsedOptions);
    return res?.data;
  } catch (error) {
    throw error;
  }
};

export { instance as axios };
export default fetcher;
