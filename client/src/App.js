import BookList from "./components/BookList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Ninja Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
