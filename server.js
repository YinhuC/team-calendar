import express from "express"
import path from 'path';
import apiRouter from "./server/api"

const app = express();
const port = process.env.PORT || 10000;

app.use("/api", apiRouter)

if (process.env.NODE_ENV === 'production') {
    console.log("Running in production!");
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, ()=>{console.log(`Listening on port ${port}!`)})