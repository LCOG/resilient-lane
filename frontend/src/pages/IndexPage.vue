<template>
  <q-page>
    <q-banner class="text-white text-center bg-negative">
      <strong>Tsunami Warning off Oregon Coast</strong>
    </q-banner>

    <q-tabs
      v-model="situation"
      inline-label
      class="bg-primary text-white"
    >
      <q-tab name="prepare" icon="looks_one" label="Prepare" @click="store.setSituation('prepare')" />
      <q-tab name="respond" icon="looks_two" label="Respond" @click="store.setSituation('respond')" />
      <q-tab name="recover" icon="looks_3" label="Recover" @click="store.setSituation('recover')" />
    </q-tabs>

    <q-parallax
      :height="400"
      src="src/assets/heceta-head.jpeg"
      class="row justify-start"
    >
      <div class="row no-wrap">
        <q-input outlined square v-model="searchTerm" placeholder="Search" class="bg-white" />
        <q-btn icon="search" unelevated />
      </div>
    </q-parallax>

    <div id="resources-cards" class="row items-center justify-evenly q-gutter-md q-mx-sm">
      <q-card class="cursor-pointer q-hoverable" v-ripple v-for="resource in store.resources" :key="resource.pk" @click="clickResourceCard(resource.url)">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ resource.title }}</div>
        </q-card-section>
        <q-card-section>
          <div>{{ resource.description}}</div>
        </q-card-section>
      </q-card>
    </div>

    
  </q-page>
</template>

<style lang="scss">
.q-tab--active {
  color: $secondary
}

.q-parallax__content {
  align-items: flex-start !important;
  justify-content: flex-start !important;
  margin-left: 100px;
  margin-top: 100px;
}

#resources-cards {
  margin-top: -150px;
}

.q-card {
  width: 300px;
  height: 250px;
}
  
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useResourcesStore } from 'stores/resources'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const store = useResourcesStore()
    let situation = ref(store.situation)
    let searchTerm = ref('Emergency fuel')

    function clickResourceCard(url: URL) {
      window.open(url, '_blank')
    }

    return { 
      store, situation, searchTerm, clickResourceCard
    };
  },
  
});
</script>
