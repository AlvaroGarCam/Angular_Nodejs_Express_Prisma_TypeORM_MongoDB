const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');
const argon2 = require('argon2');



// @desc registration for a user
// @route POST /api/users
// @access Public
// @required fields {email, username, password}
// @return User
const registerUser = asyncHandler(async (req, res) => {
     const { username, email, password } = req.body;

     // Confirm data
     if (!username || !email || !password) {
          return res.status(400).json({ message: "All fields are required" });
     }

     // Verificar si el email ya está en uso
     const existingEmail = await User.findOne({ email });
     if (existingEmail) {
          return res.status(422).json("The email is already taken");
     }

     // Verificar si el username ya está en uso
     const existingUsername = await User.findOne({ username });
     if (existingUsername) {
          return res.status(422).json("The username is already taken");
     }

     // Hash password
     const hashedPwd = await argon2.hash(password);

     const userObject = {
          "username": username,
          "password": hashedPwd,
          "email": email
     };

     const createdUser = await User.create(userObject);

     if (createdUser) { // User object created successfully
          res.status(201).json({
               user: createdUser.toUserResponse()
          });
     } else {
          res.status(422).json({
               errors: {
                    body: "Unable to register a user"
               }
          });
     }
});


// @desc get currently logged-in user
// @route GET /api/user
// @access Private
// @return User
const getCurrentUser = asyncHandler(async (req, res) => {
     // After authentication; email and hashed password was stored in req
     const email = req.userEmail;
     console.log("Email from token:", email);

     const user = await User.findOne({ email }).exec();
     console.log("User found:", user);

     if (!user) {
          return res.status(404).json({ message: "User Not Found" });
     }

     res.status(200).json({
          user: user.toUserResponse()
     });
});

// @desc login for a user
// @route POST /api/users/login
// @access Public
// @required fields {email, password}
// @return User
const userLogin = asyncHandler(async (req, res) => {
     const { user } = req.body;

     // confirm data
     if (!user || !user.email || !user.password) {
          return res.status(400).json({ message: "All fields are required" });
     }

     const loginUser = await User.findOne({ email: user.email }).exec();

     // console.log(loginUser);

     if (!loginUser) {
          return res.status(404).json({ message: "User Not Found" });
     }

     // Comparar la contraseña usando argon2
     const match = await argon2.verify(loginUser.password, user.password);

     if (!match) return res.status(401).json({ message: 'Unauthorized: Wrong password' })

     res.status(200).json({
          user: loginUser.toUserResponse()
     });

});

// @desc update currently logged-in user
// Warning: if password or email is updated, client-side must update the token
// @route PUT /api/user
// @access Private
// @return User
const updateUser = asyncHandler(async (req, res) => {
     const { user } = req.body;

     // Confirm data
     if (!user) {
          return res.status(400).json({ message: "Required a User object" });
     }

     const email = req.userEmail;

     const target = await User.findOne({ email }).exec();

     if (!target) {
          return res.status(404).json({ message: "User not found" });
     }

     // Verificar si el email ya está tomado por otro usuario
     if (user.email && user.email !== target.email) {
          const existingEmail = await User.findOne({ email: user.email });
          if (existingEmail) {
               return res.status(422).json("The email is already taken");
          }
          target.email = user.email;
     }

     // Verificar si el username ya está tomado por otro usuario
     if (user.username && user.username !== target.username) {
          const existingUsername = await User.findOne({ username: user.username });
          if (existingUsername) {
               return res.status(422).json("The username is already taken");
          }
          target.username = user.username;
     }

     if (user.password) {
          const hashedPwd = await argon2.hash(user.password);
          target.password = hashedPwd;
     }
     if (typeof user.image !== 'undefined') {
          target.image = user.image;
     }
     if (typeof user.bio !== 'undefined') {
          target.bio = user.bio;
     }

     await target.save();

     return res.status(200).json({
          user: target.toUserResponse()
     });
});

module.exports = {
     registerUser,
     getCurrentUser,
     userLogin,
     updateUser
}
