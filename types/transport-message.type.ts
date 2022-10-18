export type TransportMessage = {
  encryptedPayload: string;
  transportKey: string;
  iv: string;
};
