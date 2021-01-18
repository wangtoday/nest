import {Injectable} from '@nestjs/common';
import {Cat} from './interfaces/cat.interface';

@Injectable()
export class CatsService {

    private readonly cats: Cat[] = [];

    constructor() {
        console.log('看一下小毛毛: ', this.cats)
    }


    create(cat: Cat) {
        this.cats.push(cat);
        console.log(this.cats)
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
