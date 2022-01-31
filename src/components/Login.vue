<template>
  <div class="d-flex vh-100">
    <div class="my-auto mx-auto align-self-center">
      <div class="card" style="width: 28rem">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>