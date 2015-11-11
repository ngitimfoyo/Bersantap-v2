# Web Server

For initial development we are using PHP 5.6 as backend and MongoDB v3 as database.
Ensure your local machine is running `XAMP` or `WAMP` or any preferred web server.

Out of the box, web server doesnt include mongodb library by default. So we need a library: **php_mongo.dll** to include in our PHP drivers.
See these links :
- http://php.net/manual/en/mongo.installation.php
- https://docs.mongodb.org/ecosystem/drivers/php/

Finally, to check everything works, open phpinfo() from phpMyAdmin then check if **MongoDB Support** is **enabled**.

# MongoDB

Install mongodb from : https://www.mongodb.org. This website also provides plenty tutorial, check them out.
For those who dont like much working on console window, there are many apps for mongoGUI. One of them is **mongochef** http://3t.io/mongochef/

