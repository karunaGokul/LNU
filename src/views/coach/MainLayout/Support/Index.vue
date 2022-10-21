<template>
  <v-container class="primary-linear">
    <v-row class="px-15 mt-15" justify="center">
      <v-col md="8">
        <v-form @submit.prevent="submit">
          <div class="pa-0 text-center mb-5">
            <h1>Contact us</h1>
          </div>
          <v-text-field
            label="Name"
            color="primary"
            append-icon="person"
            filled
            dense
            required
            v-model="request.Name"
            @input="$v.request.Name.$touch()"
            @blur="$v.request.Name.$touch()"
            :error-messages="$v.request.Name | errorMessages('Name')"
          ></v-text-field>
          <v-text-field
            label="Email"
            type="text"
            name="email"
            color="primary"
            append-icon="email"
            filled
            dense
            v-model="request.Email"
            required
            @input="$v.request.Email.$touch()"
            @blur="$v.request.Email.$touch()"
            :error-messages="$v.request.Email | errorMessages('Email')"
          ></v-text-field>
          <v-textarea
            filled
            auto-grow
            label="Queries"
            rows="2"
            Queries
            required
          ></v-textarea>
          <div class="text-center">
            <v-btn
              color="primary"
              class="white--text rounded font-weight-bold"
              large
              width="100%"
              type="submit"
              >Send</v-btn
            >
          </div>
        </v-form>
      </v-col>
    </v-row>
    <router-view />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { email, required } from "vuelidate/lib/validators";
import { SupportModel } from "@/model";
@Component({
  validations: {
    request: {
      Name: { required },
      Email: { required, email },
    },
  },
})
export default class Support extends Vue {
  public request: SupportModel = new SupportModel();
  public submit() {
    this.$v.$touch();
  }
}
</script>
