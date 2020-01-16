const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = graphql;

const list = [
  { id: "1", name: "daniel", age: 123 },
  { id: "2", name: "kao", age: 123 },
  { id: "3", name: "ji", age: 123 }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return list;
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
