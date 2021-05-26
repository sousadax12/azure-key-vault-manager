import fetcher from './fetcher';

const KEY_VAULT_ENDPOINTS = {
  getAll: '/key-vaults',
  getByName: (name: string) => `/key-vaults/${name}`,
};

export async function getAll(): Promise<any | null> {
  try {
    return fetcher(KEY_VAULT_ENDPOINTS.getAll);
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function getByName(keyVaultName: string): Promise<any | null> {
  try {
    return fetcher(KEY_VAULT_ENDPOINTS.getByName(keyVaultName));
  } catch (ex) {
    console.log(ex);
    return null;
  }
}
