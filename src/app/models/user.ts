export class User {
    public id : string;
    public name : string;
    public email : string;
    public profile : string;
    public profileUrl : string;
    public addressZipcode : string;
    public addressStreet : string;
    public addressDistrict : string;
    public addressNumber : string;
    public addressCity : string;
    public addressState : string;
    public telephone : string;
    public homeTelephone : string;
    public oneClickBuy : boolean;
    public cpf : string;

    public user:string;  //userId
    public company: string; //companyId
    public companyId: string; //companyId
    public companyName: string;
    public createAt: string;

    public connected: boolean = false;

    public constructor( data: any = {})
    {
        let createdAt = new Date(data.createAt);

        this.id = data.id || '';
        this.name = data.name || '';
        this.email = data.email || '';
        this.user = data.user || '';
        this.company = data.company || '';
        this.companyId = data.company || '';
        this.companyName = data.companyName || '';
        this.createAt = createdAt.toLocaleDateString('pt-BR');
        this.connected = data.connected || false;

        this.profile = data.profile || 'public/img/user.png';
        this.profileUrl = data.profileUrl || '';
        this.addressZipcode = data.addressZipcode || '';
        this.addressStreet = data.addressStreet || '';
        this.addressDistrict = data.addressDistrict || '';
        this.addressNumber = data.addressNumber || '';
        this.addressCity = data.addressCity || '';
        this.addressState = data.addressState || '';
        this.telephone = data.telephone || '';
        this.homeTelephone = data.homeTelephone || '';
        this.oneClickBuy = data.oneClickBuy || '';
        this.cpf = data.cpf || '';

    }

    public getName()
    {
        return this.name;
    }
}
