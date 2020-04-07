
const express = require('express');

const server = express();

let users = [
    {
        id: 1, 
        name: "Jane Doe", 
        bio: "Not Tarzan's Wife, another Jane",  
      },
];

//middleware
server.use(express.json());

//endpoints
    // get req
server.get('/api/users', (req, res)=> {
    res.status(200).json(users);
});

server.get('/api/users/:theId', (req, res)=>{
    const id = req.params.theId;

    const user = users.find( user => user.id == id);
    if (user){
res.status(200).json(user);
    }else{
res.status(404).json({message: `User does not exist`})
    }
});

     // delete req
// server.delete('/api/users/:id', (req, res)=>{
//     res.json({api: 'running....'})
// });

    // patch? req
// server.patch('/api/users/:id', (req, res)=>{
//     res.json({api: 'running....'})
// });
     // post req +++{Completed}+++
     server.post('/api/users', (req, res)=>{
        const userInfo = req.body;
    
        users.push(userInfo);
    
        res.status(201).json(users);
    });
    
// End
const port = 5000;
server.listen(port, ()=>{
    console.log(`\n Listening on port ${port} ... \n`);
});

