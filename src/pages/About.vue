<template>
  <v-container class="about" fluid>
    <h1 class="text-center pt-2 white--text text-uppercase">Our Services</h1>
    <v-row class="px-4">
      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="https://cdn-images-1.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Web Development</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="https://www.ekc-ltd.com/sites/default/files/styles/1000x400/public/top-image/software-solutions.jpg?itok=4q4wGgVD"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Software Solutions</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="https://ocsico.com/wp-content/uploads/2017/12/solution-overview-header.png"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Digital Literacy</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="http://gatelogsystems.com/wp-content/uploads/2018/03/Software-development.jpg"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Software Development</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="https://i3media-live.storage.googleapis.com/upload/www.i3media.net/blog/The%20World%20of%20Digital%20Marketing.jpg"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Digital Marketing</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :md="3">
        <v-card elevation="5">
          <v-img src="https://i.ytimg.com/vi/pZFX3U53Rhs/maxresdefault.jpg" height="200px"></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Graphic Design</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="https://powerhouseinternetmarketing.com/wp-content/uploads/2015/12/social-media-management-powerhouse.jpg"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>SEO and Social Media</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col :md="3">
        <v-card elevation="5">
          <v-img
            src="https://blog.radware.com/wp-content/uploads/2016/04/cisco-threat-solutions-2.png"
            height="200px"
          ></v-img>
          <div>
            <v-card-text class="text-uppercase text-center">
              <h3>Web Security Solutions</h3>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.about {
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
</style>
