import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


const state = {
  users: {}
}

const mutations = {
  setUser(state,payload){
    state.users = payload
  }
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
           this.$q.dialog({
            title: 'Error',
            message: 'Ops, something went wrong, try again'
          })
          this.$q.loading.hide()
         });
    },

    loginUser({}, payload) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
        const user = userCredential.user;
        this.$router.push('/home')
      }).catch((error) => {
        this.$q.dialog({
          title: 'Error',
          message: 'Ops, something went wrong, try again'
        })
        this.$q.loading.hide()
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    },

    logoutUser() {
      const auth = getAuth();
      signOut(auth)
    },

    authChanged({ commit}){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          axios.get(`${ process.env.API }/users/${uid}`).then(response => {
            this.users = response.data
            console.log(response.data)
            commit('setUser', {
              name: this.users.firstName,
              lastName : this.users.lastName,
              email: this.users.email,
              uuid: this.users.uuid
            })
            this.$router.push('/home')
          }).catch(err => {
            console.log('erro de acesso')
            this.$router.push('/create')
        })
          
        } else {
          // User is signed out
          // ...
        }
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