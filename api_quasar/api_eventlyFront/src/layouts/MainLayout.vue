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
            <q-btn 
                   to="/login" 
                   v-if="!users.uuid" 
                   flat 
                   round 
                   dense 
                   class="q-mr-sm"  
                   icon="login"/>
            <q-btn 
                   to="/login" 
                   v-else
                   @click="logoutUser" 
                   flat 
                   round 
                   dense 
                   class="q-mr-sm "  
                   icon="account_circle"
                   >
                   {{users.name}}
            </q-btn>
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


import { defineComponent } from 'vue';
import {mapState, mapActions} from 'vuex';

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },
  methods: {
    ... mapActions('firebase', ['logoutUser']),
  },
  computed: {
    ... mapState('firebase', ['users']),
  },

  setup () {
    return {
     
    }
  }
})
</script>
