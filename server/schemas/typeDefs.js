const {gql}=require("apollo-server-express");

const typeDefs= gql`
    type User{
        _id:ID!
        username:String!
        email:String!
        bookCount:Int
        savedBooks:[Book]
    }
    
    type Book{
        bookId:ID!
        authors:[String]
        image:String
        link:String
        title:String!
        description:String
    }
    
    input BookInput{
        bookId: String!
        authors: [String]
        title: String!
        description: String
        image : String
        link: String
    }
    
    type Auth{
        token: ID!
        user:User
    }
    
    type Query{
        me:User
    }
    
    type Mutation{
        addUser(username:String!, email:String!, password:String!):Auth
        login(email:String!, password:String!):Auth
        saveBook(book:BookInput):User
        removeBook(bookId:String!):User
    }`;

    module.exports=typeDefs;