<template>
  <v-container>
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
            @input="request.Name.$touch()"
            @blur="request.Name.$touch()"
            :error-messages="$v.request.Name | errorMessages('Name')"
          ></v-text-field>
          <v-text-field
            label="Email Id"
            type="text"
            name="email"
            color="primary"
            append-icon="email"
            filled
            dense
            required
            @input="request.Email.$touch()"
            @blur="request.Email.$touch()"
            :error-messages="$v.request.Name | errorMessages('Email')"
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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { required } from "vuelidate/lib/validators";
import { SupportModel } from "@/model";
@Component({
  validations: {
    request: {
      Name: { required },
      Email: { required },
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
