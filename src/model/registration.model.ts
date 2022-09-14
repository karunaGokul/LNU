export class RegisterModel {
  Username: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: number;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}
export class ClientRegistrationModel extends RegisterModel {
  CounselingType: string;
  Role: string;
}

export class CounselingModel {
  Id: string;
  Name: string;
  ProductId: string;
}

export class CertificationModel {
  id: number;
  name: string;
}

export class CoachRegistrationModel extends RegisterModel {
  CertificationId: string;
  Experience: string;
  Role: string;
}
