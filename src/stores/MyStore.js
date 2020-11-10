import { observable } from 'mobx';

class MyStore {
    @observable count = 3;

    addOne () {
        this.count += 1;
    }
}

/*
export const a = 1;
export const b = 2;
export const c = 3; // import { b, c } from
export default d; // import d from
*/

export default new MyStore()