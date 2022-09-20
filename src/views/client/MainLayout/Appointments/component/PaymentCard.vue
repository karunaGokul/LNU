<template>
  <div>
    <v-dialog v-model="dialog" width="400" persistent>
      <v-card class="text-center py-4 rounded-lg">
        <v-card-text>
          <stripe-element-card
            ref="elementRef"
            :pk="publishableKey"
            @token="tokenCreated"
          />
          <button @click="generateToken">Generate token</button>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { Settings } from "@/config";

import Stripe from "stripe";
import { StripeElementCard } from "@vue-stripe/vue-stripe";

@Component({
  components: {
    StripeElementCard,
  },
})
export default class PaymentCard extends Vue {
  public publishableKey: string = "";
  public dialog: boolean = true;

  public stripe = new Stripe(
    "sk_test_51Ld7ijSCihPchh4LSV4iJpowEdeQgUZBybE486opjt70Lfji2gU5d8z3wf0xfF097qvudz6osITI8UaiZH9cVydI008vVC8rhS",
    { apiVersion: "2022-08-01" }
  );

  created() {
    this.publishableKey = Settings.PublicKey;
  }

  private generateToken() {
    (this.$refs.elementRef as any).submit();
  }

  tokenCreated(token: any) {
    //this.authorize(token);
    console.log(this.stripe);
    this.stripe.charges
      .create({
        amount: 999,
        currency: "usd",
        description: "Example charge",
        source: token,
        capture: false,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err instanceof Stripe.errors.StripeError);
      });
    this.dialog = false;
  }

  /*async authorize(token: any) => {
    console.log(token);
    console.log("its called");
    let charge = await this.stripe.charges.create({
      amount: 999,
      currency: "usd",
      description: "Example charge",
      source: token,
      capture: false,
    });

    console.log(charge);
    console.log("its finished");
  };*/
}
</script>
