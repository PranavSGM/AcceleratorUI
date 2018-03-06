export class DataSourceFile {
    FolderLocation: String;
    FileName: String;
    Remote: Boolean;
    Host: String;
    Port: String;
    User: String;
    Password: String;
    FileTransferMode: String;
    TopLinesToIgnore: Number;
    BottomLinesToIgnore: Number;
    Delimiter: String;
    Header: Boolean;
    Encoding: String;
    SchemaFile: String;
    Quote: String;
    tags: Array<[String, String]>;
}

export class file {
    Type: String;
    DataSourceName: String;
    File: DataSourceFile;
}