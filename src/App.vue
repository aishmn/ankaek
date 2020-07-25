<template>
  <v-app id="inspire">
    <Navbar />
    <TopBar />

    <v-main>
      <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    Navbar: () => import("../src/layout/Navbar"),
    TopBar: () => import("../src/layout/TopBar"),
    Footer: () => import("../src/layout/Footer"),
  },
};
</script>
