"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'lnokmotm', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: 'skSHiancIjTQQSJZkza10oQitrAzH6sZNOE69TFshVMf9Qb9sXzrmwM7JQS0VmMNrxakb085ctIXmSoaFnKm9treCgLRTCibLp9ugwf2qNvZxTxYnK0eEGbUbW8H9C6ssMJkiaHADpxhPxsB9LQmmChN3QnXeLKbKeuRnYD2xUpfKDdZF9jm',
});
