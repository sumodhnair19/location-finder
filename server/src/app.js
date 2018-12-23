const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');

const services = require('./services');
const mongodb = require('./mongodb');

let rawBody = '';
const rawBodySaver = (req, res, buf, encoding) => {
  rawBody = buf.toString('utf8');
};

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json({verify : rawBodySaver}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
app.use('/', feathers.static(app.get('public')));

app.configure(hooks());
app.configure(mongodb);
app.configure(rest());

app.use((req, res, next) => {
  req.feathers.ip = req.connection.remoteAddress;
  req.feathers.userAgent = req.get('user-agent');
  req.feathers.headers = req.headers;
  next();
});

app.configure(services);

module.exports = app;
