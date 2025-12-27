import type { Express } from "express"
import express from "express";
import cors from "cors";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { prisma } from "../lib/db.js";

const client = new S3Client(
    {
        region: process.env.AWS_DEFAULT_REGION as string,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
        }
    }
)
export const startServer = async () => {
    const app: Express = express();

    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        res.send("Hello, World!");
    });

    app.get("/api/presigned-url", async (req, res) => {
        // Logic to generate presigned URL goes here
        const { imageName, imageType } = req.query;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME as string,
            Key: `uploads/posts/${imageName}-${Date.now().toLocaleString()}.${(imageType as string)?.split("/")[1]}`,
            ContentType: imageType as string
        })

        const signedURL = await getSignedUrl(client, command, {
            expiresIn: 3600
        })
        res.status(200).json({ presignedURL: signedURL });
    });

    app.post("/api/create-post", async (req, res) => {

        const { content, imageURL } = req.body;

        try {
            await prisma.post.create({
                data: {
                    content: content,
                    imageURL: imageURL
                }
            })
        } catch (error) {
            console.error("Error creating post:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
        res.status(201).json({ message: "Post created successfully!" });

    })
    return app;
}