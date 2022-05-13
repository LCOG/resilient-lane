<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Resilient Lane County
        </q-toolbar-title>
        <div v-if="$q.screen.gt.xs" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a href="javascript:void(0)" class="text-white">
            About
          </a>
          <a href="javascript:void(0)" class="text-white">
            Contact
          </a>
          <a href="javascript:void(0)" class="text-white">
            <q-icon name="add" />Submit
          </a>
        </div>
        <q-btn
          v-if="$q.screen.lt.sm"
          @click="mobileMenu = true"
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-dialog
      v-model="mobileMenu"
      persistent
      maximized
      transition-show="slide-down"
      transition-hide="slide-up"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="q-ma-lg">
          <div class="text-h2">
            <a href="javascript:void(0)" class="text-white">About</a>
          </div>
          <div class="text-h2 q-mt-sm">
            <a href="javascript:void(0)" class="text-white">Contact</a>
          </div>
          <div class="text-h2 q-mt-sm">
            <a href="javascript:void(0)" class="text-white">Submit</a>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
  
</style>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'MyLayout',
  setup () {
    return {
      mobileMenu: ref(false)
    }
  }
}
</script>