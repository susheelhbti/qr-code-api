
const express = require('express')
const app = express()
const port = process.env.PORT
var QRCode = require('qrcode')
app.use(express.json());
var fs = require('fs');
var path = require('path');
var request = require('request');
var morgan = require('morgan')



app.use(express.static('public'))



 
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

 
var cron = require('node-cron');
   
    

 
 
  

 
 
  
 


function getQRcodeURL( data,host ) {
  return new Promise(resolve => { 


 
const file= "aistore2030_"+Math.floor(Math.random() * 999999) +'.png';

const path = './public/'+file;
 

QRCode.toFile(path, data.content , function (err) {
  if (err) throw err
  console.log('saved.')
  
  var responsv3=Object();


  responsv3= {
	  "status": true,
    
        "URL": "https://"+ host + "/"+ file,
       
       
        "content": data.content,
     
	 
		
        "support": "info@aistore2030.com"
      
     
	}; 
    
	
	
      resolve(responsv3);
	  
}) ; 
});
 
}
 
 



app.post("/QRCode", (req, res) => {
	
var host = req.get('host');

 console.log(host);
	
	getQRcodeURL(req.body ,host ).then(( data) => {
	
	     
		 
  res.json ( data );
		
		
	  
	   
});

});

 
 

 

 
app.get("/", (req, res) => {
	
	 
 
		 
  res.send ( "LIVE..."  );
		
		
	  

 

});



 
 


 



 


app.listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port " );
});