import { KeyVaultResponse } from '_/models/SecretVault';
import fetcher from './fetcher';

const KEY_VAULT_SECRET_ENDPOINTS = {
  getAllSecretNames: '/',
  getValueByName: (keyVaultName: string, secretName: string) =>
    `/key-vaults/${keyVaultName}/secrets/${secretName}`,
};

export async function getAllSecretNames(): Promise<KeyVaultResponse | null> {
  try {
    return fetcher(KEY_VAULT_SECRET_ENDPOINTS.getAllSecretNames);
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function getSecret(
  keyVaultName: string,
  secretName: string
): Promise<any | null> {
  try {
    return fetcher(
      KEY_VAULT_SECRET_ENDPOINTS.getValueByName(keyVaultName, secretName)
    );
  } catch (ex) {
    console.log(ex);
    return null;
  }
}
