<template>
  <v-container style="background-color:#313131;" fluid>
    <Chat />
  </v-container>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

export default {
  name: "PageSupport",
  components: {
    Chat: () => import("../Support/Messages/Chat"),
  },
  data() {
    return {
      idAdmin: null,
    };
  },
  beforeCreate() {
    db.collection("users")
      .where("Name", "==", "Admin")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.idAdmin = doc.data().ID;
          if (firebase.auth().currentUser.uid === this.idAdmin) {
            this.$router.replace("/admin");
          }
        });
      });
  },
};
</script>
