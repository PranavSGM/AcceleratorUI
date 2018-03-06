export class ReconcileData {
    Source : String;
    Target : String;
    ComparisonKey :Array<NewAttribute>; 
    NumericColumns : Array<NewAttribute>;     
    
}

export class NewAttribute{
    Left:string;
    Right: string;
}

export class NewAttributeRecNum{
    Left:string;
    Right:string;
}