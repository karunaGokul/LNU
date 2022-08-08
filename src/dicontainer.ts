import { Vue, Provide } from "vue-property-decorator";

import {
  IAuthenticationService,
  AuthenticationService,
  IProfileService,
  ProfileService,
  IRegistrationService,
  RegistrationService,
  IPaymentService,
  PaymentService,
  CoachProfileService,
  ICoachProfileService,
  ICoachCalendarService,
  CoachCalendarService,
  IAppointmentService,
  AppointmentService,
  AdminService,
  IAdminService,
} from "@/service";

export class DIContainer extends Vue {
  @Provide("authService") authService: IAuthenticationService =
    new AuthenticationService();
  @Provide("profileService") profileService: IProfileService =
    new ProfileService();
  @Provide("registerService") registerService: IRegistrationService =
    new RegistrationService();
  @Provide("paymentService") paymentService: IPaymentService =
    new PaymentService();
  @Provide("coachProfileService") coachProfileService: ICoachProfileService =
    new CoachProfileService();
  @Provide("coachCalendarService") coachCalenderService: ICoachCalendarService =
    new CoachCalendarService();
  @Provide("appointmentService") appointmentService: IAppointmentService =
    new AppointmentService();
  @Provide("adminService") adminService: IAdminService = new AdminService();
}
