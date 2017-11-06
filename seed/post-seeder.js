var mongoose = require('mongoose');

var Post = require('../models/posts');

mongoose.connect('localhost:27017/blog');


var posts = [
    new Post({
        title: 'Post1',
        content: 'Questo e un post di esempio',
        author: 'Davide'
    }),
    new Post({
        title: 'Post2',
        content: 'Questo e un post di esempio',
        author: 'Davide'
    }),
    new Post({
        title: 'Post3',
        content: 'Questo e un post di esempio',
        author: 'Davide'
    }),
];

var done = 0;

for(var i = 0; i < posts.length; i++){
    posts[i].save(function(error, result){
        done++;
        if(done === posts.length)
            exit();
    })
}

function exit(){
    mongoose.disconnect();
}