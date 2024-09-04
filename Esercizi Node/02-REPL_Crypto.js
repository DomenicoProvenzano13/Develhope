import { randomBytes } from 'node:crypto';

const randomId = randomBytes(8).toString('hex');

console.log(randomId); 