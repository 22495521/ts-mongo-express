import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Routes from '@/routes';
import * as exception from '@/app/exception';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/public', express.static('public'));
app.use(Routes);

app.use(exception.sendNotFoundError);
app.use(exception.catchCustomError);

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});
