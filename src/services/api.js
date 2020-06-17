import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { mutations } from './resolvers';

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    resolvers: {
        Mutation: mutations,
    },
});

const initialState = {
    carts: []
};
client.writeData({ data: initialState });

export default client;