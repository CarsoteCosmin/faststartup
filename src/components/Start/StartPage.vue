<template>
  <div style="width:100vw">
    <v-app style="background-color:black;">
      <div class="sections-menu" style="z-index: 2;">
        <span
          id="hidephone"
          class="menu-point"
          v-bind:class="{ active: activeSection == index }"
          v-on:click="scrollToSection(index)"
          v-for="(offset, index) in offsets"
          v-bind:key="index"
        >
        </span>
      </div>
      <v-main>
        <Particles1 />
        <section class="fullpage">
          <v-col cols="7">
            <v-row align="center" justify="center" style="height:100vh;">
              <v-img
                height="14%"
                class="floating"
                src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/titlu%20(1).png?alt=media&token=6ad12ca4-9af1-4fed-833e-d2c1453f94a2"
              ></v-img>
            </v-row>
          </v-col>
          <!-- <v-fab-transition>
              <v-btn
                v-scroll="onScroll"
                v-show="fab"
                bottom
                fab
                color="white"
                large
                fixed
                @click="$vuetify.goTo('#getstarted')"
              >
                <v-icon color="black" large>mdi-arrow-down</v-icon>
              </v-btn>
            </v-fab-transition> -->
          <!-- <v-btn
            class="mb-2"
            bottom
            right
            absolute
            outlined
            color="white"
            @click="offerpage()"
          >
            <v-card-text style="color:white;" class="pa-0"
              >get started</v-card-text
            >
          </v-btn> -->
        </section>
      </v-main>
      <v-divider style="background-color:white;"></v-divider>
      <section class="fullpage">
        <v-card color="black">
          <v-row style="height:100%;" no-gutters>
            <v-col cols="12">
              <v-row
                align="end"
                justify="center"
                style="height:10vh;"
                no-gutters
              >
                <v-col>
                  <p style="color:white;" class="text-center titlu pt-2">
                    A little introduction
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-row
              align="center"
              justify="center"
              style="height:90vh;"
              no-gutters
            >
              <v-col cols="10" xs="11" sm="10" md="10" lg="10" xl="10">
                <p
                  style="color:white;line-height:200%;"
                  class="text-center text"
                >
                  FastStartUp is an enthusiastic young company that aims to help
                  develop our society, make life easier and save time. Our
                  company aims to facilitate several vital processes from
                  starting a company, growing a company and developing a
                  company. We present services to promote your company,
                  integration in the online environment, vital for a company
                  nowadays, ensuring the safety and efficiency of your team.
                  Take a look at the services we provide!
                </p>
              </v-col>
            </v-row>
          </v-row>
        </v-card>
      </section>
      <v-divider style="background-color:white;"></v-divider>
      <v-main>
        <section id="getstarted" class="fullpage">
          <Particles2 />
          <v-row
            align="center"
            justify="center"
            style="height:100%;"
            no-gutters
          >
            <v-btn
              large
              tile
              outlined
              depressed
              color="white"
              @click="offerpage()"
            >
              <v-card-text style="color:white;" class="pa-0"
                >get started</v-card-text
              >
            </v-btn>
          </v-row>
        </section>
      </v-main>
      <!-- <section class="fullpage">
        <Footer />
      </section> -->
    </v-app>
  </div>
</template>
<script>
// import Footer from "../Footer/Footer";
export default {
  name: "StartPage",
  components: {
    Particles1: () => import("./Particles1"),
    Particles2: () => import("./Particles2"),
    // Footer,
  },
  data() {
    return {
      fab: true,
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },
  methods: {
    offerpage() {
      this.$router.push("/offers");
    },
    // onScroll(e) {
    //   if (typeof window === "undefined") return;
    //   const top = window.pageYOffset || e.target.scrollTop || 0;
    //   this.fab = top <= 15;
    // },
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;
      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")
        // eslint-disable-next-line no-unexpected-multiline
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 500);
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
  },
  mounted() {
    this.calculateSectionOffsets();
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    });
    // window.addEventListener("touchstart", this.touchStart, { passive: false });
    // window.addEventListener("touchmove", this.touchMove, { passive: false });
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    });
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
    // window.removeEventListener("touchstart", this.touchStart);
    // window.removeEventListener("touchmove", this.touchMove);
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1100px) {
  #hidephone {
    display: none;
  }
}
.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
.sections-menu .menu-point {
  width: 9px;
  height: 9px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
  cursor: pointer;
}
.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
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
@media screen and (min-width: 1904px) {
  p.titlu {
    font-size: 65px;
  }
  p.text {
    font-size: 45px;
  }
}
@media screen and (max-width: 1904px) {
  p.titlu {
    font-size: 53px;
  }
  p.text {
    font-size: 38px;
  }
}
@media screen and (max-width: 1264px) {
  p.titlu {
    font-size: 43px;
  }
  p.text {
    font-size: 28px;
  }
}
@media screen and (max-width: 960px) {
  p.titlu {
    font-size: 30px;
  }
  p.text {
    font-size: 20px;
  }
}
@media screen and (max-width: 600px) {
  p.titlu {
    font-size: 25px;
  }
  p.text {
    font-size: 16px;
  }
}
@media screen and (max-width: 500px) {
  p.titlu {
    font-size: 24px;
  }
  p.text {
    font-size: 16px;
  }
}
@media screen and (max-width: 300px) {
  p.titlu {
    font-size: 15px;
  }
  p.text {
    font-size: 7px;
  }
}
</style>
