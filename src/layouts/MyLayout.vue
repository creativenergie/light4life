<template>
	<q-layout view="hHh lpR fFf">
		<q-header
			reveal
			bordered
			class="bg-primary text-black junction-bold no-border; display:inline-block"
			style="height: 100px"
		>
			<div class="q-pl-lg q-ma-md q-pa-md text-h3" style="float:left">
				Light for Life
			</div>
			<q-avatar
				@click="creativenergieWebsite"
				size="100px"
				class="hide-for-mobile q-pa-sm q-mx-sm"
				style="float:right;"
			>
				<img src="statics/CreativenergieLogo.svg" />
			</q-avatar>
			<q-avatar
				@click="loveGhanaWebsite"
				size="100px"
				class="hide-for-mobile q-pa-sm q-mx-sm"
				style="float:right;"
			>
				<img src="statics/LoveGhanaLogo.svg" />
			</q-avatar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>

		<div class="full-width footer bg-blue-grey-1">
			<div class="row justify-between items-end">
				<div class="col-xs-12 col-sm-4">
					<div class="q-ma-sm  q-pb-lg">
						<q-img
							@click="creativenergieWebsite"
							src="statics/CreativenergieLogo.svg"
							style="width: 150px"
						/>
					</div>

					<p>Registered Charity No.SC047910 (Scotland)</p>
					<p>
						CREATIVenergie, 19 Windsor Place Portobello Edinburgh
						EH15 2AJ
					</p>
					<div class="row justify-around items-center q-my-sm">
					<div><q-btn flat round color="indigo" icon="ion-logo-facebook" @click="creativenergieFacebook" size='md'/></div>
					<div><q-btn flat round color="black" icon="ion-logo-instagram" @click="creativenergieInstagram" size='md'/></div>
					<div><q-btn flat round color="blue" icon="ion-logo-twitter" @click="creativenergieTwitter"  size='md'/></div>
				</div>
				</div>
				<div class="col-sm-4">
					<div class="q-xs-12 col-sm-4 q-pb-lg">
						<q-img
							@click="loveGhanaWebsite"
							src="statics/LoveGhanaLogo.svg"
							style="width: 150px"
							class="q-ma-sm"
						/>
					</div>

					<p>Registered Charity No.SC041578 (Scotland)</p>
					<p>
						Love Ghana, Lighthouse Central, West Loan, Prestonpans,
						East Lothian, EH32 9NT
					</p>
					<div class="row justify-around items-center q-my-sm">
					<div><q-btn flat round color="indigo" icon="ion-logo-facebook" @click="loveghanaFacebook" href='https://www.facebook.com/CREATIVenergie-1514630308823255/' size='md'/></div>
					<div><q-btn flat round color="black" icon="ion-logo-instagram" @click="loveghanaInstagram" size='md'/></div>
				</div>
				</div>
			</div>
		</div>
	</q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { openURL } from 'quasar';

@Component({
  name: 'MyLayout'
})
export default class MyLayout extends Vue {
  leftDrawerOpen = false;
  loveGhanaWebsite () {
	  openURL('https://loveghana.org')
  }
  creativenergieWebsite () {
	  openURL('https://creativenergie.co.uk')
  }

  creativenergieFacebook () {
	  openURL('https://www.facebook.com/CREATIVenergie-1514630308823255/')
  }

  creativenergieInstagram () {
	  openURL('https://www.instagram.com/creativenergie/')
  }

  creativenergieTwitter () { openURL('https://twitter.com/creativenergie')}

  loveghanaFacebook () {openURL('https://www.facebook.com/loveghana/')}

  loveghanaInstagram () {openURL('https://www.instagram.com/loveghanauk/')}


}
</script>

<style scoped="scss">
@media only screen and (max-width: 600px) {
	.hide-for-mobile {
		display: none !important;
	}
}
.footer {
	margin: 50px 10px 100px 100px;
	padding: 5px 100px;
}
</style>
