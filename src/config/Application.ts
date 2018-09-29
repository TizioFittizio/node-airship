import { ExpressConfig } from './Express';
import { info } from 'winston';
import { Server } from 'http';

export class Application {

    public server: Server;
    public express: ExpressConfig;

    private readonly PORT = 3000;

    constructor(){
        this.express = new ExpressConfig();
        this.server = this.getServerInitFunction();
    }

    private getServerInitFunction = () => {
        return this.express.app.listen(this.PORT, () => {
            info(`Server avviato su porta ${this.PORT}`);
        });
    }
}