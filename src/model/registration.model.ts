import { LoginResponseModel } from "./login.model";

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

// export class QuestionRequestModel {
//   whatTypeOfTherapyAreYouLookingfor: QuestionsModel;
//   identifyGender: QuestionsModel;
//   howOldAreYou: QuestionsModel;
//   identifyYourself: QuestionsModel;
//   relationshipStatus: QuestionsModel;
//   religious: QuestionsModel;
//   identifyReligion: QuestionsModel;
//   identifySpiritual: QuestionsModel;
//   inTherapy: QuestionsModel;
//   currentPhysicalHealth: QuestionsModel;
//   currentEatingHabits: QuestionsModel;
//   currentExperience: QuestionsModel;
//   differenceInSpeaking: QuestionsModel;
//   pastTweeksProblems: QuestionsModel;
//   feelingLow: QuestionsModel;
//   troubleInSleep: QuestionsModel;
//   feelingTired: QuestionsModel;
//   poorAppetite: QuestionsModel;
//   feelingBadOfYourself: QuestionsModel;
//   troubleInConcentration: QuestionsModel;
//   deadlyThoughts: QuestionsModel;
//   difficultiesFaced: QuestionsModel;
//   employeement: QuestionsModel;
//   problemOfWorry: QuestionsModel;
//   alcoholDrinking: QuestionsModel;
//   thoughtOfSuicide: QuestionsModel;
//   plansForSuicide: QuestionsModel;
//   currentlyExperiencingAnxiety: QuestionsModel;
//   currentlyTakingMedication: QuestionsModel;
//   currentlyExperiencingChronicPain: QuestionsModel;
//   currentFinancialStatus: QuestionsModel;
//   currentSleepingHabits: QuestionsModel;
//   communicateWithTherapist: QuestionsModel;
//   referredForBetterhelp: QuestionsModel;
//   countryIn: QuestionsModel;
//   preferredLanguage: QuestionsModel;
//   whatLedYouToConsiderTherapyToday: QuestionsModel;
//   expectationFromTherapist: QuestionsModel;
//   resourcesUsefulForYou: QuestionsModel;
//   preferenceOfTherapist: QuestionsModel;
//   userId: string;
// }



export class QuestionRequestModel {
  label: string;
  value: string;
  isSkipped: boolean;
  userId: string;
  id: number;
}

export class QuestionnaireRequestModel {
  label: string;
  value: Array<string> = [];
  isSkipped: boolean;
  userId: string;
  id: number;
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

export class SkippedQuestionsModel {
  id: number;
}
