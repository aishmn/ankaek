<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="#464646"
    class="topnav"
  >
    <v-icon @click.stop="$bus.emit('drawer')" medium color="#fafafa" large
      >mdi-menu-open</v-icon
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <span class="anka">
        anka
        <span class="ek">
          EK
          <sup class="tm">TM</sup>
        </span>
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
.topnav {
  background: rgb(255, 126, 71);
  background: radial-gradient(
    circle,
    rgba(255, 126, 71, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  );
}
.anka {
  color: #ff7e47;
  font-size: 1.15 em;
}
.ek {
  color: #fafafa;
  font-size: 1.25em;
  font-weight: bold;
}
.tm {
  color: #fafafa;
  font-size: 8px;
  padding: 4px;
  background-color: black;
  border-radius: 50%;
  vertical-align: super;
}
</style>
