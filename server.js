//Importing the http module from node
let http = require("http");

//Creating server via node.js method createServer() and storing it into variable. Here we passing the fucntion as the argument an this function will be execute every time we call the server. Inside anonimus function I created two propreties req (request), res (response) whic I will use in the function
let ourApp = http.createServer(function(req, res){
//Check if is the url only localhost:300 than do this code. The url proprati detects the request of user
  if(req.url == "/"){
    //Here i attach to the res paramentar (resposne) teh end which means whene the resposne ends display this
   res.end("Hello, and wellcome to our homepage");
  }
 //Chehck if the reques is the /about than do this code
  if(req.url == "/about"){
    res.end("Thank you for the intesrs of our company");
  }
//Check if the request is anything else than do this code
  res.end("We cannot find that page");
  
  
});
//Here I call the variable with server and attached the node.js method lsiten
//Inside the listen method we need to put the port nuber as argument. The port nubmer is the nuber on which page will show in the local enviroment this page we can se when we in browser adress bar type: localhost:300 
ourApp.listen(300);