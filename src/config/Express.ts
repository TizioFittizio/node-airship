import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import { useExpressServer } from 'routing-controllers';

export class ExpressConfig {

    public app: express.Express;

    constructor(){
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.setUpControllers();
    }

    private setUpControllers(){
        const controllersPath = path.resolve('dist', 'controllers');
        useExpressServer(this.app, {
            controllers: [controllersPath + '/*.js']
        });
    }

}