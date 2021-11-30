<template>
  <q-layout view="lHh lpr lFf"  class="shadow-2 rounded-borders">
      <q-header elevated class="bg-teal-4 q-pa-md">
        <q-toolbar >
          <q-avatar>
          </q-avatar>
          <q-toolbar-title class="text-capitalize text-weight-bolder text-h5">
            Evently
            </q-toolbar-title> 
             <q-btn to="/home" flat round dense class="q-mr-sm" icon="home"/>
             <q-btn to="/login" flat round dense class="q-mr-sm"  icon="login"/>
        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar class="glossy bg-grey-4"></q-toolbar>
      </q-footer>

      <q-page-container class="bg-grey-2">
        <q-page class="q-pa-xl">
            <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>


import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },

  setup () {
    return {
     
    }
  }
})
</script>
