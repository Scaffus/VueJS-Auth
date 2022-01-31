<template>
  <router-link @click="this.$emit('btn-click')" :to="link" class="nav-link">{{
    text
  }}</router-link>
</template>

<script>
export default {
  name: "HeaderLink",
  props: {
    link: String,
    text: String,
  },
};
</script>