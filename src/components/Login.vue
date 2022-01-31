<template>
  <div class="d-flex vh-100">
    <div class="my-auto mx-auto align-self-center">
      <div class="card" style="width: 28rem">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form @submit="onSubmit">
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
            <Button type="submit" style="btn btn-primary" text="Login" />
            <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import app from "fireb";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Register",
  components: {
    Button,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          // ..
        });
    },
  },
};
</script>