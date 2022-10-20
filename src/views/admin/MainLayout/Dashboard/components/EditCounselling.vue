<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card class="px-5 pb-2">
        
        <v-card-title class="mb-n1 ml-n3">
          <v-icon class="mr-1">edit</v-icon>
          <h4>counselling</h4>
          <v-spacer></v-spacer>
          <v-icon class="mr-n3" @click="close">close</v-icon>
          </v-card-title>
        <v-divider></v-divider>
        <v-file-input
          label="Add an image"
          outlined
          dense
          :prepend-icon="null"
          prepend-inner-icon="add_a_photo"
          class="mt-5"
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
        <v-textarea
          dense
          name="input-7-4"
          label="Summary"
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
        <v-divider></v-divider>
        <v-card-actions class="mt-3">
          <v-spacer></v-spacer>
          <v-btn text class="text-capitalize mr-2" @click="close">
            Close
          </v-btn>
          <v-btn
            depressed
            color="primary"
            class="text-capitalize"
            @click="save"
          >
            Edit
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
