<template>
  <div class="primary-linear">
    <!-- <v-container fluid class="pa-16">
      <h1 class="text-h4 text-center font-weight-bold">Welcome Admin!</h1>
      <v-row class="mt-6">
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/appointments"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >book_online</v-icon
            >
            <v-card-title class="justify-center"
              >Appointments</v-card-title
            ></v-card
          >
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/coachs"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >person</v-icon
            >
            <v-card-title class="justify-center">Coaches</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="4"
            height="150"
            class="rounded-lg"
            to="/admin/home/clients"
          >
            <v-icon
              large
              style="font-size: 3rem"
              color="primary"
              class="d-flex justify-center pt-4 mb-n4"
              >people</v-icon
            ><v-card-title class="justify-center">Clients </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container> -->
    <v-container fluid class="pa-16">
      <div class="d-flex justify-end">
        <v-btn class="text-capitalize" color="primary" @click="edit"
          >add program</v-btn
        >
      </div>

      <v-row class="my-5">
        <v-col cols="4" md="4" sm="12">
          <v-card class="mx-auto">
            <v-img
              height="200px"
              src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            >
            </v-img>
            <v-card-title>Behavioural Counselling</v-card-title>
            <v-card-text class="text--primary"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae
              error, qui eos quibusdam, exercitationem voluptatum unde
              aspernatur! Sed aliquam modi ab.</v-card-text
            >
            <v-card-actions class="justify-end">
              <v-btn text color="primary" class="text-capitalize" @click="edit"
                >edit</v-btn
              >
              <v-btn
                text
                color="primary"
                class="text-capitalize"
                @click="deleteCounselling"
                >delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <v-card class="mx-auto">
            <v-img
              height="200px"
              src="https://images.unsplash.com/photo-1542338347-4fff3276af78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVoYXZpb3VyYWwlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            >
            </v-img>
            <v-card-title>Marriage Counselling</v-card-title>
            <v-card-text class="text--primary"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae
              error, qui eos quibusdam, exercitationem voluptatum unde
              aspernatur! Sed aliquam modi ab.</v-card-text
            >
            <v-card-actions class="justify-end">
              <v-btn text color="primary" class="text-capitalize" @click="edit"
                >edit</v-btn
              >
              <v-btn
                text
                color="primary"
                class="text-capitalize"
                @click="deleteCounselling"
                >delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <v-card class="mx-auto">
            <v-img
              height="200px"
              src="https://images.unsplash.com/photo-1593634804965-0394d1324bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGQlMjAlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            >
            </v-img>
            <v-card-title>Child Counselling</v-card-title>
            <v-card-text class="text--primary"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae
              error, qui eos quibusdam, exercitationem voluptatum unde
              aspernatur! Sed aliquam modi ab.</v-card-text
            >
            <v-card-actions class="justify-end">
              <v-btn text color="primary" class="text-capitalize" @click="edit"
                >edit</v-btn
              >
              <v-btn
                text
                color="primary"
                class="text-capitalize"
                @click="deleteCounselling"
                >delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <v-card class="mx-auto">
            <v-img
              height="200px"
              src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            >
            </v-img>
            <v-card-title>MentalHealth Counseling</v-card-title>
            <v-card-text class="text--primary"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae
              error, qui eos quibusdam, exercitationem voluptatum unde
              aspernatur! Sed aliquam modi ab.</v-card-text
            >
            <v-card-actions class="justify-end">
              <v-btn text color="primary" class="text-capitalize" @click="edit"
                >edit</v-btn
              >
              <v-btn
                text
                color="primary"
                class="text-capitalize"
                @click="deleteCounselling"
                >delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <v-card class="mx-auto">
            <v-img
              height="200px"
              src="https://plus.unsplash.com/premium_photo-1661255424179-76d263e53ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            >
            </v-img>
            <v-card-title>Career Counselling</v-card-title>
            <v-card-text class="text--primary"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              eum saepe voluptate accusantium, nesciunt dolor odio ad molestiae
              error, qui eos quibusdam, exercitationem voluptatum unde
              aspernatur! Sed aliquam modi ab.</v-card-text
            >
            <v-card-actions class="justify-end">
              <v-btn text color="primary" class="text-capitalize" @click="edit"
                >edit</v-btn
              >
              <v-btn
                text
                color="primary"
                class="text-capitalize"
                @click="deleteCounselling"
                >delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card class="pa-5">
            <v-file-input
              label="Add a image"
              filled
              dense
              :prepend-icon="null"
              prepend-inner-icon="add_a_photo"
            ></v-file-input>

            <v-text-field
              label="Title"
              color="primary"
              filled
              dense
              required
            ></v-text-field>
            <v-textarea
              filled
              dense
              name="input-7-4"
              label="Description"
            ></v-textarea>
            <v-card-actions class="pa-0">
              <v-spacer></v-spacer>
              <v-btn color="rgba(0, 0, 0, 0.87" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="primary" text @click="dialog = false"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-row justify="center">
        <v-dialog v-model="deleteDialog" persistent max-width="490">
          <v-card>
            <v-card-title class="text-body-1">
              Are you sure you want to delete the Counselling?</v-card-title
            >
            <!-- <v-card-text> </v-card-text> -->

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="deleteDialog = false">
                Yes
              </v-btn>
              <v-btn
                color="rgba(0, 0, 0, 0.87"
                text
                @click="deleteDialog = false"
              >
                No
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AdminDashboardLayout extends Vue {
  public dialog = false;
  public deleteDialog = false;
  public img: string = "";
  public handleimage(e: File) {
    this.img = URL.createObjectURL(e);
  }
  public edit() {
    this.dialog = true;
  }
  public deleteCounselling() {
    this.deleteDialog = true;
  }
}
</script>
