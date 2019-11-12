const express = require('express');
const mongoose = require('mongoose');
const  cors = require('cors');
const routehandler=require('./routes/routehandler')

mongoose.connect('mongodb+srv://root:root@cluster0-rpyex.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

const app = express();
app.use(cors()); 
app.use(express.json())

app.use("/todo",routehandler)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// error handler
