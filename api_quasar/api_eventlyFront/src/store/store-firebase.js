import { app } from "src/boot/firebase"
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const state = {

}

const mutations = {

}

const actions ={
    registerUser({}, payload){
         const auth = getAuth();
         createUserWithEmailAndPassword(auth,payload.email, payload.password)
            .then((userCredential) => {
                const user = userCredential.user;
                axios.post(`${ process.env.API }/users`,{
                    uuid :  user.uid,
                    firstName : payload.name,
                    lastName : payload.surname,
                    email :  user.email
                    //   email : user.email
                }).then(response => {
                    this.$router.push('/login')
                    this.$q.notify({
                        message: 'Conta criada com sucesso !!!',
                        actions: [
                          { label: 'Dismiss', color: 'yellow' }
                        ]
                      })
                      this.$q.loading.hide()
                    }).catch(error => {
                        this.$q.dialog({
                            title: 'Error',
                            message: 'Ops, something went wrong, try again'
                          })
                          this.$q.loading.hide()
                    })
         }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           // ..
         });
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}