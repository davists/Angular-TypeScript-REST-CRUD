export class Category {
    public id : string;
    public companyId : string;
    public company : string;
    public name : string;
    public text : string;
    public image : string;

    public constructor( data: any = {}) {
        this.id = data.id || '';
        this.companyId = data.companyId || '';
        this.company = data.company || '';
        this.name = data.name || '';
        this.image = data.image || '';
        this.text = data.text || '';
    }

}
