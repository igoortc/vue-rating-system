<template>
  <v-navigation-drawer
    :clipped="true"
    persistent
    fixed
    app
  >
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        value="true"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }]
    }
  }
}
</script>

<style src="./style.styl" lang="stylus"></style>
