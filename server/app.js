const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(8000, () => console.log("Server started"));
