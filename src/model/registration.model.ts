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

export class CoachRegistrationModel {
  firstname: string;
  lastname: string;
  username: string;
  phonenumber: string;
  email: string;
  password: string;
  confirmpassword: string;
  certification: string;
  experience: string;
  payements: string;
}
