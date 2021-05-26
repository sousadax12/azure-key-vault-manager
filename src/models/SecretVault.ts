import { Properties } from '_models/Properties';

type KeyVault = Record<string, Properties>
export type KeyVaultResponse = Record<string, KeyVault>;
