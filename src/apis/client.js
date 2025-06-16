import fetch from 'node-fetch';
import {
  ClientBuilder
} from '@commercetools/ts-client';
import {
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { credentials } from '../utils/clientCredentials.js';

const projectKey = credentials.projectKey;
const scopes = [credentials.scopes];

// Configure authMiddlewareOptions
const authMiddlewareOptions = {
  host: credentials.authUrl,
  projectKey: projectKey,
  credentials: {
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
  },
  scopes,
  httpClient: fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions = {
  host: credentials.apiUrl,
  httpClient: fetch,
};

// Export the ClientBuilder
const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({ projectKey: credentials.projectKey });