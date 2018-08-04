var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
    name : {
        type : String,
        require,
    },
    create_date : {
        type : Date,
        default : Date.now()
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);


//Get Genres 
module.exports.getGenres = (callback,limit) => {
    Genre.find(callback).limit(limit);
}

//Add genre
module.exports.addGenre = (genre,callback) => {
    Genre.create(genre,callback);
}

//DeleteGenre
module.exports.removeGenre = (id,callback) => {
    var query = {_id:id};
    Genre.remove(query,callback);
}


//UpdateGenre
module.exports.updateGenre = (id,genre,options,callback) => {
    var query = {_id:id};
    var update = {
        name : genre.name
    }
    Genre.findOneAndUpdate(query,update,options,callback);
}

