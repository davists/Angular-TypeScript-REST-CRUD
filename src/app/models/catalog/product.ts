import {Category} from "./category";

export class Product {
    public id : string;
    public companyId : string;

    public name : string;
    public price : string;
    public image : string;
    public description : string;
    public active : number;

    public ncm : string;
    public sku : string;
    public upc : string;
    public model : string;

    public weight : string;
    public length : string;
    public height : string;
    public width : string;

    public categories : Array<Category> = [];

    public constructor( data: any = {}) {
        this.id = data.id || '';
        this.companyId = data.companyId || '';
        this.name = data.name || '';
        this.price = data.price || '';
        this.image = data.image || '';
        this.description = data.description || '';
        this.active = data.active || 0;
        this.ncm = data.ncm || '';
        this.sku = data.sku || '';
        this.upc = data.upc || '';
        this.model = data.model || '';
        this.weight = data.weight || '';
        this.length = data.length || '';
        this.height = data.height || '';
        this.width = data.width || '';

        this.categories  = data.categories || '';
    }
}
