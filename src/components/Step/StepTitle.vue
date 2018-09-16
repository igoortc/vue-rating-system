<template>
  <v-toolbar
    flat
    color="white"
    class="section-title">
    <svgicon
      :name="icon"
      color="#757575"/>
    <v-toolbar-title
      v-text="title"/>
    <v-spacer/>
    <v-layout
      v-if="days"
      align-right>
      <v-flex class="text-xs-right section-info">
        <span>Esta etapa encerra em {{ days }} dias</span>
        <svgicon
          name="icon-timer"
          color="#BDBDBD"/>
        <v-spacer/>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
import '@/icons/icon-timer'

export default {
  props: ['icon', 'title', 'days']
}
</script>
