# Postmessage Library
Two way iframe communication library  
  

### Install and usage  
    


_as es6 module:_  
```
import Postmessage from 'postmessage/dist/postmessage.esm.js';
// use Postmessage constructor
```  
  
_in browser:_  
```
<script src="path/to/postmessage.umd.js";
// now Postmessage constructor exists in global  
// use Postmessage constructor  
```  

  
### Usage    
   

  
You can be either `connecter` or not. Connecter creates iframe and trying to connect to it every second.  
You have to create global variable to initialize Postmessage.  
  
```
// Have to initialize
var post = Postmessage(options)
```  
  
### Methods    
  

  
`connect`    

Trying to connect to iframe with provided Url. You have to exist in whitelist in connected iframe.
_arguments:_  

**onStart callback**  
Function that will be executed on start. For connecter only  


`on`  
  
  
`emit`  
  
  
`off`  
  
  

### Options  

  

**isConnecter:** Boolean 
default: false  
  
If `true` then you have method `connect`.  
  

**whitelist:** Array (required)
   
Whitelist of websites.  
  
**url** String  (required if isConnecter)
  
Url for generated iframe.  
  
