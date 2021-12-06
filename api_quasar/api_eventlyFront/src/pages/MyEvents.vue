<template>
<div class="q-pa-md" >
    <q-toolbar-title class="text-capitalize text-weight-bolder text-h5 text-center">
              Meus eventos
    </q-toolbar-title> 
     
    <q-separator vertical inset />
    <div class="row" 
        >
      <div  class=".col-md-6 .offset-md-3" 
            v-for="event in events" 
                        :key="event.id">
        <q-list  v-if="event.userId == users.uuid && !edit">
            <q-item>
            <q-item-section>
                <q-item-label class="text-h6">{{event.name}}</q-item-label>
                <q-item-label caption lines="2">{{event.event}}</q-item-label>
            </q-item-section>
             <q-separator spaced inset />
            <q-item-section side top>
                <q-item-label caption>Editar</q-item-label>
                <q-icon  name="edit" @click='onEdit(event.id)' to="/home" color="red" />
            </q-item-section>
             <q-separator spaced inset />
            <q-item-section side top>
                    <q-item-label caption>Deletar</q-item-label>
                    <q-icon name="delete" @click="OnDelete(event.id)" to='/home' color="black" />
            </q-item-section>
            </q-item>
           
        </q-list>
      </div>


      <div class="col-md-3 offset-md-3" v-show="edit">
        <div class="q-pa-sm" >
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md">
            <q-input v-model="eventos.name" label="Titulo" :dense="dense"/>

            <div class="text-subtitle2">Dia do Evento</div>
                <q-input  v-model="eventos.day" mask="date" :rules="['date']">
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

        <div class="text-subtitle2">Inicio de Evento</div>
        <q-input  v-model="eventos.starTime">
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

       <div class="text-subtitle2">Fim do Evento</div>
        <q-input  v-model="eventos.endTime">
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

      <div class="text-subtitle2">Tipo de Evento</div>
      <q-select 
          v-model="eventos.event" 
          :options="option" 
          label="Atividade" />

        <div  class="text-subtitle2">Numero de Participantes</div>
        <q-input
            v-model="eventos.maxParticipants"
            type="number"
            min='0'
            style="max-width: 200px"
            />
        <q-input v-model="eventos.neighborhood"  label="Endereço" :dense="dense" />
        <q-input v-model="eventos.city"   label="Cidade" :dense="dense" />
        <div class='text-center'>
              <q-btn label="Submit" type="submit" color="primary"/>
        </div>
        <div class='text-center'>
            <q-btn flat
                    to="/home"
                    color="primary" 
                    class="q-ml-sm text-weight-bolder text-center text-caption " />
        </div>
        </q-form>
        </div>
      </div>
    </div>
</div>
</template>

<script>

import { defineComponent } from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name: 'MyEvents',
    data(){
        return {
            eventos: {
                id: null,
                name: '',
                day:  '',
                starTime:  '',
                endTime:  '',
                numbParticipants: null,
                neighborhood: '',
                city: '',
                event: '',
            }, 
            edit : false
        }
    },
    methods: {
        ... mapActions('option', ['myEventsEdit', 'myEventsDelete']),
        onSubmit(){
            this.myEventsEdit(this.eventos)
        },
        onEdit(id){
            this.eventos.id = id,
            this.edit = true
        },
        OnDelete(id){
            this.eventos.id = id,
            this.myEventsDelete(this.eventos)
        }
    },
    computed: {
        ... mapState('option', ['events']),
        ... mapState('firebase', ['users']),
        ... mapGetters('option', ['option']),
    }
})
</script>
