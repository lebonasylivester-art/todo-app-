To-Do App

Overview

This is a simple Full-Stack To-Do Application built using HTML, CSS, JavaScript, and a Node.js backend. The project demonstrates how a frontend can communicate with a backend server using asynchronous JavaScript and the Fetch API.

Features

- Add new tasks
- Load tasks from a backend server
- Mark tasks as completed
- Delete tasks from the user interface
- Asynchronous communication using Fetch API
- Clean and beginner-friendly code structure

Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Node.js
- Express.js

Project Structure

├── index.html
├── server.js
├── package.json
└── README.md

How It Works

1. When the application starts, it requests tasks from the backend server.
2. The server returns a list of saved tasks.
3. Tasks are displayed dynamically on the page.
4. Users can add new tasks.
5. New tasks are sent to the backend using a POST request.
6. Tasks can be marked as completed using checkboxes.
7. Tasks can be removed from the interface.

Installation

1. Clone the repository:

git clone https://github.com/lebonasylivester-art/todo-app.git

2. Navigate into the project folder:

cd todo-app

3. Install dependencies:

npm install

4. Start the server:

node server.js

5. Open the frontend in your browser.

Future Improvements

- Save task completion status to the backend
- Delete tasks from the backend database
- Add local storage support
- Add user authentication
- Improve UI styling
- Add task editing functionality

Learning Goals

This project was created to practice:

- DOM Manipulation
- Event Listeners
- Async/Await
- Fetch API
- Client-Server Communication
- Full-Stack JavaScript Development

License

This project is open source and available under the MIT License.