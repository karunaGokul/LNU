export class ClientRegistrationModel {
  FirstName: string;
  LastName: string;
  PhoneNumber: number;
  Email: string;
  Password: string;
  ConfirmPassword: string;
  CounselingType: string;
}

export class CounselingModel {
  id: number;
  name: string;
}

export class CertificationModel {
  id: number;
  name: string;
}

export class CoachRegistrationModel {
  FirstName: string;
  LastName: string;
  UserName: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
  CertificationId: string;
  Experience: string;
  Role: string;
}
