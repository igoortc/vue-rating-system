<template>
  <v-app>
    <Sidebar/>
    <Menu/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from './components/Dashboard/Sidebar.vue'
import Menu from './components/Dashboard/Menu.vue'
export default {
  components: {
    Sidebar,
    Menu
  }
}
</script>
