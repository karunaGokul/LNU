<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class BaseComponent extends Vue {
  loadingSpinner(message: string) {
    let root: any = this.$root;

    return root.$loadingSpinner(message);
  }
}
</script>