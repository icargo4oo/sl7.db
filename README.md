<div  align="center">
<p>
<img style="margin-bottom:-6px" src="https://media.discordapp.net/attachments/915959971030642740/919978056410599554/sal7an.db.png?width=922&height=246"/>
<a href="https://www.npmjs.com/package/sal7an.db/" alt="sal7an.db" /></a>
</p>
</p>
<p>
 <a href="https://very.soon"><img src="https://img.shields.io/discord/781805600727105567?color=5865F2&label=Discord%20&logo=discord&logoColor=FFFFFF%22%20alt=%22Discord%20server%22" alt="Discord server" /></a> <a href="https://www.npmjs.com/package/sal7an.db"><img src="https://img.shields.io/npm/v/sal7an.db.svg?maxAge=3600" alt="NPM version" /></a><a href="https://www.npmjs.com/package/sal7an.db"> <img src="https://badgen.net/npm/node/sal7an.db" alt="Size" /></a> <a href="https://www.npmjs.com/package/sal7an.db"><img src="https://img.shields.io/npm/dt/sal7an.db.svg?maxAge=3600" alt="NPM downloads" /></a>
</p>
</div>

## What is sal7an.db ?
- It is a easy and quick storage unit that relies on `objects` to store data in **JSON** format

## Installation
- You need to install the package on your project
```sh-session
npm install sal7an.db
yarn add sal7an.db
```
## Example File
![encrypt](  
https://media.discordapp.net/attachments/921429672221343805/925798703195889795/unknown.png?width=456&height=144)
## How To Use
```js
const db = require('sal7an.db');
//or
const db = require('sal7an.db')({ path: "myfolder/mydb.json" });// custom db file.


db.set('key','value');// to set a data to database.
db.get('key');// to get the data by key.
db.delete('key');// to delete key from database.
db.has('key','value');// return "true" or "false".

db.add('key', 10;);// to add a number to the key.
db.substract('key', 5);// to subtract a number from the key.
db.push('key', 10);// to set a data at the end.
db.math("key","+",5);// to math the numbers.

db.fetch(); // to fetch the data from database. 
db.fetchAll();// to fetchAll data.
db.all();// to get all data in database.

db.backup("Filename");// to make a backup file.
db.reset();// to delete all data and database.

```
## Contact

- Contact With Me Discord : [`@5.i4`](https://www.npmjs.com/package/sal7an.db)

## License 
- [MIT License](https://opensource.org/license/mit)