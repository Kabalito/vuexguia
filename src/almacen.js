import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const almacenA = {
    /*
        GUARDARÁ EL ESTADO DE NUESTRA APLICACIÓN (Información)
    */
    state:{
        contador : 0,
    },
    // Son métodos que retornarán el estado de nuestra aplicación
    getters:{
        obtenerContador(state){
            return state.contador
        }
    },
    // Son métodos que sirven para modificar el estado de la aplicación
    mutations:{
        aumentarContador(state,valor){
            console.log(state)
            if(valor){
                state.contador = state.contador + valor
            }else{
                state.contador++;
            }
        }
    }
}

const almacenB = {
    /*
        GUARDARÁ EL ESTADO DE NUESTRA APLICACIÓN (Información)
    */
    state:{
        usuarios : []
    },
    // Son métodos que retornarán el estado de nuestra aplicación
    getters:{
        obtenerUsuarios(state){
            return state.usuarios
        }
    },
    // Son métodos que sirven para modificar el estado de la aplicación
    mutations:{
        cargarUsuarios(state,nuevosUsuarios){
            state.usuarios = nuevosUsuarios
        }
    },
    // Las acciones llamar a un grupo de mutations y además puede tener operaciones asincronas
    actions:{
        cargarUsuarios({commit,rootGetters}){
            console.log(rootGetters.obtenerC)
            return new Promise((resolve,reject)=>{
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=>{
                    commit('cargarUsuarios',response.data)
                    resolve(response.data)
                })
                .catch((error)=>{
                    reject(error)
                })
            })            
        }
    }

}

const almacenC = {
    /*
        GUARDARÁ EL ESTADO DE NUESTRA APLICACIÓN (Información)
    */
    state:{
        contadorC : 0
    },
    // Son métodos que retornarán el estado de nuestra aplicación
    getters:{
        obtenerC(state){
            return state.contadorC
        }
    },
    // Son métodos que sirven para modificar el estado de la aplicación
    mutations:{
        disminuir(state){
            state.contadorC--
        }
    }
}

export default new Vuex.Store({
    modules:[almacenA,almacenB,almacenC]
})