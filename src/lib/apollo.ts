import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qa9gxk3vat01z4134o8jhp/master',
    cache: new InMemoryCache()
})