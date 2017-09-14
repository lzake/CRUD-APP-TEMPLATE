const express = require('express')
const router = express.Router();

// ACCESS TO ALL OF YOUR QUERIES
const queries = require('../db/queries');


// SHOWS "Invalid ID" IF ID DOES NOT EXIST
function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validMovie(movie) {
  // IS THE TITLE OF THE MOVIE A STRING? AND DOES IT HAVE A VALUE INSIDE?
  const hasTitle = typeof movie.title == 'string' && movie.title.trim() != '';

  // IS THE URL OF THE MOVIE A STRING? AND DOES IT HAVE A VALUE INSIDE?
  const hasUrl = typeof movie.url == 'string' && movie.url.trim() != '';

  // IS THE DIRECTOR OF THE MOVIE A STRING? AND DOES IT HAVE A VALUE INSIDE?
  const hasDirector = typeof movie.director == 'string' && movie.director.trim() != '';

  // IS THE RATING A NUMBER?
  const hasRating = !isNaN(movie.rating);

  // RETURN THE VALUES OF EACH VARIABLE
  return hasTitle && hasDirector && hasUrl && hasRating;
}


// SHOW ALL MOVIES IN(app.js) IS SET TO '/api/v1/movies'.          ******
// SO "router.get('/')", IS ESSENTIALLY "router.get('/api/v1/movies/')" *
//                                                                *^*****
// EVERY ROUTE BELOW IS SAYING "('/')", MEANING.. "RIGHT AFTER 'movies', TAKE THIS QUERY AND DO THE FOLLOWING"


// THIS ROUTE SHOWS ALL THE MOVIES
router.get('/', (req, res) => {
  queries.getAll().then(movies => {
    res.json(movies);
  });
});

// WHEN YOU PASS IN AN 'ID', IT WILL MAKE THE QUERY AND RESPOND WITH THAT MOVIE
router.get('/:id', isValidId, (req, res) => {
  queries.getOne(req.params.id).then(movie => {
    if(movie) {
      res.json(movie);
    } else {
      next();
    }
  });
});

// THIS WILL 'CREATE' A NEW RECORD
router.post('/', (req, res, next) => {
  if(validMovie(req.body)) {
    // insert into db
    queries.create(req.body).then(movies => {
      res.json(movies[0]);
    });
  } else {
    next(newError('Invalid movie'));
  }
});

// THIS WILL UPDATE A RECORD (Change Something)
router.put('/:id', isValidId, (req, res, next) => {
  if(validMovie(req.body)) {
    // Update movie
    queries.update(req.params.id, req.body).then(movies => {
      res.json(movies[0]);
    });
  } else {
    next(newError('Invalid movie'));
  }
});

// THIS WILL DELETE A RECORD
router.delete('/:id', isValidId, (req, res) => {
  // do Something
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});


module.exports = router;
