<template>
  <div>
    <NavBarMess />
    <v-container class="pt-0" style="height:100vh;" fluid>
      <v-row style="height:100%;">
        <v-col class="pa-0" cols="12">
          <v-row
            no-gutters
            style="height:100%;"
            align="center"
            justify="center"
          >
            <v-col class="pa-0" cols="11" xs="11" sm="11" md="9" lg="9" xl="9">
              <v-card dark tile elevation="24" height="85vh">
                <v-col
                  class="py-0 mx-2"
                  v-chat-scroll="{
                    always: false,
                    smooth: true,
                    scrollonremoved: true,
                    smoothonremoved: false,
                  }"
                  style="overflow-y: auto;height:70vh;"
                >
                  <infinite-loading
                    direction="top"
                    :distance="40"
                    spinner="spiral"
                    @infinite="intersected"
                    ><div slot="no-more"></div>
                    <div slot="no-results">
                      Tell us about your problem.
                    </div></infinite-loading
                  >
                  <v-list
                    class="px-3"
                    v-for="Message in Messages"
                    :key="Message.id"
                  >
                    <div
                      style="text-align:right;"
                      v-if="Message.idSender === querycurrentuser()"
                    >
                      <v-list-item
                        selectable
                        class="send pl-2"
                        style="min-height: 25px;min-width:130px; text-align: right;"
                      >
                        <v-list-item-content
                          style="text-alig:right;"
                          class="py-2 sb2"
                        >
                          <v-list-item-title
                            style="white-space: normal; color: white;"
                            >{{ Message.message }}</v-list-item-title
                          >
                          <v-list-item-subtitle style="text-align: left;"
                            ><h6>
                              {{ Message.timestampChat }}
                            </h6></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </div>
                    <div v-else>
                      <v-list-item
                        selectable
                        class="get pr-2"
                        style="min-height: 25px;min-width:130px;"
                      >
                        <v-list-item-content class="py-2 sb1">
                          <v-list-item-title
                            style="white-space: normal; color: white;"
                            >{{ Message.message }}</v-list-item-title
                          >
                          <v-list-item-subtitle
                            ><h6>
                              {{ Message.timestampChat }}
                            </h6></v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </div>
                  </v-list>
                </v-col>
                <CreateMessage :chatsName="chatsName" style="height:15vh;" />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

import InfiniteLoading from "vue-infinite-loading";
import moment from "moment";
import CreateMessage from "../Messages/CreateMessage";
import NavBarMess from "./NavBarMess";

