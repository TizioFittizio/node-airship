import { Controller, Get } from 'routing-controllers';

@Controller('/hello-world')
export class HelloWorld {

    @Get('/')
    public async get(){
        return {
            message: 'Ce la possiamo fare'
        };
    }

}