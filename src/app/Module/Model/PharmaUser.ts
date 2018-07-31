import { Pharma } from './Pharma';

export class PharmaUser{
    public _id: string;
    public Name: Name;
    public Phone: Phone;
    public Email: string;
    public Dob: string;
    public UserId: string;
    public Role: string;
    public Pharma: Pharma;
    public IsActive: boolean;
    public IsDelete: boolean;
}

export class Name{
    public First: string;
    public Last: string;
    public Middle: string;
    public Family: string;
}

export class Phone{
    public Personal: string;
    public Home: string;
    public Office: string;
}