import { startServer } from "./app/index.js";



const initServer = async () => {
    const app = await startServer();
    const port = process.env.PORT ?? 4000;

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

initServer();