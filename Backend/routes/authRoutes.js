// const express = require('express');
// const router = express.Router();

// // Mock user data (replace with database calls in production)
// const users = [{ email: 'user@example.com', password: 'password' }];

// // Login Route
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find((user) => user.email === email && user.password === password);

//   if (user) {
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// // Register Route
// router.post('/register', (req, res) => {
//   const { email, password } = req.body;
//   if (users.find((user) => user.email === email)) {
//     return res.status(400).json({ message: 'Email already registered' });
//   }
  
//   users.push({ email, password });
//   res.status(201).json({ message: 'Account created successfully' });
// });

// // Forgot Password Route
// router.post('/forgot-password', (req, res) => {
//   const { email } = req.body;
//   if (users.find((user) => user.email === email)) {
//     res.status(200).json({ message: 'Password reset link sent' });
//   } else {
//     res.status(404).json({ message: 'Email not found' });
//   }
// });

// module.exports = router;