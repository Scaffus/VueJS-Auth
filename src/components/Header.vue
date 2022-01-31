<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <HeaderLink to="/" text="Home" />
          <HeaderLink to="/about" text="About" />
          <HeaderLink to="/login" text="Login" />
          <HeaderLink to="/register" text="Register" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderLink from "@/components/HeaderLink";
export default {
  name: "Header",
  components: {
    HeaderLink,
  },
};
</script>