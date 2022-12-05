export const typeDefs = `#graphql
  type Tenant {
    id: String
    name: String
    website: String
    logoURL: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    tenants: [Tenant]!
  }
`;
