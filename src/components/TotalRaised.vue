<template>
  <div class="text-h6 junction-bold">
    <span style="float:left" >
      £{{amount}} Raised
    </span>
	<span style="float:right">Target: £12,000</span>
    <q-linear-progress
      style="height: 10px"
      :value="percentage"
      color="accent"
      class="q-mt-sm"
    />
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'total-raised'
})
export default class TotalRaised extends Vue {
  amount = 5000;
  get percentage () {
	  return this.amount/12000
  }
}
</script>
