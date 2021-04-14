<template>
  <div>
    <v-container style="background-color:black;" fluid>
      <v-row>
        <v-col cols="12">
          <v-row style="height:100px;" align="center" justify="center">
            <v-col cols="12">
              <div style="color:white;" class="display-1 text-center">
                Download Our App
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-divider style="background-color:white;"></v-divider>
            <v-col cols="2" xs="1" sm="1" md="1" lg="1" xl="1">
              <v-img
                width="100%"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/asd%20(1).png?alt=media&token=0c660cb4-0e94-44de-bf6b-8bacecb8b79b"
                src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/asd%20(1).png?alt=media&token=0c660cb4-0e94-44de-bf6b-8bacecb8b79b"
              >
              </v-img>
            </v-col>
            <v-divider style="background-color:white;"></v-divider>
          </v-row>
          <v-row style="height:500px;" align="center" justify="center">
            <v-col cols="11" xs="8" sm="8" md="7" lg="7" xl="6">
              <p class="text-center" style="color:white;">
                Below you will find our desktop application, a dashboard that
                you will receive for free when purchasing a product of ours,
                regarding the creation of a site (Presentation Site). It is an
                application that helps you more easily track the vital data of
                your site, with a simple interface, perfect for data management.
                We are currently at version v.0.0.2. Launch date June 25, 2020.
                It is still in the test area, if you encounter problems do not
                hesitate to let us know. The next update will appear in early
                July.
              </p>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <p
                    v-bind="attrs"
                    v-on="on"
                    class="text-center"
                    style="color:white;text-decoration:underline;cursor:pointer"
                  >
                    System Requirements
                  </p>
                </template>
                <v-card>
                  <v-tabs
                    v-model="tab"
                    color="white"
                    background-color="grey"
                    slider-color="black"
                    centered
                  >
                    <v-tab>Windows</v-tab>
                    <v-tab>MAC OS X</v-tab>
                    <v-tab>Linux</v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="System in Systems" :key="System">
                      <v-card flat>
                        <component :is="System"></component>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-row align="end" justify="center">
            <v-btn
              outlined
              color="white"
              tile
              href="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/FastStartUp_Setup_Installer.msi?alt=media&token=f0f45c6f-e831-4076-af04-c10eccfdb6b2"
              >download</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "AppPage",
  components: {
    Windows: () => import("../System Requirements/Windows"),
    MACOSX: () => import("../System Requirements/MACOSX"),
    Linux: () => import("../System Requirements/Linux"),
  },
  data() {
    return {
      dialog: false,
      tab: null,
      Systems: ["Windows", "MACOSX", "Linux"],
    };
  },
};
</script>
<style scoped>
@media screen and (min-width: 1904px) {
  p {
    font-size: 36px;
  }
}
@media screen and (max-width: 1904px) {
  p {
    font-size: 26px;
  }
}
@media screen and (max-width: 1264px) {
  p {
    font-size: 24px;
  }
}
@media screen and (max-width: 960px) {
  p {
    font-size: 14px;
  }
}
@media screen and (max-width: 600px) {
  p {
    font-size: 17px;
  }
}
</style>
