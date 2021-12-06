<template>
  <q-page>
    <q-toolbar-title v-show="users.uuid" class="text-capitalize text-weight-bolder text-h5">
            Criando Eventos
      </q-toolbar-title> 
    <q-space />
    <div class='.col-md-6 .offset-md-3'>
      <div v-show="users.uuid" class="q-gutter-md row items-start" style="max-width: 800px">
        <q-input v-model="eventos.name" filled label="Titulo" :dense="dense" />
         <q-input filled label='Dia do Evento' v-model="eventos.day" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                <q-date v-model="eventos.day">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input label='Inicio de Evento' filled v-model="eventos.starTime">
          <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

        <q-input label='Fim do Evento' filled v-model="eventos.endTime">
          <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-select 
          filled
          v-model="eventos.event" 
          :options="option" 
          label="Atividade" />

      <q-input
          v-model="eventos.maxParticipants"
          type="number"
          filled
          min='0'
          label='Numero de Participantes'
          style="max-width: 200px"
        />
     
         <q-input v-model="eventos.neighborhood"  filled label="Endereço" :dense="dense" />
          <q-input v-model="eventos.city"  filled label="Cidade" :dense="dense" />
        <div class="q-pa-md">
            <q-btn @click="onSubmit(users.uuid)"  outline color="primary" label="Salvar" />
        </div>
      </div>
      
      <div v-show="!users.uuid">
          <q-toolbar-title class="text-capitalize text-weight-bolder text-h5 text-center">
            Ops!! É novo por aqui ?
          </q-toolbar-title> 
         <p>Crie uma conta com a gente para poder criar um evento</p>
          <div class='text-center'>
              <q-btn flat
                    to="/create"
                    color="primary" 
                    class="q-ml-sm text-weight-bolder text-center text-caption " 
                    label=" Crie uma conta" />
            </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapState ,mapActions} from 'vuex';
import { ref } from 'vue';

export default defineComponent({
  name: 'Events',
  data() {
    return {
      eventos: {
          name: '',
          day:  '',
          starTime:  '',
          endTime:  '',
          maxParticipants: null,
          numbParticipants: 1,
          neighborhood: '',
          city: '',
          confirmEvent: false,
          event: '',
          userId: ''
        },
      usersEvents: {

      }
    }
  },
  methods: {
     ... mapActions('option', ['addEvents']),
      onSubmit(userId){
        this.eventos.userId = userId
        this.addEvents(this.eventos)
    },
  },
  computed: {
     ... mapGetters('option', ['option']),
     ... mapState('firebase', ['users']),
  },
  setup () {
    return {
      date: ref('2019/02/01'),
      timeStart: ref('12:44'),
      timeEnd: ref('12:44'),
      model: ref(0),
    }
  },

})
</script>
