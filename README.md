# VideoValidatorNodeModule

Hello. This module helps detect if a url is a youtube video. This is useful in Discord music bots (which gave me the inpiration to create this), which is needed to detect if the user is giving a url or a keyword.

This simple module can be installed using this following command:

``` npm install video-validator ```

Once you install it, the function is

``` 
const video = require('video-validator');

console.log(video.validate("www.google.com"))
```

This would then return true or false, depending on the url you provide.
