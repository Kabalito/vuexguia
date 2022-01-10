<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6 class="text-xs-center">
            <v-btn @click="aumentar">{{contador}}</v-btn>
            <v-list>
              <v-list-tile v-for="usuario in usuarios" :key="usuario.id">
                <v-list-tile-title>{{usuario.name}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-btn @click="disminuir">Disminuir C</v-btn>
            {{contadorC}}
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed:{
    contador(){
      return this.$store.getters.obtenerContador
    },
    usuarios(){
      return this.$store.getters.obtenerUsuarios
    },
    contadorC(){
      return this.$store.getters.obtenerC
    }
  },
  methods:{
    aumentar(){
      // Para llamar a una mutacion utilizamos el objeto commit
      this.$store.commit('aumentarContador',2)
    },
    disminuir(){
      this.$store.commit('disminuir')
    }
  },
  beforeMount(){
    // Para llamar a una action utilizamos el objeto dispatch
    this.$store.dispatch('cargarUsuarios').then((data)=>{
      console.log(data)
    }).catch((error)=>{
      console.log(error)
    })
  }
}
</script>
