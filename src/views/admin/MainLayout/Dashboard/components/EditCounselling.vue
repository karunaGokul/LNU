<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card class="pa-5">
        <v-file-input
          label="Add a image"
          outlined
          dense
          :prepend-icon="null"
          prepend-inner-icon="add_a_photo"
        ></v-file-input>

        <v-text-field
          label="Title"
          color="primary"
          dense
          required
          outlined
        ></v-text-field>
        <v-textarea
          dense
          name="input-7-4"
          label="Description"
          outlined
        ></v-textarea>
        <v-text-field
          label="Duration"
          outlined
          dense
          prepend-inner-icon="schedule"
        ></v-text-field>
        <v-text-field
          label="Cost"
          outlined
          dense
          prepend-inner-icon="currency_rupee"
        ></v-text-field>
        <!-- <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :return-value.sync="time"
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Select duration"
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
            ampm-in-title
          ></v-time-picker>
        </v-menu> -->
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn text class="text-capitalize" @click="close">
            Close
          </v-btn>
          <v-btn
            color="primary"
            class="text-capitalize"
            text
            @click="save"
          >
            Save
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
export default class EditCounselling extends Vue {
  public dialog: boolean = true;
  public time: number = null;
  public menu2: boolean = false;

  public save() {
    this.$emit("save");
  }

  public close() {
    this.$emit("close");
  }
}
</script>
