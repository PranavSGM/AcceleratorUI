export class DataSourceDatabase {
    ConnectionType: String;
    UserName: String;
    Password: String;
    Host: String;
    Port: Number;
}

export class database {
    Type: String;
    DataSourceName: String;
    DataBase: DataSourceDatabase;
}