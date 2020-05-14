import express from 'express';
import loginRouter from './login';
import groupsRouter from './groups';

const router = express.Router();

loginRouter(router);
groupsRouter(router);

router.get('/', (req, res) => {
    res.send("Hello World!")
})

export default router;
