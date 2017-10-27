import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

    private DEBUG = true;

    constructor() {}

    isDebug() {
        return this.DEBUG;
    }

    setDebug(type, label : string, message : any = '') {
        if (this.isDebug()) {
            console[type](label, message);
        }
    }
}
