const http = require("http")

const app = http.createServer((req,res)=>{
    if(req.url === '/'){
        // res.write("Home page");
        res.write(JSON.stringify( {message:"Nodejs is a run time environment for running js code snippets in Server side."}))
    }
    if(req.url === '/about'){
        res.write("About page")
    }
    if(req.url === '/contact'){
        res.write("Contact page")
    }
    res.end()
    
})
app.listen(5000,()=>{
    console.log("Our Server is running")
})