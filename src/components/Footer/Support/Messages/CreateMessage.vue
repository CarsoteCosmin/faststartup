<template>
  <div>
    <v-divider style="background-color:white;"></v-divider>
    <v-row style="height:100%;" align="center" justify="center">
      <v-col cols="11" xs="11" sm="11" md="11" lg="11" xl="11">
        <v-form @submit.prevent="createMessage">
          <v-text-field
            style="border-radius:0px;"
            dense
            outlined
            autocomplete="off"
            v-model="newMessage"
            hide-details
            placeholder="Write a message..."
            ><v-btn type="submit"></v-btn>
          </v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

export default {
  props: {
    chatsName: String,
  },
  name: "CreateMessage",
  components: {},
  data() {
    return {
      newMessage: null,
      idAdmin: null,
      idReciver: null,
    };
  },
  methods: {
    idCompareForAdmin() {
      let id1 = firebase.auth().currentUser.uid + this.idReciver;
      let id2 = this.idReciver + firebase.auth().currentUser.uid;
      let result = id1.localeCompare(id2);
      return result;
    },
    idCompareForUser() {
      let id1 = firebase.auth().currentUser.uid + this.idAdmin;
      let id2 = this.idAdmin + firebase.auth().currentUser.uid;
      let result = id1.localeCompare(id2);
      return result;
    },
    createMessage() {
      if (this.newMessage) {
        if (
          firebase.auth().currentUser.uid === this.idAdmin &&
          [this.chatsName] !== undefined
        ) {
          db.collection("users")
            .where("Name", "in", [this.chatsName])
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.idReciver = doc.data().ID;
              });
            })
            .then(() => {
              if (this.idCompareForAdmin() <= -1) {
                db.collection("chats")
                  .doc(firebase.auth().currentUser.uid + this.idReciver)
                  .set({
                    idSender: firebase.auth().currentUser.uid,
                    idReciver: this.idReciver,
                  });
                db.collection("chats")
                  .doc(firebase.auth().currentUser.uid + this.idReciver)
                  .collection("messages")
                  .doc()
                  .set({
                    idSender: firebase.auth().currentUser.uid,
                    idReciver: this.idReciver,
                    message: this.newMessage,
                    timestamp: Date.now(),
                  });
              } else {
                db.collection("chats")
                  .doc(this.idReciver + firebase.auth().currentUser.uid)
                  .set({
                    idSender: firebase.auth().currentUser.uid,
                    idReciver: this.idReciver,
                  });
                db.collection("chats")
                  .doc(this.idReciver + firebase.auth().currentUser.uid)
                  .collection("messages")
                  .doc()
                  .set({
                    idSender: firebase.auth().currentUser.uid,
                    idReciver: this.idReciver,
                    message: this.newMessage,
                    timestamp: Date.now(),
                  });
              }
              this.newMessage = "";
            });
        } else if (firebase.auth().currentUser.uid !== this.idAdmin) {
          if (this.idCompareForUser() <= -1) {
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
                idSender: firebase.auth().currentUser.uid,
                idReciver: this.idAdmin,
                message: this.newMessage,
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
                idSender: firebase.auth().currentUser.uid,
                idReciver: this.idAdmin,
                message: this.newMessage,
                timestamp: Date.now(),
              });
          }
          this.newMessage = "";
        }
      }
    },
  },
  mounted() {
    db.collection("users")
      .where("Name", "==", "Admin")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.idAdmin = doc.data().ID;
        });
      });
  },
};
</script>
