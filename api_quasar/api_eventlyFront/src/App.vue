<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import {mapActions} from 'vuex';

export default defineComponent({
  methods: {
    ... mapActions('firebase', ['authChanged'])
  },
  mounted() {
    this.authChanged()
  }
  
})
</script>
