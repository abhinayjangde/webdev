import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "OK" });
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
