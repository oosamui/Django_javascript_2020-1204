<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped
      >Navigation Lists</v-navigation-drawer
    >
    <v-app-bar color="green accent-1" class="brown--text text--darken-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>dCARD prepaid</v-toolbar-title>
      <v-spacer></v-spacer>
      <template>
        <div class="text-center">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="deep-orange" v-bind="attrs" v-on="on"
                >データ取り込み</v-btn
              >
            </template>
            <monthly></monthly>
            <v-btn color="deep-orange" @click="dialog = false">元に戻る</v-btn>
          </v-dialog>
        </div>
      </template>
    </v-app-bar>
    <div><data-table></data-table></div>
    <div><detail></detail></div>
    <v-footer color="primary" dark app> Vuetify </v-footer>
  </v-app>
</template>

<script>
import monthly from '@/components/monthly.vue'
export default {
  components: { monthly },
  data() {
    return {
      drawer: null,
      dialog: false,
    }
  },
}
</script>
