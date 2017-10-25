# Serverino:Files

## Table of content

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
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

It will now (hopefully) run without errors and open chrome on the web page. If it does not, check the console for errors and let us know if we can help you!

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

## Versioning

We use [SemVer](http://semver.org/) as versioning system.

## Authors

* **Davide Ceschia** - *Initial work* - [killpowa](https://github.com/killpowa)

See also the list of [contributors](https://github.com/killpowa/Serverino-Files/contributors) who participated in this project.

## License

This project is licensed under the GNU GPL V3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Wish you a nice day :D
