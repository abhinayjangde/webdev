import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { redis } from './lib/redis.js';

async function startServer() {
    const app = express();
    const PORT = 4000;
    app.use(cors());
    app.use(express.json());

    const server = new ApolloServer({
        typeDefs: `
            type User {
                id: ID
                name: String
                username: String
                email: String
            }

            type Todo {
                id: ID!
                title: String!
                completed: Boolean!
                user: User
            }

            type Query {
                getTodos: [Todo]
                getSingleTodo(id: ID!): Todo
                getUsers: [User]
            }
        `,
        resolvers: {

            Todo: {
                user: async (todo) => {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${todo.id}`);
                    const data = await res.json();
                    return data;
                }
            },

            Query: {
                getTodos: async () => {

                    const cachedTodos = await redis.get("todos");
                    if (cachedTodos) {
                        return JSON.parse(cachedTodos);
                    }

                    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                    const data = await res.json();
                    await redis.set("todos", JSON.stringify(data));
                    await redis.expire("todos", 20); // Cache for 60 seconds
                    return data;
                },
                getSingleTodo: async (_, { id }) => {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                    const data = await res.json();
                    return data;
                },
                getUsers: async () => {
                    const res = await fetch("https://jsonplaceholder.typicode.com/users");
                    const data = await res.json();
                    return data;
                }
            }
        },
    })


    await server.start();

    app.use('/graphql', expressMiddleware(server));

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();