export default {
  props: {
    chatsName: String,
  },
  name: "Chat",
  components: {
    CreateMessage,
    InfiniteLoading,
    NavBarMess,
  },
  data() {
    return {
      Messages: [],
      idAdmin: null,
      finalID: null,
      size: 12,
      scrollsize: 20,
      lastDOC: null,
      FirstQuery: true,
      idReciver: null,
    };
  },
  methods: {
    querycurrentuser() {
      return firebase.auth().currentUser.uid;
    },
    idCompareAdmin() {
      let id1 = firebase.auth().currentUser.uid + this.idReciver;
      let id2 = this.idReciver + firebase.auth().currentUser.uid;
      let result = id1.localeCompare(id2);
      return result;
    },
    idFinalAdmin() {
      if (this.idCompareAdmin() === -1) {
        this.finalID = firebase.auth().currentUser.uid + this.idReciver;
      } else {
        this.finalID = this.idReciver + firebase.auth().currentUser.uid;
      }
    },
    idCompareUser() {
      let id1 = firebase.auth().currentUser.uid + this.idAdmin;
      let id2 = this.idAdmin + firebase.auth().currentUser.uid;
      let result = id1.localeCompare(id2);
      return result;
    },
    idFinalUser() {
      if (this.idCompareUser() === -1) {
        this.finalID = firebase.auth().currentUser.uid + this.idAdmin;
      } else {
        this.finalID = this.idAdmin + firebase.auth().currentUser.uid;
      }
    },
    intersected($state) {
      db.collection("users")
        .where("Name", "==", "Admin")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.idAdmin = doc.data().ID;
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
                  this.idFinalAdmin();
                })
                .then(() => {
                  if (this.lastDOC === null) {
                    const first = db
                      .collection("chats")
                      .doc(this.finalID)
                      .collection("messages")
                      .orderBy("timestamp", "desc")
                      .limit(this.size);
                    first.onSnapshot((res) => {
                      if (res.size !== 0) {
                        const changes = res.docChanges();
                        changes.forEach((change) => {
                          if (change.type === "added") {
                            if (this.FirstQuery === true) {
                              this.Messages.unshift({
                                id: change.doc.id,
                                idSender: change.doc.data().idSender,
                                idReciver: change.doc.data().idReciver,
                                message: change.doc.data().message,
                                timestampChat: moment(
                                  change.doc.data().timestamp
                                ).format("LT"),
                                timestamp: change.doc.data().timestamp,
                              });
                            } else {
                              this.Messages.push({
                                id: change.doc.id,
                                idSender: change.doc.data().idSender,
                                idReciver: change.doc.data().idReciver,
                                message: change.doc.data().message,
                                timestampChat: moment(
                                  change.doc.data().timestamp
                                ).format("LT"),
                                timestamp: change.doc.data().timestamp,
                              });
                            }
                          }
                        });
                        this.FirstQuery = false;
                        this.lastDOC = this.Messages[0].timestamp;
                        $state.loaded();
                      } else {
                        $state.complete();
                      }
                    });
                  } else {
                    const second = db
                      .collection("chats")
                      .doc(this.finalID)
                      .collection("messages")
                      .orderBy("timestamp", "desc")
                      .startAfter(this.lastDOC)
                      .limit(this.scrollsize);
                    second.onSnapshot((res) => {
                      if (res.size !== 0) {
                        const changes = res.docChanges();
                        changes.forEach((change) => {
                          if (change.type === "added") {
                            this.Messages.unshift({
                              id: change.doc.id,
                              idSender: change.doc.data().idSender,
                              idReciver: change.doc.data().idReciver,
                              message: change.doc.data().message,
                              timestampChat: moment(
                                change.doc.data().timestamp
                              ).format("LT"),
                              timestamp: change.doc.data().timestamp,
                            });
                          }
                        });
                        this.lastDOC = this.Messages[0].timestamp;
                        $state.loaded();
                      } else {
                        $state.complete();
                      }
                    });
                  }
                });
            } else if (firebase.auth().currentUser.uid !== this.idAdmin) {
              this.idFinalUser();
              if (this.lastDOC === null) {
                const first = db
                  .collection("chats")
                  .doc(this.finalID)
                  .collection("messages")
                  .orderBy("timestamp", "desc")
                  .limit(this.size);
                first.onSnapshot((res) => {
                  if (res.size !== 0) {
                    const changes = res.docChanges();
                    changes.forEach((change) => {
                      if (change.type === "added") {
                        if (this.FirstQuery === true) {
                          this.Messages.unshift({
                            id: change.doc.id,
                            idSender: change.doc.data().idSender,
                            idReciver: change.doc.data().idReciver,
                            message: change.doc.data().message,
                            timestampChat: moment(
                              change.doc.data().timestamp
                            ).format("LT"),
                            timestamp: change.doc.data().timestamp,
                          });
                        } else {
                          this.Messages.push({
                            id: change.doc.id,
                            idSender: change.doc.data().idSender,
                            idReciver: change.doc.data().idReciver,
                            message: change.doc.data().message,
                            timestampChat: moment(
                              change.doc.data().timestamp
                            ).format("LT"),
                            timestamp: change.doc.data().timestamp,
                          });
                        }
                      }
                    });
                    this.FirstQuery = false;
                    this.lastDOC = this.Messages[0].timestamp;
                    $state.loaded();
                  } else {
                    $state.complete();
                  }
                });
              } else {
                const second = db
                  .collection("chats")
                  .doc(this.finalID)
                  .collection("messages")
                  .orderBy("timestamp", "desc")
                  .startAfter(this.lastDOC)
                  .limit(this.scrollsize);
                second.onSnapshot((res) => {
                  if (res.size !== 0) {
                    const changes = res.docChanges();
                    changes.forEach((change) => {
                      if (change.type === "added") {
                        this.Messages.unshift({
                          id: change.doc.id,
                          idSender: change.doc.data().idSender,
                          idReciver: change.doc.data().idReciver,
                          message: change.doc.data().message,
                          timestampChat: moment(
                            change.doc.data().timestamp
                          ).format("LT"),
                          timestamp: change.doc.data().timestamp,
                        });
                      }
                    });
                    this.lastDOC = this.Messages[0].timestamp;
                    $state.loaded();
                  } else {
                    $state.complete();
                  }
                });
              }
            }
          });
        });
    },
  },
};
</script>
<style scoped>
.get {
  background: #313131;
  border-radius: 0px;
  display: inline-block;
  max-width: 75%;
  word-wrap: break-word;
}
.sb1:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid #313131;
  border-top: 5px solid #313131;
  border-bottom: 5px solid transparent;
  left: -10px;
  top: 0px;
}
.send {
  background: #000000;
  border-radius: 0px;
  display: inline-block;
  max-width: 75%;
  word-wrap: break-word;
  align-content: right;
}
.sb2:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #000000;
  border-right: 10px solid transparent;
  border-top: 10px solid #000000;
  border-bottom: 10px solid transparent;
  right: -10px;
  top: 0px;
}
</style>
