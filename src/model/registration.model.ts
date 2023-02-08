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
  CounselingType?: string;
  Role: string;
}

export class CounselingModel {
  Id: string;
  Name: string;
  ProductId: string;
  PriceId: string;
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

  EatingHabits: number;
  PhysicalHealth: number;
  DailyEatingHabits: number;
  MindSet: number;
  UrgeToLive: number;
  SocialInteractions: number;
  Addictions: number;
  FearOfUnknown: number;
  PhysicalFeeling: number;
}

export class QuestionRequestModel {
  WhatTypeOfTherapyAreYouLookingfor: string;
  IdentifyGender: string;
  HowOldAreYou: string;
  IdentifyYourself: string;
  RelationshipStatus: string;
  Religious: string;
  IdentifyReligion: string;
  IdentifySpiritual: string;
  InTherapy: string;
  CurrentPhysicalHealth: string;
  CurrentEatingHabits: string;
  CurrentExperience: string;
  DifferenceInSpeaking: string;
  PastTweeksProblems: string;
  FeelingLow: string;
  TroubleInSleep: string;
  FeelingTired: string;
  PoorAppetite: string;
  FeelingBadOfYourself: string;
  TroubleInConcentration: string;
  DeadlyThoughts: string;
  DifficultiesFaced: string;
  Employeement: string;
  ProblemOfWorry: string;
  AlcoholDrinking: string;
  ThoughtOfSuicide: string;
  PlansForSuicide: string;
  CurrentlyExperiencingAnxiety: string;
  CurrentlyTakingMedication: string;
  CurrentlyExperiencingChronicPain: string;
  CurrentFinancialStatus: string;
  CurrentSleepingHabits: string;
  CommunicateWithTherapist: string;
  ReferredForBetterhelp: string;
  CountryIn: string;
  PreferredLanguage: string;
  WhatLedYouToConsiderTherapyToday: Array<string>;
  ExpectationFromTherapist: Array<string>;
  ResourcesUsefulForYou: Array<string>;
  PreferenceOfTherapist: Array<string>;
}

export class QuestionnaireStatusModel {
  status: string;
}

export class QuestionnaireResponseModel {
  id: number;
  title: string;
  additionalTitle?: string;
  type: string;
  options: Array<string | number | OptionsModel>;
  label: string;
  selected: string;
}

export class OptionsModel {
  value: string;
  selected: boolean;
}
