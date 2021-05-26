import fetcher from './fetcher';

const KEY_VAULT_ENDPOINTS = {
  getAll: '/key-vaults',
};

export async function getAll(): Promise<any | null> {
  try {
    return fetcher(KEY_VAULT_ENDPOINTS.getAll);
  } catch (ex) {
    console.log(ex);
    return null;
  }
}
