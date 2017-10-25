# Serverino:Files

## Table of content

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Change The Default Password](#changing-the-default-password)
    - [Change The Default Port](#changing-the-default-port)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

Serverino:Files is an open source barebone file manager originally created to move files on the same network from one pc to another.
It's now expanding and it allows you to create folders, delete files and more!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* NodeJS

### Installing

After installing nodejs you need to run a cmd/powershell or a shell (depending which OS you are on) in the project folder (where package.json is located). You then need to run

```sh
npm install
```
This will resolve all the dependancies of the project. By default the projects runs on nodemon in order to be simpler to develop on. If you want to use it you need to run this too
```sh
npm install -g nodemon
```
If you don't want nodemon and you want to run it with node, you need to change the package.json lines from
```json
"scripts": {
  "start": "nodemon ./bin/www.js"
}
```
to
```json
"scripts": {
  "start": "node ./bin/www.js"
}
```

You can then start the server with

```sh
npm start
```

The login data are

```
username: admin
password: admin
```

It will now (hopefully) run without errors and open chrome on the web page. If it does not, check the console for errors and let us know if we can help you!

### Changing the default password

If you want to change them you need to go <a href="http://www.htaccesstools.com/htpasswd-generator/">here</a> and generate a new htpasswd string. You can then manually (for now, we're working on it :D) modify the file `users.htpasswd` and paste it. If you want more than one user, just paste on for each line. For example if you want to have
```
 admin:admin
 user:user
 ```
 
as login data, the file will look like this

```
admin:$apr1$g5T9kHbL$RUfR6GG6QrWk2dhF0CEbV/
user:$apr1$ftADaxNV$46OYUim0eXMsaof.Y9mer/
```
### Changing the default port
The default port is 8090 but you can easily change it by editing this line on the file `bin/www.js`
```js
app.locals.port = 8090;
```

## Built With

* [NodeJS](https://nodejs.org/en/) - The framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [NPM Packages](#) - Tons of other npm packages

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

<b>IMPORTANT!: Remember to change the file version `bin/www.js` if your changes require it. Refer to</b> <a href="#versioning">versioning</a> <b>for more</b>

## Versioning

We use [SemVer](http://semver.org/) as versioning system.
If your changes require it, change the actual version on `bin/www.js`
```
app.locals.version = "0.0.1";
```

## Authors

* **Davide Ceschia** - *Initial work* - [killpowa](https://github.com/killpowa)

See also the list of [contributors](https://github.com/killpowa/Serverino-Files/contributors) who participated in this project.

## License

This project is licensed under the GNU GPL V3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Wish you a nice day :D
