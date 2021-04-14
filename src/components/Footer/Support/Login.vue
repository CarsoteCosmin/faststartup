<template>
  <div>
    <NavBar />
    <v-container style="background-color:black;height:100vh;" class="fill-height" fluid>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col cols="10" xs="9" sm="5" md="3" lg="4" xl="4">
            <v-card-text class="text-center" style="color:white;">
              <h1>Login</h1>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10" xs="9" sm="5" md="3" lg="3" xl="3">
            <v-snackbar
              tile
              v-model="snackbar"
              :timeout="timeout"
              color="error"
              top
            >
              <v-card-text class="text-center pa-0">
                <h4>The id or password are wrong!</h4>
              </v-card-text>
            </v-snackbar>
            <v-form @submit.prevent="login" ref="form">
              <v-text-field
                autocomplete="off"
                :rules="[id]"
                v-model="Id"
                dark
                label="Id"
                name="Id"
                prepend-inner-icon="mdi-id-card"
                type="text"
                outlined
              />
              <v-text-field
                :rules="[password]"
                v-model="Password"
                dark
                id="Password"
                label="Password"
                name="Password"
                prepend-inner-icon="mdi-lock"
                type="password"
                outlined
              />
              <v-btn style="display:none;" type="submit"></v-btn>
            </v-form>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-btn color="white" outlined v-on:click="login" :loading="loading">
            <v-card-text class="pa-0" style="color:white;">Login</v-card-text>
          </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {
    NavBar: () => import("../../OffersPage/NavBar"),
  },
  data() {
    return {
      Password: "",
      Id: "",
      loading: false,
      snackbar: false,
      timeout: 4000,
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.Id + "@yahoo.com", this.Password)
          .then(
            () => {
              this.loading = false;
              this.$router.replace("/support/chat");
            },
            () => {
              this.loading = false;
              this.snackbar = true;
            }
          )
          .catch(function(error) {
            console.log(error);
          });
      }
    },
  },
  computed: {
    password() {
      if (this.Password == "") {
        return "Password is required";
      }
      return true;
    },
    id() {
      if (this.Id == "") {
        return "Id is required.";
      }
      return true;
    },
  },
};
</script>
