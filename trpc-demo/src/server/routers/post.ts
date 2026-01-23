import {z} from "zod";

import {router,publicProcedure} from "@/server/trpc"

export const postRouter = router({
    hello: publicProcedure.query(()=>{
        return "Hello from tRPC"
    }),

    addPost: publicProcedure.input(
        z.object({
            title: z.string()
        })
    ).mutation(({input})=>{
        return {
            id: Date.now(),
            title: input.title
        }
    })
})