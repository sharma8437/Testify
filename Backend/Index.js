<<<<<<< HEAD
// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors()); // Enable CORS for frontend-backend communication
// app.use(express.json()); // Parse JSON bodies

// // Routes
// app.use('/api/auth', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
=======
const express = require("express")
const app = express()
const PORT = 3000


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log("Server is running at PORT - 3000")
})
>>>>>>> c89eb929498e90b78d0a36554f01232d8627aa1c
