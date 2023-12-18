const PORT = 8000; 
const express = require('express'); 
const cors = require('cors'); 


const app = express(); 
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const userRoutes = require('./routes/userRoutes');

app.use('/', userRoutes);





app.listen(PORT, () => console.log('Server running on port 8000')); 

