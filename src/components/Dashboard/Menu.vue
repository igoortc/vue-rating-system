<template>
  <v-toolbar
    :clipped-left="true"
    app
    color="secondary"
    flat
  >
    <v-btn icon>
      <svgicon
        name="icon-arrow-back"
        color="#b3e7d8"
        class="icon-primary"/>
    </v-btn>
    <v-layout align-center>
      <v-flex class="text-xs-center">
        <v-toolbar-title
          class="toolbar-title"
          v-text="title"/>
        <v-spacer/>
      </v-flex>
    </v-layout>
    <v-btn icon>
      <svgicon
        name="icon-local-library"
        color="#b3e7d8"
        class="icon-primary"/>
    </v-btn>
    <v-btn icon>
      <svgicon
        name="icon-menu-options-vertical"
        color="#b3e7d8"
        class="icon-primary"/>
    </v-btn>
  </v-toolbar>
</template>

<script>
import '@/icons/icon-arrow-back'
import '@/icons/icon-local-library'
import '@/icons/icon-menu-options-vertical'

export default {
  data () {
    return {
      title: 'UNA-01-2018'
    }
  }
}
</script>
