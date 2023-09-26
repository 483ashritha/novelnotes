var loc=require('./home')
 var mongoose=require('mongoose')

var gracefulShutdown;
var dbURI="mongodb://0.0.0.0:27017/novelnotes";
if(Process.env.NODE_ENV==='production'){
  dbURI=process.env.MONGODB_URI;
}
 
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to '+dbURI);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
require('./home');