## Chat libraries comparison  

This project consists of a pretty simple NodeJS server that initializes a WebSocket that is connected to some chat components.

### Comparison

Go to the [COMPARISON.md](COMPARISON.md) file to get the pertinent information

### How to test

1. Run the server to establish the WebSocket connection `npm run server:start`
2. Run the frontend to initialize the UIs `npm run dev`
3. In the [App.tsx](src/App.tsx) you can modify the attributes `disabled` to `true` in the object `CHAT_RENDERS` (aprox. line 48) if you want to hide a specific component
4. Go to the [http://localhost:5173/](http://localhost:5173/)

> [!NOTE]
> In this moment there is an error that makes to write twice the name in the `prompt` alert. THe second will be the name taken.