export class Metrics {

    public countSells : string;
    public totalSells : string;
    public countClients : string;
    public countPromotions : string;

    public constructor( data: any = {}) {
        this.countSells = data.countSells || '';
        this.totalSells = data.totalSells || '';
        this.countClients = data.countClients || '';
        this.countPromotions = data.countPromotions || '';
    }
}
