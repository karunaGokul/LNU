import { Vue, Provide } from "vue-property-decorator";

import { IAuthenticationService, AuthenticationService, IProfileService, ProfileService, IRegistrationService, RegistrationService } from "@/service";

export class DIContainer extends Vue {
  @Provide("authService") authService: IAuthenticationService = new AuthenticationService();
  @Provide("profileService") profileService: IProfileService = new ProfileService();
  @Provide("registerService") registerService: IRegistrationService = new RegistrationService();
}
