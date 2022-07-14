import { Vue, Provide } from "vue-property-decorator";

import { IAuthenticationService, AuthenticationService, IProfileService, ProfileService } from "@/service";

export class DIContainer extends Vue {
  @Provide("authService") authService: IAuthenticationService = new AuthenticationService();
  @Provide("profileService") profileService: IProfileService = new ProfileService();
}
