<template>
  <div>
    <v-card height="100%">
      <v-footer padless>
        <v-card
          style="background-color:#313131;"
          flat
          tile
          width="100%"
          height="100%"
          class="text-center"
        >
          <v-card-text>
            <v-btn
              v-for="Footericon in Footericons"
              :key="Footericon.icon"
              :href="Footericon.link"
              target="_blank"
              class="mx-4"
              icon
            >
              <v-icon color="white" size="24px">{{ Footericon.icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider color="white"></v-divider>
          <v-card-text class="pb-0">
            <v-col cols="12">
              <v-row align="center" justify="center">
                <a
                  v-for="FooterLink in FooterLinks"
                  :key="FooterLink.name"
                  :href="FooterLink.link"
                  style="color:white;"
                  class="mx-3 text-center"
                >
                  <div>{{ FooterLink.name }}</div>
                </a>
              </v-row>
            </v-col>
          </v-card-text>
          <v-card-text class="white--text">
            <div>
              &copy; {{ new Date().getFullYear() }}
              <strong>FastStartUp<br /></strong>
              <strong>v 0.0.2</strong>
            </div>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      Footericons: [
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/FastStartUp1 ",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/faststart-up-6057641b1/",
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/0faststartup1/",
        },
      ],
      FooterLinks: [
        { name: "Support", link: "/support/login" },
        { name: "Terms & Conditions", link: "/terms&conditions" },
        { name: "Contact Us", link: "mailto:faststartupcontact@gmail.com" },
      ],
    };
  },
};
</script>
