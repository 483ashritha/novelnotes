const mongoose = require('mongoose');
const sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};
const BookItem = mongoose.model('BookItem');

module.exports.booksCreate = function (req, res) {
  console.log(req.body);
  const { name, author, price, description, rating, image, review } = req.body;
  const newBookItem = {
    name,
    author,
    price,
    description,
    rating,
    image,
    review,
  };

  BookItem.create(newBookItem)
    .then((bookItem) => {
      console.log('Book item created:', bookItem);
      return res.status(201).json(bookItem);
    })
    .catch((err) => {
      console.error(err);
      return res.status(400).json({ error: 'Could not create book item' });
    });
};

module.exports.booksList = function (req, res) {
  BookItem.find()
    .then((bookItems) => {
      sendJsonResponse(res, 200, bookItems);
    })
    .catch((err) => {
      console.error(err);
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    });
};

module.exports.booksReadOne = async function (req, res) {
  try {
    const bookItem = await BookItem.findById(req.params.bookid).exec();
    if (!bookItem) {
      sendJsonResponse(res, 404, { error: 'Book item not found' });
    } else {
      sendJsonResponse(res, 200, bookItem);
    }
  } catch (err) {
    sendJsonResponse(res, 500, { error: 'An error occurred' });
  }
};

module.exports.booksUpdateOne = function (req, res) {
  BookItem.findByIdAndUpdate(
    req.params.bookid,
    req.body,
    { new: true }
  )
    .then((updatedBookItem) => {
      if (!updatedBookItem) {
        sendJsonResponse(res, 404, { error: 'Book item not found' });
      } else {
        sendJsonResponse(res, 200, updatedBookItem);
      }
    })
    .catch((err) => {
      console.error(err);
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    });
};

module.exports.booksDeleteOne = function (req, res) {
  BookItem.findByIdAndDelete(req.params.bookid)
    .then((deletedBookItem) => {
      if (!deletedBookItem) {
        sendJsonResponse(res, 404, { error: 'Book item not found' });
      } else {
        sendJsonResponse(res, 200, { status: 'success' });
      }
    })
    .catch((err) => {
      console.error(err);
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    });
};
