<template>
  <div class="d-flex vh-100">
    <div class="my-auto mx-auto align-self-center">
      <div class="card" style="width: 28rem">
        <div class="card-header">Register</div>
        <div class="card-body">
          <form @submit="onSubmit">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                v-model="user.username"
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="user.email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="passsword">Password</label>
              <input
                v-model="user.password"
                type="password"
                class="form-control"
                id="passsword"
                placeholder="Password"
              />
            </div>
            <!-- <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div> -->
            <br />
            <Button type="submit" style="btn btn-primary" text="Register" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Register",
  components: {
    Button,
  },

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
  },
};
</script>