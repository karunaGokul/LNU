<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h6">
          <v-icon class="pl-n2 pr-1">today</v-icon>Reschedule
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mb-n6">
          <v-text-field
            outlined
            dense
            class="mt-4"
            label="Appointment Type"
          ></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Select Duration"
                prepend-inner-icon="schedule"
                readonly
                outlined
                dense
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Select Date"
                prepend-inner-icon="calendar_month"
                readonly
                dense
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
          <v-textarea outlined label="Queries"></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false" class="primary text-capitalize">
            Reschedule
          </v-btn>
          <v-btn
            class="text-capitalize red white--text"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class UpComingAppointment extends Vue {
  public dialog: boolean = true;
  public menu1: boolean = false;
  public menu2: boolean = false;
  public time: number = null;

  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
}
</script>
