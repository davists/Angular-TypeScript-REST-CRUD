import {Injectable} from "@angular/core";

@Injectable()
export class RestTableData {

    public columns : Array<any>;

    public apiRouteGetAll;

    public apiHost;

    public apiRouteBase;

    public angularRouteBase;

    public angularRouteRegister;

    public enableEditButton : boolean = true;

    public enableDeleteButton: boolean = true;

    public enableCustomButton : boolean = false;

    public customButton: CustomButton;

}

export class CustomButton {

    public titleName: string;
    public className: string;
    public angularRoute: string;

}


