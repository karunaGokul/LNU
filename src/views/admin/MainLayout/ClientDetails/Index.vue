<template>
  <div class="primary-linear px-15 pt-10">
    <h1 class="text-xl-h1 mb-5" style="font-size: 30px">Client Details</h1>
    <v-simple-table style="box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)">
      <template v-slot:default>
        <thead>
          <tr>
            <th
              class="text-left primary--text"
              style="font-size: 14px"
              v-for="(item, i) in header"
              :key="i"
            >
              {{ item }}
            </th>
            <!-- <th class="text-left"><h2>About</h2></th>
            <th class="text-left"><h2>CounsellingType</h2></th>
            <th class="text-left"><h2>Email</h2></th>
            <th class="text-left"><h2>Phone</h2></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clientdetail" :key="client.id" height="90">
            <td class="ma-10">
              <v-avatar size="70">
                <img src="@/assets/profile.jpg" alt="John" />
              </v-avatar>
            </td>
            <td>{{ client.about }}</td>
            <td>{{ client.counsellingType }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.phone }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ClientDetails extends Vue {
  public header: Array<string> = [
    "UserName",
    "About",
    "CounsellingType",
    "Email",
    "Phone",
  ];
  public clientdetail: Array<any> = [
    {
      id: 1,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut ipsam eos consequuntur temporibus vero sed impedit?",
      counsellingType: "Marriage Counselling",
      email: "coach@mail.com",
      phone: 1234567890,
    },
    {
      id: 2,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut ipsam eos consequuntur temporibus vero sed impedit?",
      counsellingType: "Marriage Counselling",
      email: "coach@mail.com",
      phone: 1234567890,
    },
    {
      id: 3,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut ipsam eos consequuntur temporibus vero sed impedit?",
      counsellingType: "Marriage Counselling",
      email: "coach@mail.com",
      phone: 1234567890,
    },
    {
      id: 4,
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut ipsam eos consequuntur temporibus vero sed impedit?",
      counsellingType: "Marriage Counselling",
      email: "coach@mail.com",
      phone: 1234567890,
    },
  ];
}
</script>
