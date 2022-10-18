export type TransportedMessage = {
  encryptedPayload: ArrayBufferLike;
  transportKey: string;
  iv: ArrayBufferLike;
};
