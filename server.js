import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import config from './core/config/config.dev'
import cars from './routes/cars.route';
import fortune from './routes/fourtune.route';
import connectToDb from './db/connect';
import path from 'path';

const port = config.serverPort;
logger.stream = {
    write: function(message, encoding){
        
        logger.info(message);
    }
};

connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { 'stream': logger.stream }));

app.use('/cars', cars);
app.use('/fortunes',fortune);
//Index route
app.get('/', (req, res) => {
    // res.send('Invalid endpoint!');
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});


app.listen(port, () => {
    logger.info('server started - ', port);
});