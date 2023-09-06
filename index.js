const express = require("express")
const api = express()
const port = 5000
const data  = [{
    "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
    "Use of Express":{
        "1": "Express was created to make APIs and web applications with ease",
        "2": "It saves a lot of coding time almost by half and still makes web and mobile applications are efficient.",
        "3": "Another reason for using express is that it is written in javascript as javascript is an easy language",
        "4": " Even if you don't have a previous knowledge of any language. Express lets so many new developers enter the field of web development."
    },
    "Feature of Express":{
        "Middleware": "Middleware is a request handler that has access to the application's request-response cycle.",
        "Routing": "It refers to how an application's endpoint's URLs respond to client requests.",
        "Templating": "It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server.",
        "Debugging": "Express makes it easier as it identifies the exact part where bugs are."
    },
    "Advantages of Express":{
        "1": "Express is Unopinionated, and we can customize it.",
        "2": "For request handling, we can use Middleware.",
        "3": "A single language is used for frontend and backend development.",
        "4": "Express is fast to link it with databases like MySQL, MongoDB, etc.",
        "5": "Express allows dynamic rendering of HTML Pages based on passing arguments to templates."
    },
    "Limitations of Express JS":{
        "1": "Sometimes, there is no structural way to organize things, and the code becomes non-understandable.",
        "2": "There are so many issues with callbacks.",
        "3": "The error messages that will come are challenging to understand."
    },
    "Companies That Are Using Express JS":{
        "1": "Netflix ",
        "2": "IBM",
        "3": "ebay",
        "4": "Uber"
    }
}]
api.get('/',(req,res)=>{
    res.send("Jump to /api/main")
})
api.get('/api/main',(req,res)=>{
    res.send(data)
})
api.listen(port,()=>{
    console.log("Server is Live")
})