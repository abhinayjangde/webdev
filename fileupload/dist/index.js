import express from 'express';
import { upload } from './lib/multer.js';
import { prisma } from "./lib/prisma.js";
async function startServer() {
    const port = process.env.PORT ?? 9000;
    const app = express();
    app.get("/", (req, res) => {
        res.json({ status: "ok" });
    });
    app.post("/api/products", upload.single("file"), async (req, res) => {
        const { name, price } = req.body;
        await prisma.product.create({
            data: {
                name,
                price,
                image: req.file?.filename
            }
        });
        res.status(201).json({ msg: "image uploaded." });
    });
    app.get("/api/products", async (req, res) => {
        const products = await prisma.product.findMany();
        res.json(products);
    });
    app.listen(port, () => {
        console.log(`server is running at http://localhost:${port}`);
    });
}
startServer();
//# sourceMappingURL=index.js.map