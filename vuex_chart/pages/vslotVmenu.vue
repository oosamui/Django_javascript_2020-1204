<template>
  <div>
    <v-menu dark offset-x open-on-hover>
      <template #activator="{ on }">
        <v-btn v-on="on">Dropdown</v-btn>
      </template>
      <v-list dark dense>
        <v-list-item
          v-for="menu in menus"
          :key="menu.no"
          link
          @click="onClickMenu(menu)"
        >
          <v-list-item-icon>
            <v-icon dark dense left color="blue">{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    {{ sentaku.name }}
    <v-icon>{{ sentaku.icon }}</v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { icon: 'mdi-home', name: 'home' },
        { icon: 'mdi-menu', name: 'menu' },
        { icon: 'mdi-cog', name: 'config' },
      ],
      sentaku: '',
    }
  },
  methods: {
    onClickMenu(param) {
      this.sentaku = param
    },
  },
}
</script>
