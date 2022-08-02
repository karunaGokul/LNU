<template>
  <v-container class="primary-linear">
    <v-row class="mt-5 ml-4">
      <h2>Appointments</h2>
    </v-row>
    <v-row class="mx-2 my-6">
      <v-col cols="6" md="4">
        <v-card elevation="2" class="rounded pl-6">
          <v-row class="pt-3">
           <v-avatar size="60">
                <img
                  src="@/assets/profile.jpg"
                />
              </v-avatar>
            <div class="ml-2">
              <h3>Alex</h3>
              <h5>alex@mail.com</h5>
            </div>
          </v-row>

          <v-row class="py-2">
            <h5>Child Counselling</h5>
          </v-row>
          <v-row>
            <h5>2131415161</h5>
          </v-row>
          <v-row class="pt-2 ml-n4">
            <v-col>
              <v-select dense label="Coach Available" :items="items"></v-select>
            </v-col>
            <v-col>
              <v-card-action>
                <v-btn rounded class="primary text-capitalize">Consult</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="2" class="rounded pl-6">
          <v-row class="pt-3">
            <v-avatar size="60">
                <img
                  src="@/assets/profile.jpg"
                />
              </v-avatar>
            <div class="ml-2">
              <h3>Alex</h3>
              <h5>alex@mail.com</h5>
            </div>
          </v-row>

          <v-row class="py-2">
            <h5>Child Counselling</h5>
          </v-row>
          <v-row>
            <h5>2131415161</h5>
          </v-row>
          <v-row class="pt-2 ml-n4">
            <v-col>
              <v-select dense label="Coach Available" :items="items"></v-select>
            </v-col>
            <v-col>
              <v-card-action>
                <v-btn rounded class="primary text-capitalize">Revisit</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card></v-col
      >
      <v-col>
        <v-card elevation="2" class="rounded pl-6">
          <v-row class="pt-3">
            <v-avatar size="60">
                <img
                  src="@/assets/profile.jpg"
                />
              </v-avatar>
            <div class="ml-2">
              <h3>Alex</h3>
              <h5>alex@mail.com</h5>
            </div>
          </v-row>

          <v-row class="py-2">
            <h5>Child Counselling</h5>
          </v-row>
          <v-row>
            <h5>2131415161</h5>
          </v-row>
          <v-row class="pt-2 ml-n4">
            <v-col>
              <v-select dense label="Coach Available" :items="items"></v-select>
            </v-col>
            <v-col>
              <v-card-action>
                <v-btn rounded class="primary text-capitalize">Consult</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col cols="6" md="4">
        <v-card elevation="2" class="rounded pl-6">
          <v-row class="pt-3">
            <v-avatar size="60">
                <img
                  src="@/assets/profile.jpg"
                />
              </v-avatar>
            <div class="ml-2">
              <h3>Alex</h3>
              <h5>alex@mail.com</h5>
            </div>
          </v-row>

          <v-row class="py-2">
            <h5>Child Counselling</h5>
          </v-row>
          <v-row>
            <h5>2131415161</h5>
          </v-row>
          <v-row class="pt-2 ml-n4">
            <v-col>
              <v-select dense label="Coach Available" :items="items"></v-select>
            </v-col>
            <v-col>
              <v-card-action>
                <v-btn rounded class="primary text-capitalize">Revisit</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="2" class="rounded pl-6">
          <v-row class="pt-3">
            <v-avatar size="60">
                <img
                  src="@/assets/profile.jpg"
                />
              </v-avatar>
            <div class="ml-2">
              <h3>Alex</h3>
              <h5>alex@mail.com</h5>
            </div>
          </v-row>

          <v-row class="py-2">
            <h5>Child Counselling</h5>
          </v-row>
          <v-row>
            <h5>2131415161</h5>
          </v-row>
          <v-row class="pt-2 ml-n4">
            <v-col>
              <v-select dense label="Coach Available" :items="items"></v-select>
            </v-col>
            <v-col>
              <v-card-action>
                <v-btn rounded class="primary text-capitalize">Revisit</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card></v-col
      >
      <v-col>
        <v-card elevation="2" class="rounded pl-6">
          <v-row class="pt-3">
           <v-avatar size="60">
                <img
                  src="@/assets/profile.jpg"
                />
              </v-avatar>
            <div class="ml-2">
              <h3>Alex</h3>
              <h5>alex@mail.com</h5>
            </div>
          </v-row>

          <v-row class="py-2">
            <h5>Child Counselling</h5>
          </v-row>
          <v-row>
            <h5>2131415161</h5>
          </v-row>
          <v-row class="pt-2 ml-n4">
            <v-col>
              <v-select dense label="Coach Available" :items="items"></v-select>
            </v-col>
            <v-col>
              <v-card-action>
                <v-btn rounded class="primary text-capitalize">Consult</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Appointments extends Vue {
  public items = ["Foo", "Bar", "Fizz", "Buzz"];
}
</script>
