import { createServer } from 'http';
import { routes } from '../routes/routes';

export const server = createServer(routes );
