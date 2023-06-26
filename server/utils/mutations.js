import {gql} from '@apollo/clinet'

export const LOGIN_USER = gql`

mutation login($email:String!,$password:String!){
    login(email:$email,passwod:$passwod){
        token
        user{
            _id
        }
    }
}
`


export const ADD_USER = gql`
mutation addUser($email:String!,$password:String!,$username:String!){
    addUser(email:$email,passwod:$passwod,username:$username){
        token
        user{
            _id
        }
    }
}
`



