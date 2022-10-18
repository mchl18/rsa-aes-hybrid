# rsa-aes-hybrid
Implementation of a hybrid RSA-AES encryption

## Usage

```typescript
const service = new EncryptionService();

const rsaKey = service.generateRsaKey();
const messageToTransport = service.generateTransportMessage('Hello World',  service.publicKeyString(rsaKey));

// transfer the message...

const transportedMessage = service.parseTransportMessage(
  messageToTransport
);

const decryptedPayload = await service.decryptTransportMessage(
  transportedMessage,
  rsaKey
);
```
