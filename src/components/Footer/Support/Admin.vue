<template>
  <div>
    <v-container fluid v-if="this.admin === true">
      Admin
      <router-link
        v-for="Userinfo in Userinfos"
        :key="Userinfo.id"
        :to="{
          name: 'chat',
          params: {
            chatsName: Userinfo.Name,
          },
        }"
        class="router-link"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="Userinfo.Name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-view :key="$route.fullPath" />
    </v-container>
    <NotFound v-else />
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

export default {
  name: "Admin",
  components: {
    NotFound: () => import("../../404/NotFound"),
  },
  data() {
    return {
      admin: false,
      Userinfos: [],
      idAdmin: null,
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/help/login");
        })
        .catch(function(error) {
          alert(error);
        });
    },
    idCompare() {
      let id1 = firebase.auth().currentUser.uid + this.idAdmin;
      let id2 = this.idAdmin + firebase.auth().currentUser.uid;
      let result = id1.localeCompare(id2);
      return result;
    },
    createMessage() {
      if (this.newMessage) {
        if (this.idCompare() <= -1) {
          db.collection("chats")
            .doc(firebase.auth().currentUser.uid + this.idAdmin)
            .set({
              idSender: firebase.auth().currentUser.uid,
              idReciver: this.idAdmin,
            });
          db.collection("chats")
            .doc(firebase.auth().currentUser.uid + this.idAdmin)
            .collection("messages")
            .doc()
            .set({
              message: this.newMessage,
              idSender: firebase.auth().currentUser.uid,
              idReciver: this.idAdmin,
              timestamp: Date.now(),
            });
        } else {
          db.collection("chats")
            .doc(this.idAdmin + firebase.auth().currentUser.uid)
            .set({
              idSender: firebase.auth().currentUser.uid,
              idReciver: this.idAdmin,
            });
          db.collection("chats")
            .doc(this.idAdmin + firebase.auth().currentUser.uid)
            .collection("messages")
            .doc()
            .set({
              message: this.newMessage,
              idSender: firebase.auth().currentUser.uid,
              idReciver: this.idAdmin,
              timestamp: Date.now(),
            });
        }
        this.newMessage = "";
      }
    },
  },
  created() {
    db.collection("users")
      .where("Name", "==", "Admin")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.idAdmin = doc.data().ID;
        });
        if (firebase.auth().currentUser.uid === this.idAdmin) {
          this.admin = true;
          db.collection("users").onSnapshot((res) => {
            const changes = res.docChanges();
            changes.forEach((change) => {
              if (change.type === "added") {
                if (change.doc.id !== this.idAdmin) {
                  this.Userinfos.push({
                    ID: change.doc.id,
                    Name: change.doc.data().Name,
                  });
                }
              }
            });
          });
          return this.admin;
        }
      });
  },
};
</script>
