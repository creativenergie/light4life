<template>
  <q-btn
    @click="give"
    unelevated
    color="secondary"
    :label="buttonLabel"
    style="width: 100%"
	class="q-my-sm"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator'
import { openURL } from 'quasar'

type MonthlyOneOff= 'oneoff' | 'monthly'

@Component({
  name: 'give-button'
})
export default class GiveButton extends Vue {
@Prop() amount: number
@Prop({ default: 'monthly' }) monthly_oneoff: MonthlyOneOff

label = "Support Light4Life"

get buttonLabel () {
  if (this.monthly_oneoff == 'monthly') {
   return 'Support Monthly'
  }else
  { return 'One Off Donation'}
  }

give () {
  console.log(this.amount);
  console.log(this.monthly_oneoff);
  if (this.monthly_oneoff == 'monthly') {
    openURL('https://www.give.net/creativenergie/regular')
  }else
  { openURL('https://www.give.net/lightforlife/oneoff')}


}
}
</script>
