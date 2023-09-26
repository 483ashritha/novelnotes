module.exports.home= function(req, res){
  res.render('home',{title:'home'});
};
module.exports.booklist = function(req, res){
  res.render('booklist',{title:'booklist'});
};
module.exports.pride = function(req, res){
  res.render('pride',{title:'pride',bookItems : [
    {
      name: 'Pride and Prejudice',
      author: 'jane austen',
      price: 11.99,
      image: '/images/pride-and-prejudice.jpg',
      description: 'Pride and Prejudice" is a beloved novel set in the early 19th century in England. It revolves around the complex relationships of the Bennet family, particularly the headstrong Elizabeth Bennet and the proud Mr. Darcy. Austen masterfully explores themes of social class, marriage, and personal growth.',
      rating: 4,
      review: 'Austens wit and keen observation of society shine through in this novel. The characters are vividly drawn, and Elizabeths journey from prejudice to understanding is captivating. The dialogue is sharp and revealing, often laced with humor.'
    },
    
  ]});
};

module.exports.george = function(req, res){
  res.render('george',{title:'george',bookItems : [
    {
      name: '1984',
      author:'george orwell',
      price: 10.99,
      image: '/images/1984.jpg',
      description: 'George Orwell\'s dystopian novel about a totalitarian society.',
      rating: 3,
      review: 'A thought-provoking and chilling portrayal of a dystopian future where individuality is suppressed. Orwell\'s writing is both powerful and prophetic, making this book a must-read.'
    },
    
  ]});
};

module.exports.great = function(req, res){
  res.render('great',{title:'great',bookItems : [
    {
      name: 'The Great Gatsby',
      author:'F. Scott Fitzgerald',
      price: 12.99,
      image: 'images/the great gatsby.jpg',
      description: 'The Great Gatsby" is a classic novel set in the Jazz Age of the 1920s. It follows the mysterious millionaire Jay Gatsby and his unrequited love for Daisy Buchanan. The story is narrated by Nick Carraway, who becomes entangled in the lives of these characters and witnesses the excesses and moral decay of the time.',
      rating: 5,
      review: 'Fitzgeralds portrayal of the American Dream and its disillusionment is masterful. The opulence and extravagance of the era are juxtaposed with the underlying emptiness and shallowness of the characters lives. The symbolism, such as the green light at the end of Daisys dock, adds depth to the narrative.'

      
    },
    
  ]});
};

