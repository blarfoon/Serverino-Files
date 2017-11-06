var User = require('../models/user');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/blog');

var users = [
    new User({
        username: 'Davide',
        email: 'davide.ceschia@gmail.com',
        password: 'ciao2x'
    }),
    new User({
        username: 'Filippo',
        email: 'filippo.marino@gmail.com',
        password: 'ciao2x'
    }),
    new User({
        username: 'Alessio',
        email: 'alessio.califano@gmail.com',
        password: 'ciao2x'
    })
];

var done = 0;

for(var i = 0; i < users.length; i++){
    users[i].save(function(err, result){
        done++;
        if(done === users.length)
            exit();
    });
}

function exit(){
    mongoose.disconnect();
}