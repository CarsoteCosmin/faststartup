<template>
  <v-container fluid style="height:100vh;">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col cols="9">
            <div class="display-3 text-center">Page not found.</div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10" xs="6" sm="6" md="4" lg="4" xl="4">
            <v-img
              class="floating"
              lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Oops!%20404%20Error%20with%20a%20broken%20robot-bro.svg?alt=media&token=cbc35780-adcf-48e2-9e27-0c6034a6e4d3"
              src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Oops!%20404%20Error%20with%20a%20broken%20robot-bro.svg?alt=media&token=cbc35780-adcf-48e2-9e27-0c6034a6e4d3"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="black"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <div class="lighten-5 text-center">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe, who knows?
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "NotFound",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.floating {
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}
</style>
