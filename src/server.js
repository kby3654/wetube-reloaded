import './db';
import express from 'express';
import morgan from 'morgan';
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const PORT = 4000;

const app = express();
// Morgan - Global Middleware
const logger = morgan('common') // dev | combined | common | short | tiny

// engine을 퍼그로 설정
app.set('view engine', 'pug');
// Views 참조 디렉터리 설정
app.set('views', process.cwd() + '/src/views');
app.use(logger);
// request body parsing
app.use(express.urlencoded({ extended: true }));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
