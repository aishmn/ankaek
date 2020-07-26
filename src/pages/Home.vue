<template>
  <v-container class="landing" fluid>
    <div class="v-row">
      <v-col
        class="landing-content text-center ma-auto pt-md-15 pb-15"
        :md="8"
        :justify="center"
        :align="center"
      >
        <div class="pt-15">
          <div class="main-text-container pt-15">
            <h1
              class="main-text text-uppercase"
            >An IT brand with a flair of Artistry and Creativity!</h1>
          </div>
          <p class="px-15 mt-3">
            Our Vision is to build a Digital Ecosystem by providing Digital
            Solutions and also striving towards building a Digitally literate
            and proficient population to fuel the information revolution!
          </p>
          <v-btn
            elevation="8"
            rounded="true"
            color="#FF7E47"
            class="white--text font-weight-black"
            outlined="true"
            large
            dense
          >Quote today?</v-btn>
        </div>
      </v-col>
    </div>
  </v-container>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap");
.landing {
  min-height: 100vh;
  width: 100%;
  margin: 0px !important;
  padding: 0px !important;
  background: rgb(255, 126, 71);
  background: radial-gradient(
    circle,
    rgba(255, 126, 71, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  );
}
.main-text {
  font-family: "Rubik", cursive;
  font-size: 30px;
  color: #f3c5b1 !important;
  text-shadow: 2px 2px 3px black;
}
</style>
