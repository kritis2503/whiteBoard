const express=require("express");
const app=express();

const http=require('http').Server(app);
const io=require('socket.io')(http);

app.use(express.static("client"));

io.on('connection',function(socket){
    console.log(`${socket.id}connected`);

    socket.on("mousedown",function(lineObject){
        socket.broadcast.emit("md",lineObject);
    });

    socket.on("mousemove",function(lineObject){
        socket.broadcast.emit("mm",lineObject);
    });

});

let port=process.env.PORT || 3000;
http.listen(port,function(){
    console.log("Server started at 3000!!!!!!!!!!!");
})