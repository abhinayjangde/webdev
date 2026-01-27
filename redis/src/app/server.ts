import express from "express";
import type { Express, Request, Response } from "express";


const startServer = async () => {
    const app: Express = express();
    app.use(express.json());
    app.get("/", (req: Request, res: Response) => {
        res.send("Server is running");
    });

    return app;
}

export { startServer }
