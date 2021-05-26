export interface Properties {
    createdOn: Date;
    updatedOn: Date;
    value?: string;
    id: string;
    contentType: string;
    tags?: any;
    vaultUrl: string;
    name: string;
    version: string;
    enabled: boolean;
    recoverableDays: number;
    recoveryLevel: string;
    vault?: KeyVault
}
