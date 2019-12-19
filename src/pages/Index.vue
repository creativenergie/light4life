<template>
  <q-page>
    <div class="full-width row justify-evenly wrap mobile-desktop">
      <div class="col-md-8 col-xs-12 q-pl-md q-pr-xl q-pt-xl q-pb-md">

        <div class="q-video video-container">
          <iframe
            src="https://www.youtube.com/embed/V9I2IWxstao"
            frameborder="0"
            allowfullscreen
            class="video-embed"
          />
        </div>
      </div>

      <div class="col-md-4 col-xs-12 q-pr-xl q-py-xl q-pl-md text-justify justify-around">
        <div class="row junction-light">

          Light for Life wants to provide a scalable model for clean, affordable
          and accessible access to rural communities beginning in the Volta Region of Ghana.
          In September 2019 we ran a small trial
          , which has been successful and is benefiting
          families, bringing them light for the first time. In 2020, we
          would like to scale this up and
          roll it out in more communities giving them access to clean energy. We have won a 5k grant
          that covers the design of the equipment but need to raise an
          additional 7k to make this vision a reality.

        </div>
        <div class="q-py-md">
          <TotalRaised />
          <div class="text-subtitle2 text-grey-7 junction-light">
            Updated several times a week
          </div>
        </div>
        <div class="row flex-center">
          <GiveButton monthly_oneoff="monthly" />
          <GiveButton monthly_oneoff="oneoff" />
        </div>
        <div class="row justify-start items-center q-my-xl">
          <div class="text-h6 junction-light">Share on</div>
          <social-sharing
            url="https://lightfor.life"
            inline-template
          >
            <div>
              <network network="facebook">
                <q-btn
                  flat
                  round
                  color="indigo"
                  icon="ion-logo-facebook"
                  size="lg"
                />
              </network>
              <network network="linkedin">
                <q-btn
                  flat
                  round
                  color="indigo"
                  icon="ion-logo-linkedin"
                  size="lg"
                />
              </network>

              <network network="twitter">
                <q-btn
                  flat
                  round
                  color="blue"
                  icon="ion-logo-twitter"
                  size="lg"
                />
              </network>

              <network network="whatsapp">
                <q-btn
                  flat
                  round
                  color="indigo"
                  icon="ion-logo-whatsapp"
                  size="lg"
                />
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
    <q-separator />
    <div class="full-width wrap row justify-around items-start junction-light">
      <div class="col-md-8 q-pa-xl">
        <div class="text-h4 q-py-md">The Challenge</div>
        <p class="text-body-1">
          Rural communities in Ghana’s Volta-region are off-grid and
          have very little access to electricity. Villager were
          spending around a quarter of their monthly household income
          on alkaline batteries for use in poor quality torches. The
          torches are used for all their lighting needed, but the
          quality is poor. Dead batteries are usually buried in the
          ground, with longer term negative environmental
          consequences. Additionally, small solar lamps offer a
          significant improvement in quality of illumination per
          dollar compared to alkaline batteries. However, the capital
          investment is often beyond the reach of poorer people,
          partly because of their extremely low income but also
          because of lack of mechanisms for saving and borrowing.
          Furthermore, there is a lack of repair and maintenance
          infrastructure for off-grid products that have an average
          lifespan of 1-3 years, after which it is difficult for
          people to get things repaired. Not having access to good
          quality affordable clean energy means is not only having
          negative impact on the environment, but also on health
          services, education and on business.
        </p>
        <q-img
          src="statics/villagehome.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            A typical village home
          </div>
        </q-img>
        <div class="text-h4 q-py-md">The Solar Light Exchange</div>
        <div class="text-body-1">
          <p>
            Solar power can have so many benefits. For example, it
            can be used to help health workers carryout night time
            diagnosis and care of mothers in labour, it can be used to charge
            mobile phones for communication, in schools to allow children to
            carryout homework after dark, and even power fridges for
            vaccinations. Access to clean energy can be
            transformative in communities who have currently got no
            access to any power.
          </p>
          <p>
            The Solar Light Exchange concept has arisen from a
            desire to make solar energy available to people with low
            and/or irregular income within off-grid communities. The
            goal is to provide energy services to a whole community,
            rather than targeting one group of individuals only.
          </p>
          <p>
            A Solar Light Exchange would be central energy hub
            within a community, equipped with large solar panels and
            charging equipment. From the Solar Exchange hub, you
            will be able to lease rechargeable batteries for a small
            fee (at a rate substantially less than people currently
            spend on alkaline batteries), charge phones and rent
            larger batteries and high quality lights for homes. The
            Solar Light Exchange would be set up like a kiosk, most
            likely attached to an existing community facility such
            as a church, health centre or school. These community
            facilities would also be able to take advantage of
            access to energy both for one off events, and for
            offering other services to the community, whether that
            be refrigeration, for medicines or power so that a
            school can have computers.
          </p>
          <p>
            We need your support to make this a reality. We are
            ultimately seeking to build a sustainable model that is
            able to employ local staff and grow over time. But in
            order to get things started, we need to trial the Solar
            Light Exchange approach a larger community scale. We have identified 3
            communities in the Volta Region where love Ghana have
            been actively working for the last 10 years and have
            strong relationships, we have identified the people who
            would run the Solar Light Exchange Kiosks, developed
            some different business models concepts, and have
            designed a prototype of the Solar light Exchange system.
            In September 2018 we ran a small trial in Have Tornu in the Volta Region. This was well received
            by the community and is already having real impact. We
            would like to extend this trial to reach more families
            and have a larger impact. To to this we need to raise an
            additional 7k to pay for solar panels, batteries,
            charging systems, installation costs as well as the
            costs to visit the communities and set up the trials and
            train the entrepenurs.
          </p>
          <p>
            Would you join us to make this vision of affordable and
            accessible access to clean energy in Ghana’s Volta
            region a reality?
          </p>

          <q-img
            src="statics/solarlightexchange.jpeg"
            style="width: 100%"
          >
            <div class="absolute-bottom text-subtitle2 text-center">
              Our first prototype being trialed by the communtiy
            </div>
          </q-img>
        </div>
        <div class="text-h4 q-py-md">Our Story</div>
        <div class="text-body-1">
          <p>
            Having established successful links with a number of
            churches and their communities in the Volta Region of
            Ghana over a ten year period, Faith Brennan (Founder of
            Love Ghana) had begun to receive requests for solar
            lamps. Rather than buy solar lamps to take over to Ghana
            or raise money for imported solar lamps to be purchased
            in country, Faith approached the CREATIVenergie team in
            Edinburgh to see if there was an alternative, more
            sustainable way to provide solar energy in the remote
            off-grid communities where she had partnerships. During
            a visit in summer 2016, members of the Love Ghana team
            carried out an energy audit on behalf of CREATIVenergie
            using tools provided by Practical Action.
          </p>
          <p>
            Following this we ran a ‘Solar Hackathon’ in Edinburgh,
            bringing together a collection of people interested in
            design and off- grid energy to generate alternative
            ideas for modular solar lamps appropriate for use in
            off-grid communities. In the Summer of 2017, the
            CREATIVenergie was invited to accompany Faith on a visit
            to the Volta Region of Ghana in summer 2017. During this
            visit, based on observation of the way people make use
            of / require light for their daily life and livelihoods
            combined with holding focus group discussions, together
            we developed an approach to deliver solar light in a
            sustainable way to communities in the Volta Region, the
            Solar Light Exchange concept began to take shape.
          </p>
          <q-img
            src="statics/travelling_to_community.jpg"
            style="width: 100%"
          >
            <div class="absolute-bottom text-subtitle2 text-center">
              Travelling to the community for the first time
            </div>
          </q-img>
        </div>
        <div class="row flex-center">
          <GiveButton monthly_oneoff="monthly" />
          <GiveButton monthly_oneoff="oneoff" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="q-pa-md">
          <div
            class="q-gutter-y-md"
            style="max-width: 600px"
          >
            <div class="text-h6 junction-bold q-pt-md">
              Impact
            </div>

            <q-card
              flat
              bordered
              class="bg-primary"
            >
              <q-card-section>
                <div class="text-h6 junction-bold">£4 Support</div>
              </q-card-section>

              <q-card-section>
                <p>
                  It costs us around £4 per watt of power to
                  install the charging infrastucture for a
                  community. A community solar hub system
                  would begin at 100 Watts (~£400), which could charge batteries as well as power egg incubators, sewing machines, solar water pumps, for example.
				  Larger community systems (>500W) can power agricultural equipment such as for milling, threshing, grating.
                </p>
                <p>
                  Solar panels generally have a 20 year
                  lifespan so this investment will provide
                  clean energy to the community for many
                  years.
                </p>
              </q-card-section>
            </q-card>

            <q-card
              flat
              bordered
              class="bg-primary"
            >
              <q-card-section>
                <div class="text-h6 junction-bold">£12 support</div>
              </q-card-section>

              <q-card-section>
                <p>
                  A good quality entry level solar lamp costs
                  around £12. This gift would give light to a
                  family who currently live in darkness.
                </p>
              </q-card-section>
            </q-card>

            <q-card
              flat
              bordered
              class="bg-primary"
            >
              <q-card-section>
                <div class="text-h6 junction-bold">£22 support</div>
              </q-card-section>

              <q-card-section>
                <p>
                  This would support a larger battery system
                  for a household, enabling them to charge
                  their phones power radios and provide a good
                  amount of light at night time.
                </p>
              </q-card-section>
            </q-card>

            <q-card
              flat
              bordered
              class="bg-primary"
            >
              <q-card-section>
                <div class="text-h6 junction-bold">£50-100 support</div>
              </q-card-section>

              <q-card-section>
                <p>
                  Larger donations enable bigger household
                  battery packs, which, in addition to light,
                  enable homes to power some productive us
                  applications such as pumping water for
                  irrigation and running a sewing machine.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TotalRaised from '../components/TotalRaised.vue';
import GiveButton from '../components/GiveButton.vue';
// @ts-ignore
import SocialSharing from 'vue-social-sharing';

@Component({ components: { TotalRaised, GiveButton, SocialSharing } })
export default class App extends Vue {
  tab = 'monthly';
}
</script>

<style scoped="scss">
@media only screen and (max-width: 400px) {
  .mobile-desktop {
  }
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

.video-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
