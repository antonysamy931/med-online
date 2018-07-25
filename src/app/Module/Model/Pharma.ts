export class Pharma {
    public _id: string;
    public Name: string;
    public Description: string;
    public Address: Address;
    public CreatedBy: string;
}

export class Address{
    public _id: string;
    public Address1: string;
    public Address2: string;
    public City: string;
    public State: string;
    public Country: string;
    public Zipcode: string;
}