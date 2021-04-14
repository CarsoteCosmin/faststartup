<template>
  <nav>
    <v-app-bar dense style="background-color:#313131;" flat app>
      <v-app-bar-nav-icon style="color:white;" @click.stop="drawer = !drawer"
        ><v-slide-x-reverse-transition hide-on-leave
          ><v-icon v-if="drawer === false"
            >mdi-menu</v-icon
          ></v-slide-x-reverse-transition
        >
        <v-slide-x-transition hide-on-leave
          ><v-icon v-if="drawer === true"
            >mdi-close-thick</v-icon
          ></v-slide-x-transition
        ></v-app-bar-nav-icon
      >
      <v-spacer></v-spacer>
      <v-toolbar-title
        ><v-img
          style="cursor:pointer"
          @click="mainpage()"
          width="200"
          height="35"
          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/titlu%20(1).png?alt=media&token=6ad12ca4-9af1-4fed-833e-d2c1453f94a2"
        ></v-img
      ></v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      app
      color="black"
      v-model="drawer"
      class="custom_overlay"
      temporary
    >
      <Particles3 />
      <div>
        <v-row style="height:90vh;" align="center" justify="center">
          <v-col class="pa-0" cols="12">
            <v-row align="center" justify="center">
              <div style="height:100px;">
                <v-col>
                  <v-slide-x-transition>
                    <v-btn
                      v-if="transition1 === true"
                      @click="appPage()"
                      outlined
                      color="white"
                      tile
                    >
                      install the app
                    </v-btn>
                  </v-slide-x-transition>
                </v-col>
                <v-col>
                  <v-slide-x-transition>
                    <v-btn
                      v-if="transition2 === true"
                      @click="formularpage()"
                      outlined
                      color="white"
                      tile
                    >
                      place an order
                    </v-btn>
                  </v-slide-x-transition>
                </v-col>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  components: {
    Particles3: () => import("../Start/Particles3"),
  },
  data() {
    return {
      icons: ["mdi-magnify", "mdi-heart", "mdi-dots-vertical"],
      drawer: false,
      transition1: false,
      transition2: false,
    };
  },
  methods: {
    appPage() {
      this.$router.push("/app");
    },
    formularpage() {
      this.$router.push("/formular");
    },
    mainpage() {
      if (this.$route.name === "mainpage") {
        location.reload();
      } else {
        this.$router.push("/offers");
      }
    },
  },
  watch: {
    drawer: function() {
      if (this.drawer === true) {
        setTimeout(() => {
          this.transition1 = true;
        }, 250);
        setTimeout(() => {
          this.transition2 = true;
        }, 350);
      }
      this.transition1 = false;
      this.transition2 = false;
    },
  },
};
</script>
<style scoped>
@media screen and (min-width: 100px) {
  p.hhh {
    width: 60vw;
  }
}
.custom_overlay {
  position: fixed;
  height: 100vh;
  width: 100%;
  background: black;
  z-index: 2;
}
</style>
