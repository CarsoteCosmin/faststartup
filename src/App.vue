<template>
  <div>
    <v-app>
      <v-main>
        <transition name="fade">
          <router-view />
        </transition>
        <!-- <Test/> -->
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>
<script>
// import Test from '../src/components/Test'
export default {
  name: "App",
  components: {
    // Test
    Footer: () => import("../src/components/Footer/Footer"),
  },
  data() {
    return {};
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 0px;
  background-color: rgb(0, 0, 0);
}
::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: rgb(190, 190, 190);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity, 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
