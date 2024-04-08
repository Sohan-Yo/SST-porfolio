import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static("public"));

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});