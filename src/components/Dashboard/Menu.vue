<template>
  <v-toolbar
    :clipped-left="true"
    app
    color="#00AF7E"
  >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
    <v-toolbar-title v-text="title"/>
    <v-spacer/>
    <v-btn
      icon
      @click.stop="rightDrawer = !rightDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-btn
      icon
      @click.stop="rightDrawer = !rightDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello'
    }
  }
}
</script>

<style src="./style.styl" lang="stylus"></style>
