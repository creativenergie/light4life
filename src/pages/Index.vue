<template>
  <q-page>
    <div
      class="full-width wrap row justify-around items-start wrap mobiledesktop"
    >
      <div class="col-md-8 col-xs-12 q-pl-xl q-pr-xl q-pt-xl q-pb-md">
        <q-video
          src="https://www.youtube.com/embed/sbdJXKqVgtg?list=RDEMzCvyAx1Zj0NAZiaIXBOLCw"
          style="height: 400px"
        />
      </div>
      <div
        class="col-md-4 col-xs-12 q-pr-xl q-py-xl q-pl-md text-justify justify-around"
      >
        <div class="row">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          sequi vitae vero ducimus rerum blanditiis reprehenderit, praesentium
          eius itaque quam, dignissimos deleniti ipsam, ab autem at ipsum
          voluptas porro deserunt.
        </div>
        <div class="q-py-md">
          <div class="text-h5">£10 raised</div>
          <q-linear-progress
            style="height: 10px"
            :value="0.28"
            color="accent"
            class="q-mt-sm"
          />
          <div class="text-subtitle2 text-grey-7">
            Updated every 24 hours
          </div>
        </div>
        <div class="row flex-center">
          <q-btn
            unelevated
            color="secondary"
            label="Support Light4Life"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
    <div class="full-width wrap row justify-around items-start">
      <div class="col-md-8 q-pa-xl">
        <div class="text-h3">The Story</div>
        <div class="text-body-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          fugiat nostrum quam atque natus consequuntur aliquam cumque autem?
          Adipisci dolore fugit esse placeat obcaecati libero nemo nam?
          Accusamus, mollitia quisquam!
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem
        commodi exercitationem possimus ex, corrupti laudantium expedita
        molestiae magnam, illum, illo fugit vel? Mollitia esse distinctio id
        natus sapiente nihil? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rem facilis, quidem fugiat deserunt tempore qui, sapiente eveniet
        enim natus minus amet corrupti cumque eos odio dignissimos atque,
        tenetur error ipsa.
      </div>
      <div class="col-md-4">
        <div class="q-pa-md">
          <div class="q-gutter-y-md" style="max-width: 600px">
            <q-card class="no-shadow">
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="accent"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab name="monthly" label="Monthly" />
                <q-tab name="one-off" label="One Off" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="monthly">
                  <q-card flat bordered class="my-card">
                    <q-card-section>
                      <div class="row justify-between">
                        <div class="text-h6 alignleft">Our Changing Planet</div>
                        <div class="text-h6 alignright">£5/month</div>
                      </div>
                    </q-card-section>

                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <q-btn
                        unelevated
                        color="secondary"
                        label="Support Light4Life"
                        style="width: 100%"
                      />
                    </q-card-section>
                  </q-card>
                </q-tab-panel>

                <q-tab-panel name="one-off">
                  <q-card flat bordered class="my-card">
                    <q-card-section>
                      <div class="row justify-between">
                        <div class="text-h6 alignleft">Our Changing Planet</div>
                        <div class="text-h6 alignright">£5/month</div>
                      </div>
                    </q-card-section>

                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <q-btn
                        unelevated
                        color="secondary"
                        label="Support Light4Life"
                        style="width: 100%"
                      />
                    </q-card-section>
                  </q-card>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </div>
	<q-separator />
	<div
      class="full-width wrap row justify-around items-start wrap footer"
    >
	 <div class="col-md-6">
		 <p>Some info</p>
		 <p>More info</p>
		 <p>More info</p>

	 </div>
	 <div class="col-md-6">
		 <p>Some info</p>
		 <p>More info</p>
		 <p>More info</p>
	 </div>
	</div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  tab = 'monthly';
}
</script>

<style scoped="scss">
.mobiledesktop {
  border-style: solid;
  border-color: green;
  @include mobile-theme-screen {
    border-color: blue;
  }
}
.footer {
	margin: 50px 10px 100px 100px;
	padding: 5px 100px;
}

/* @media only screen and (max-width: 300px) {
	.mobiledesktop {
		border-color: blue;
	} */
</style>
