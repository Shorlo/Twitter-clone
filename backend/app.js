require('dotenv').config();
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const fs = require('fs');

//const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');




const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setting up cors
const corsOptions =
{
    origin:"*",
    methods: "GET,HEAD, PUT, PATCH, POST, DELETE",
    credential: true,
    exposeHeaders: ["X-auth-token"],
};
/*
app.listen(port, () =>
{
    console.log(`Server running at ${port}`);
});
*/
app.use(cors(corsOptions));

// Using graphql
const typeDefs = gql(fs.readFileSync("./schema.graphql", {encoding: "utf-8"}));
const resolvers = require("./resolvers");
const apolloServer = new ApolloServer({typeDefs, resolvers});
const { url } = await startStandaloneServer(apolloServer,
    {
        listen: {port: 3001},
    });
    console.log(`Server ready at ${url}`);


/*
    Deprecated
apolloServer.applyMiddleware({app, path: "/graphql"});
*/


/*ApolloServer v3 es deprecated, trying to migrate to v4*/