import express from 'express';
import loginRouter from './login'

const router = express.Router();

loginRouter(router);

router.get('/', (req, res) => {
    res.send("Hello World!")
})

export default router;
