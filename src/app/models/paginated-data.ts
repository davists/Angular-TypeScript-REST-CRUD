export class PaginatedData {

  public currentPage: number;
  public total: number;
  public perPage: number;
  public items:any;

  public constructor(data: any = {}){
    this.currentPage = data.page;
    this.total = data.length;
    this.perPage = data.length;
    this.items = data.items;

  }

}
