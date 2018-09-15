<template>
  <v-navigation-drawer
    :clipped="true"
    persistent
    fixed
    app
    dark
    width="240"
    class="sidebar">

    <v-list
      class="sidebar-list"
      three-line>
      <v-list-tile class="cycle">
        <v-list-tile-content>
          <v-list-tile-title>Encerrará em {{ cycle.days }} dias</v-list-tile-title>
          <v-list-tile-sub-title>
            <v-progress-linear
              v-model="cycle.progress"
              background-color="lightGray" />
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :class="item.status === 'current' ? 'current' : 'complete'"
        value="true">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title v-if="item.status === 'current'">{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="item.status === 'complete'">
          <svgicon
            name="icon-check"
            color="#fff #4caf50"/>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import '@/icons/icon-check'

export default {
  data () {
    return {
      cycle: {
        days: 14,
        progress: 90
      },
      items: [
        {
          title: 'Evidências',
          subtitle: 'Lorem ipsum dolor',
          status: 'complete'
        },
        {
          title: 'Auto-reflexão',
          subtitle: 'Lorem ipsum dolor',
          status: 'complete'
        },
        {
          title: 'Feedback',
          subtitle: 'Lorem ipsum dolor',
          status: 'complete'
        },
        {
          title: 'Avaliação do mentor',
          subtitle: 'Avalie o trabalho realizado pelo seu mentor durante este ciclo de formação.',
          status: 'current'
        }
      ]
    }
  }
}
</script>
