<template>
    <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-white" style="height: 100px">
      <q-toolbar>
        <q-toolbar-title class="text-h3">
          <q-avatar size="100px">
            <img src="statics/CreativenergieLogo.svg">
          </q-avatar>
          Light4Life
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  name: 'MyLayout',
})
export default class MyLayout extends Vue{
  leftDrawerOpen= false

};
</script>
