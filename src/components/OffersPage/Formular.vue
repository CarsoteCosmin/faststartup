<template>
  <div>
    <v-container class="pa-0" fluid style="height:100vh;">
      <iframe
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://forms.app/form/5eee16578e85e063f7fb3bb7"
        frameborder="0"
        style="width: 1px; min-width:100%; height:100%; border:none;"
      ></iframe>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Formular",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 3px;
  box-shadow: inset 6px 6px 6px rgb(0, 0, 0);
}
::-webkit-scrollbar-thumb {
  border-radius: 0px;
  box-shadow: inset 6px 6px 6px rgb(190, 190, 190);
}
</style>
