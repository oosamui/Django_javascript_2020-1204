<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped
      >Navigation Lists</v-navigation-drawer
    >
    <v-app-bar color="green accent-1" class="brown--text text--darken-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>dCARD prepaid</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-dialog v-model="dialog">
          <template #activator="{ on, attrs }">
            <v-btn color="deep-orange" v-bind="attrs" v-on="on"
              >データ取り込み</v-btn
            >
          </template>
          <monthly></monthly>
          <v-btn color="deep-orange" @click="dialog = false">元に戻る</v-btn>
        </v-dialog>
      </div>
    </v-app-bar>
    <div><data-table></data-table></div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26096.53998389429!2d137.0062848!3d35.15493735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1636547112326!5m2!1sja!2sjp"
      width="400"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
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
