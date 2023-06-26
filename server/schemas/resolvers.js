const { AuthenticationError } = require('apollo-server-express');

const  User  = require('../models/User');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
async oneUser(parent,{email},context){
    const user = await User.findOne({_id:context.user._id})
    return user
}
    },
    Mutation: {
        async login(parent, { email, password }) {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('no user found with this email')
            };
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');

            }
            const token = signToken(user);
            return { token, user }
        },
        async addUser(parent, { email, password,username }) {
            const user = await User.create({
                email: email,
                password: password,
                username:username
            });
            const token = signToken(user);
            return { token, user }
        },
       

    },
}
module.exports = resolvers