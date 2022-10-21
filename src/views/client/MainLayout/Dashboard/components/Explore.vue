<template>
  <div class="pa-4" color="primary">
    <div class="text-left mb-4">
      <v-btn
        depressed
        color="#1867c0"
        class="white--text text-capitalize"
        @click="back"
      >
        <v-icon class="pr-2">keyboard_backspace</v-icon>
        Back
      </v-btn>
    </div>
    <v-row class="row justify-center">
      <v-col md="5">
        <v-img
          v-if="$route.params.title == 'Behavioural Counselling'"
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
        >
        </v-img>
        <v-img
          v-else-if="$route.params.title == 'Marriage Counselling'"
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1542338347-4fff3276af78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVoYXZpb3VyYWwlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        >
        </v-img>
        <v-img
          v-else-if="$route.params.title == 'Child Counselling'"
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1593634804965-0394d1324bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGQlMjAlMjBjb3Vuc2VsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        >
        </v-img>

        <v-img
          v-else-if="$route.params.title == 'Mental Health Counselling'"
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        >
        </v-img>
        <v-img
          v-else-if="$route.params.title == 'Career Counselling'"
          class="white--text align-end"
          height="200px"
          src="https://plus.unsplash.com/premium_photo-1661255424179-76d263e53ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        >
        </v-img>

        <v-card-title class="ps-0">{{ $route.params.title }}</v-card-title>

        <v-card-text class="text--primary ps-0">
          <div>
            <h4 class="text-subtitle-1">Description :</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              adipisci aperiam non dicta animi expedita hic eligendi totam eaque
              rem quasi neque sed quas qui vero modi eveniet, cupiditate
              perspiciatis. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
            </p>
            <h4 class="text-subtitle-1">Summary</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est
              sit quisquam hic perspiciatis beatae nisi deleniti ipsam iure
              repellendus, eligendi libero iste illum dignissimos cum
              voluptatibus recusandae tempora! Voluptates.
            </p>
            <h4 class="text-subtitle-1">
              Cost: <v-icon small>currency_rupee</v-icon
              >{{ $route.params.cost }}
            </h4>
            <br />
            <h4 class="text-subtitle-1">
              Duration: {{ $route.params.duration }} minutes
            </h4>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import BaseComponent from "@/components/base/BaseComponent";
import { ClientMockRequestModel, ClientMockResponseModel } from "@/model";
import { IClientService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";

@Component
export default class Explore extends BaseComponent {
  @Inject("ClientService") ClientService: IClientService;

  public request: ClientMockRequestModel = new ClientMockRequestModel();
  public response: ClientMockResponseModel = new ClientMockResponseModel();

  created() {
    window.scrollTo(0, 0);
    // this.clientDashboard();
  }

  public back() {
    this.$router.push("/client/home/dashboard");
  }

  public clientDashboard() {
    this.request.ClientId = "id102"
    this.loadingSpinner("show");
    console.log(this.request);
    this.ClientService
      .clientMockDashboard(this.request)
      .then((response: Array<ClientMockResponseModel>) => {
        this.loadingSpinner("hide");
        console.log(response);
      });
  }
}
</script>
