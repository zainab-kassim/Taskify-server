const jwt = require('jsonwebtoken');
import { secretKey } from "./config";


export default function generateToken(user: { _id: string; Username: string; Password: string; }) {
  const payload = {
    id: user._id,
    username: user.Username,
    // Add other user information as needed
  };


  const options = {
    expiresIn: '24h', // Set token expiration time
  };


  return jwt.sign(payload, secretKey, options);
}


