const express = require ("express");
const cors = require ("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const myServerTasks = [
  { text:"Buy Milk from Phone", isCompleted: false}, {text: "Finish Backend Setup", isCompleted: false},{text:"Become a dangerous Dev", isCompleted: true}];

app.get("/todo-app",function(request, response) {
  response.json(myServerTasks);
});
app.post("/todo-app",function(request, response){
 const newText = request.body;
 myServerTasks.push(newText);
 
 response.status(201).json({message: "Task succefully saved to server!"
});
});
app.listen(PORT, function(){console.log(" i finally fucking did marete a lona kaofela");
});

