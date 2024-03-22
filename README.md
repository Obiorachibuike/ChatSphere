# chat-sphere

chat-sphere is a Node.js package that provides a backend server for real-time chat applications using Express.js and Socket.IO.

## Installation

You can install the chat-sphere package via npm or yarn:

```bash
npm install chat-sphere
```

or

```bash
yarn add chat-sphere
```

## Usage

To use chat-sphere in your Node.js application, you can import the chat-sphere class and start the server:

```javascript
const chat-sphere = require('chat-sphere');

const chatServer = new chat_sphere();
const port = 3000; // Choose any available port

chatServer.start(port);
```

Once the server is running, your clients can connect to it using Socket.IO on the frontend.

## Features

- Real-time messaging: Supports real-time bidirectional messaging between clients using WebSockets.
- Easy integration: Simple to integrate into existing Node.js applications.
- Customizable: You can extend and customize the backend according to your requirements.

## Example

Here's a basic example of using chat-sphere in a Node.js application:

```javascript
const chat-sphere = require('chat-sphere');

const chatServer = new chat-sphere();
const port = 3000; // Choose any available port

chatServer.start(port);
```



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or have any suggestions for improvements, please feel free to open an issue on the [GitHub repository]   https://github.com/Obiorachibuike/ChatSphere.git.

