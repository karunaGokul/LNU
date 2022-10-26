import { GetterTree, MutationTree, ActionTree } from "vuex";

import { CounselingModel } from "@/model";

import { RegistrationService } from "@/service";

const state: any = {
  counselingProgram: [],
  appointmentRequest: {
    AppointmentDate: "",
    AppointmentTime: "",
    CounselingType: {
      Id: null,
      Name: null,
    },
    CoachDetails: {
      Id: null,
      Name: null,
    },
  },
};
const getters: GetterTree<any, any> = {
  counselingProgram: (state) => {
    return state.counselingProgram;
  },
  request: (state) => {
    return state.appointmentRequest;
  },
};
const mutations: MutationTree<any> = {
  onCounselingProgram(state, payload) {
    state.counselingProgram = payload;
  },
  onAppointmentRequest(state, payload) {
    state.appointmentRequest = payload;
  },
};
const actions: ActionTree<any, any> = {
  counselingProgram(context) {
    if (
      !context.state.counselingProgram ||
      !context.state.counselingProgram.length
    ) {
      let service = new RegistrationService();
      service.getCounselingType().then((response) => {
        context.commit("onCounselingProgram", response);
      });
    } else {
      return new Promise((resolve, reject) => {
        context.commit("onCounselingProgram", context.state.counselingProgram);

        resolve(context.state.counselingProgram);
      });
    }
  },
  appointmentRequest(context, payload) {
    context.commit("onAppointmentRequest", payload);
  },

  removeCounselingProgram(context) {
    context.state.counselingProgram = [];
  },
};

export const ContextModule = {
  state,
  getters,
  mutations,
  actions,
};
