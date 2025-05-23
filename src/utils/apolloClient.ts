import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://commissions.api.cj.com/query',
    headers: {
      //Authorization: `Bearer ${process.env.REACT_APP_CJ_API_KEY || ''}`,
      Authorization: `Bearer ${import.meta.env.VITE_CJ_PERSONAL_TOKEN || ''} `,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
