<template>
  <div>
    <div class="row">
      <div class="col col-md-8"></div>
        <div class="col-6 col-md-4">
           <q-toolbar-title class="text-capitalize text-weight-bolder text-h5">
              Bem vindo !!
            </q-toolbar-title> 
        <div class="q-pa-md" style="max-width: 400px">

          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="email"
              label="Email *"
              hint="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input label="Password" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <div class='text-center'>
              <q-btn label="Submit" type="submit" color="primary"/>
            </div>
            <div class='text-center'>
              <q-btn flat
                    to="/create"
                    color="primary" 
                    class="q-ml-sm text-weight-bolder text-center text-caption " 
                    label=" Crie uma conta" />
            </div>
          </q-form>

        </div>     
        </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Login',
  data(){
      return{
        email:'',
        password:''
      };
    },
})
</script>