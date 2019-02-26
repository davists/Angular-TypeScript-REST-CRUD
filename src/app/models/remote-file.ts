export class RemoteFile {

    public file_url: string;
    public file_name: string;

    public constructor( data: any = {})
    {
        this.file_url = data.file_url || '';
        this.file_name = data.file_name || '';
    }
}
