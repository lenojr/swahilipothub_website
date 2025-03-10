import { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/node';

Sentry.init({ dsn: process.env.SENTRY_DSN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Your API logic here
        res.status(200).json({ message: 'Hello from Sentry example API!' });
    } catch (error) {
        Sentry.captureException(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}