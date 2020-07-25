<template>
  <v-container class="about" fluid>
    <v-row>
      <v-col class="elevation-5">
        <form class="px-5 pt-5 form text--white">
          <b class="text-uppercase">Message right now!</b>
          <br />
          <small>Please let us know, what your queries are?</small>

          <v-spacer class="pb-1"></v-spacer>
          <v-text-field
            v-model="name"
            outlined
            :counter="10"
            label="Name"
            required
            @blur="$v.name.$touch()"
            prepend-inner-icon="mdi-rename-box"
            dark
            dense
            filled
          ></v-text-field>
          <v-text-field
            v-model="email"
            prepend-inner-icon="mdi-email-edit-outline"
            dark
            dense
            filled
            outlined
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            prepend-inner-icon="mdi-phone-plus"
            dark
            dense
            filled
            outlined
            label="Contact No"
            required
          ></v-text-field>
          <v-textarea
            outlined
            dark
            dense
            filled
            name="input-7-4"
            prepend-inner-icon="mdi-forum"
            label="Message"
            color="#fafafa"
          ></v-textarea>
          <v-btn
            class="mr-4 w-100"
            width="100%"
            @click="submit"
            color="rgba(255, 126, 71, 1)    "
            dense
          >submit</v-btn>
        </form>
      </v-col>
      <v-col class="ma-auto contact" :justify="center" :align="center">
        <div class="ma-auto">
          <h3 class="pa-15 contact-text text-uppercase elevation-4">
            <v-icon dark large class="pr-2">mdi-email</v-icon>info.ankaek@gmail.com
            <br />
            <v-icon dark large class="pr-2 pt-3">mdi-phone</v-icon>(+977)9851196108
          </h3>

          <v-responsive class="elevation-5 mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.1151280973523!2d85.3361828023913!3d27.703064345481632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199f0a766691%3A0x848c8754a5a606d3!2sSeto%20Pool!5e0!3m2!1sen!2snp!4v1595668762868!5m2!1sen!2snp"
              frameborder="0"
              style="width: 100%;height:350px"
              allowfullscreen
              class="pa-2"
            ></iframe>
          </v-responsive>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template> 
<script>
export default {};
</script>
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
.form {
  color: #fafafa;
  height: 100vh;
}
.contact-text {
  color: #fafafa;
}
.contact {
  height: 110vh;
}
</style>
