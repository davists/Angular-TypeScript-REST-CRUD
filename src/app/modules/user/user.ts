export class User {
    public id : string;

    public constructor( data: any = {}) {
        this.id = data.id || '';
    }

}
