<template>
  <nav>
    <v-app-bar dense style="background-color:#313131;" flat app>
      <v-col class="pa-0" cols="12">
        <v-row no-gutters>
          <v-toolbar-title
            ><v-img
              width="190"
              height="35"
              src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/titlu%20(1).png?alt=media&token=6ad12ca4-9af1-4fed-833e-d2c1453f94a2"
            ></v-img
          ></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="pa-0" color="white" @click="logout" text>
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
        </v-row>
        <v-divider style="background-color:white;"></v-divider>
      </v-col>
    </v-app-bar>
  </nav>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "NavBarMess",
  components: {},
  data() {
    return {};
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/offers");
        })
        .catch(function(error) {
          alert(error);
        });
    },
  },
};
</script>