export class ClientRegistrationModel {
    FirstName: string;
    LastName: string;
    PhoneNumber: number;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    CounsellingType: string;
    Payments: string;
    Contact?: string;
}

export class CoachRegistrationModel {
    fullname: string;
    contact: string;
    email: string;
    password: string;
    confirmpassword: string;
    certification: string;
    experience: string;
    payements: string;
}