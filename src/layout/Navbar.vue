<template>
  <v-navigation-drawer v-model="navDrawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
    <v-list dense>
      <router-link to="/">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/about">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-facebook-workplace</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Services</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/contact">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-contacts</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Contact Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/gallery">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-image-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Gallery</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/carrer">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-alpha-c-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Carrer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/clients_partners">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-spider-web</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Our Works</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/clients_partners">
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="#FF7E47">mdi-message-draw</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="menu-text">Testimonials</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    navDrawer: false,
  }),
  created() {
    this.$bus.$on("drawer", () => {
      this.navDrawer = !this.navDrawer;
    });
  },
  destroyed() {
    this.$bus.$off("drawer");
  },
};
</script>

<style scoped>
nav {
  min-width: 200px !important;
  background: rgb(255, 126, 71) !important;
  background: linear-gradient(
    290deg,
    rgba(255, 126, 71, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  ) !important;
}
a {
  text-decoration: none;
}

.menu-text {
  color: #fafafa;
}
</style>
