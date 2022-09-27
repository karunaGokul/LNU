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

export class QuestionnaireModel {
  Name: string;
  Help: string;
  Email: string;
  WhoIsThePersonNeedHelp: string;
  PersonNeedHelp: string;
  IdentifyYourSelf: string;
  VisitUs: string;
  ExpectFromTherapist: string;
  AlreadyMedication: string;
  MedicationName: string;
  PreferredModeOfCommunication: string;
  GetInTouch: string;
  PreferredModeOfCommunicationToCollectData: string;

  EatingHabits: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  PhysicalHealth: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  DailyEatingHabits: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  MindSet: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  UrgeToLive: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  SocialInteractions: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  Addictions: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  FearOfUnknown: QuestionnaireScaleModel = new QuestionnaireScaleModel();
  PhysicalFeeling: QuestionnaireScaleModel = new QuestionnaireScaleModel();
}

export  class QuestionnaireScaleModel {
  value: boolean;
  rate: number;
}