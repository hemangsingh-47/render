// const express = require("express");

// const app = express();

// // middleware to read JSON body
// app.use(express.json());

// const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" }
// ];

// // Home route
// app.get("/", (req, res) => {
//   res.send("Express server is running");
// });

// // GET all users
// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

// // GET user by id
// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });

// // POST – add new user
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     role: req.body.role,

//   };

//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// // PUT – update existing user
// app.put("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const index = users.findIndex(u => u.id === userId);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users[index] = {
//     ...users[index],
//     name: req.body.name,
//     role: req.body.role,
//     age:req.body.age
//   };

//   res.status(200).json(users[index]);
// });


// app.delete("/users/:id", (req, res) => {
//   const username = String(req.params.id);
//   const index = users.findIndex(u => u.name === username);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users.splice(index, 1);

//   res.status(204).end();
// });

// app.patch("/users/:id", (req, res) => {
//   const username = String(req.params.id);
//   const user = users.find(u => u.name === username);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (req.body.name) user.name = req.body.name;
//   if (req.body.role) user.role = req.body.role;

//   res.status(200).json({
//     message: "User updated",
//     user
//   });
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });



const express = require("express");

const app = express();

// middleware to read JSON body
app.use(express.json());

const users = [
 {att:'80', UID:108243,total_sub:14,bonus:'20',name:'Dax'},
  {att:'98', UID:108244,total_sub:14,bonus:'78',name:'Hemang'},
   {att:'79', UID:108245,total_sub:14,bonus:'2',name:'Ritesh'}
];

// Home route
app.get("/", (req, res) => {
  res.send("Express server is running");
});

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET user by id
app.get("/users/:UID", (req, res) => {
  const userId = Number(req.params.UID);
  const user = users.find(u => u.UID === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// POST – add new user
app.post("/users", (req, res) => {
  const newUser = {
    UID: users.length + 1,
    name: req.body.name,
    att: req.body.att,
    total_sub:req.body.total_sub,
    bonus:req.body.bonus,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT – update existing user
app.put("/users/:UID", (req, res) => {
  const userId = Number(req.params.UID);
  const index = users.findIndex(u => u.UID === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    ...users[index],
    name: req.body.name,
    att: req.body.att,
    total_sub:req.body.total_sub,
    bonus:req.body.bonus,
    age:req.body.age,
 
  };

  res.status(200).json(users[index]);
});


app.delete("/users/:UID", (req, res) => {
  const userId = Number(req.params.UID);

  const index = users.findIndex(u => u.UID === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(200).json({ message: "User deleted successfully" });
});


app.patch("/users/:UID", (req, res) => {
  const userId = Number(req.params.UID);


  const user = users.find(u => u.UID === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name !== undefined) user.name = req.body.name;
  if (req.body.att !== undefined) user.att = req.body.att;
  if (req.body.total_sub !== undefined) user.total_sub = req.body.total_sub;
  if (req.body.bonus !== undefined) user.bonus = req.body.bonus;

  res.status(200).json({
    message: "User updated successfully",
    user
  });
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
