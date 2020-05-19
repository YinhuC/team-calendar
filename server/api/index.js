import express from 'express';
import loginRouter from './login';
import groupsRouter from './groups';
import calendarsRouter from './calendars';

const router = express.Router();

loginRouter(router);
groupsRouter(router);
calendarsRouter(router);

router.get('/', (req, res) => {
    res.send("Hello World!")
})

export default router;
