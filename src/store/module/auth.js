//import Api dari api/api.js
import Api from "@/api/Api"

const auth = {

    //set namespace true
    namespace : true,

    //inisialisasi state
    state: {

        //state token ambil dari localstorage
        token: localStorage.getItem('token') || '',

        //state user ambil dari localstorage
        user: JSON.parse(localStorage.getItem('user')) || {}

    },

    //mutation
    mutations: {
        //update state token dan state user dari hasil response
        AUTH_SUCCESS(state, token, user){
            state.token = token,
            state.user = user
        }
    },

    //actions
    actions: {
        //action register
        register({commit}, user){

            //define callback promise (harus)
            return new Promise((resolve, reject) => {

                //send data to server
                Api.post('/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })

                .then(response => {
                    //define variable dengan isi dari response 
                    const token = response.data.token
                    const user = response.data.user

                    //set localstorage untuk menyimpan data token dan user 
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(user))

                    //set default hedaer axios dengan token
                    Api.defaults.headers.common['Authorization'] = 'Bearer ' + token

                    //commit auth succes ke mutation
                    commit('AUTH_SUCCESS', token, user)

                    //kirim hasil response ke componen
                    resolve(response)

                }).catch(error => {
                    //jika gagal, remove token di local storage
                    localStorage.removeItem('token')

                    //reject componen dengan hasil response 
                    reject(error.response.data)
                })
            })
        }

    },

    //getter
    getter: {

    }
}

export default auth