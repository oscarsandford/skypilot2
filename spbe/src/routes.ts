import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Middleware entry ', Date.now());
    next();
});

router.get('/hehe', (req: Request, res: Response) => {
    res.send('hehe!');
});

router.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../spfe/build/index.html'));
});

export default router;