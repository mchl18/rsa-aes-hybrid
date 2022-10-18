import { CryptStatus } from "./crypto-status.enum";

export type DecryptionResult = {
  plaintext: string;
  status: CryptStatus;
  signature: string;
};
