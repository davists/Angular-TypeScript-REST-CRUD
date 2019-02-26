export class Company {
    public id : string;
    public name : string;
    public cnpj : string;
    public socialReason : string;
    public email : string;
    public telephone : string;
    public address : string;
    public addressNumber : string;
    public addressDistrict : string;
    public addressComplement : string;
    public zipcode : string;
    public latitude : string;
    public longitude : string;
    public distanceToZeroReferential : string;
    public active : string;
    public cnae : string;
    public presentation : string;
    public policies : string;
    public useTerms : string;
    public contactPerson : string;
    public contactPersonTelephone : string;

    public logo : string;
    public thumbnail : string;

    public plan : string;

    public cityShippingDays : string;
    public stateShippingDays : string;
    public countryShippingDays : string;

    public country : string;
    public state : string;
    public city : string;

    public bank : string;
    public bankCode : string;
    public agency : string;
    public agencyVd : string;
    public account : string;
    public accountVd : string;
    public accountType : string;
    public documentNumber : string;
    public legalName : string;
    public splitPercentage : string;

    public createdAt : string;

    public constructor( data: any = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.cnpj = data.cnpj || '';
        this.socialReason = data.socialReason || '';
        this.email = data.email || '';
        this.telephone = data.telephone || '';
        this.address = data.address || '';
        this.addressNumber = data.addressNumber || '';
        this.addressDistrict = data.addressDistrict || '';
        this.addressComplement = data.addressComplement || '';
        this.zipcode = data.zipcode || '';
        this.latitude = data.latitude || '';
        this.longitude = data.longitude || '';
        this.distanceToZeroReferential = data.distanceToZeroReferential || '';
        this.active = data.active || '';
        this.cnae = data.cnae || '';
        this.presentation = data.presentation || '';
        this.policies = data.policies || '';
        this.useTerms = data.useTerms || '';
        this.contactPerson = data.contactPerson || '';
        this.contactPersonTelephone = data.contactPersonTelephone || '';

        this.logo = data.logo || '';
        this.thumbnail = data.thumbnail || '';

        this.plan = data.plan || '';

        this.cityShippingDays = data.cityShippingDays || '';
        this.stateShippingDays = data.stateShippingDays || '';
        this.countryShippingDays = data.countryShippingDays || '';

        this.country = data.country || '';
        this.state = data.state || '';
        this.city = data.city || '';

        this.bank = data.bank || '';
        this.bankCode = data.bankCode || '';
        this.agency = data.agency || '';
        this.agencyVd = data.agencyVd || '';
        this.account = data.account || '';
        this.accountVd = data.accountVd || '';
        this.accountType = data.accountType || '';
        this.documentNumber = data.documentNumber || '';
        this.legalName = data.legalName || '';
        this.splitPercentage = data.splitPercentage || '';

        this.createdAt = data.createdAt || '';
    }

}
