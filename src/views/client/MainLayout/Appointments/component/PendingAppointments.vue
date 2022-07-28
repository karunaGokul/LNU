<template>
  <div class="pa-8">
    <v-container fluid>
      <v-card>
        <v-simple-table class="mt-4">
          <template v-slot:default>
            <thead>
              <th
                v-for="(header, i) in headers"
                :key="i"
                class="background-orange pa-4"
              >
                {{ header }}
              </th>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="index"
                class="text-center"
              >
                <td>{{ item.Date }}</td>
                <td>{{ item.Time }}</td>
                <td>{{ item.CounsellingType }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PendingAppointments extends Vue {
  public headers: Array<string> = ["Date", "Time", "Counselling Type"];

  public items: Array<any> = [
    {
      Date: "10.2.22",
      Time: "11:30",
      CounsellingType: "Foo",
    },
    {
      Date: "12.2.22",
      Time: "2:45",
      CounsellingType: "Bar",
    },
    {
      Date: "20.3.22",
      Time: "6:20",
      CounsellingType: "Buzz",
    },
    {
      Date: "1.4.22",
      Time: "10:05",
      CounsellingType: "Fizz",
    },
    {
      Date: "9.4.22",
      Time: "8:45",
      CounsellingType: "Foo",
    },
    {
      Date: "14.4.22",
      Time: "9:45",
      CounsellingType: "Bar",
    },
  ];
}
</script>

<style>
tr:nth-of-type(even) {
  background-color: #f7a3422e;
}
tr:nth-of-type(even):hover {
  background-color: #fca744 !important;
}
</style>
