# Wedding Library
    

### Install and usage  
    


```
npm install -S alfa-wedding
```  

_as es6 module:_  
```
import Wedding from 'alfa-wedding';
// use Wedding constructor
```  
  
_in browser:_  
```
<script src="path/to/wedding.umd.js";
// now Wedding constructor exists in global  
// use Wedding constructor  
```  

  
### Usage    
   

  
You can be either `connecter` or not. Connecter creates iframe and trying to connect to it every second.  
You have to create global variable to initialize Wedding.  
  
```
// Have to initialize
var wedding = Wedding(options)
```  
  
### Methods    
  

  
`connect`    
  
Trying to connect to iframe with provided Url. You have to exist in whitelist in connected iframe.
   
`on`  
  
  
`emit`  
  
  
`off`  
  
  

### Options  

  

**isConnecter:** Boolean 
default: false  
  
If `true` then you have method `connect`.  
  

**whitelist:** Array (required)
   
Whitelist of websites.  
  
**url** String (required)  
  
Url for generated iframe.  
  
