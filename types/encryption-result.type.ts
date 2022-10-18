import { CryptStatus } from './crypto-status.enum';

export type EncyrptionResult = {
  cipher: string;
  status: CryptStatus;
};
