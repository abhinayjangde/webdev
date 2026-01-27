import { startServer } from "./app/server.js"
import Redis from "redis"

async function initServer() {
    const app = await startServer();
    const client = Redis.createClient({ url: "redis://redis:6379" });
    await client.connect();
    console.log("Connected to Redis");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

initServer();