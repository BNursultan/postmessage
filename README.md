[![Build Status](https://travis-ci.org/BNursultan/postmessage.svg?branch=master)](https://travis-ci.org/BNursultan/postmessage)
[![Coverage Status](https://coveralls.io/repos/github/BNursultan/postmessage/badge.svg)](https://coveralls.io/github/BNursultan/postmessage)  
  
# Postmessage Library
Two way iframe communication library  

## Install and usage  
  
As es6 module:  
  
```
import Postmessage from 'postmessage';
// use Postmessage
const post = Postmessage(options);
```  
  
In browser:  
  
```
<script src="path/to/postmessage.umd.js";
// now Postmessage exists in global  
// use Postmessage  
const post = Postmessage(options);
```  
  
## Usage    
   
```
// Iinitialize
const post = Postmessage(options)
```

Created object can be `connecter` - connecter creates iframe and trying to connect to it every second.    
  
## Methods    
  
`connect`    

Trying to connect to iframe with provided Url. Connecter's domain have to exist in a whitelist in connected iframe.  
Options:
- onStart  
Type: Function  
Function that will be executed on start. For connecter only  

`on`  
  
`emit`  
  
`off`  
  
### Options  
  
- `isConnecter:`  
Type: Boolean. Default: false  
If `true` then you have method `connect`.   
- `whitelist:` required  
Type: Array  
Whitelist of websites.  
- `url`  required    
Type: String  
Url for generated iframe. 
- `log`  
Type: String. Default: false  
Logs emitted event.    
