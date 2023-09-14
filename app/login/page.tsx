export default function Login() {
  return (
    <main className="row justify-content-center align-items-center vh-100">
      <div className="col-sm-6 shadow rounded bg-white p-4">
        <h2 class="mb-3">Log In</h2>
        <form className="login-form d-flex flex-column gap-2" action="">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="">
              Username
            </label>
            <input
              className="col-sm-6"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="">
              Password
            </label>
            <input
              className="col-sm-6"
              type="text"
              name="password"
              id="password"
            />
          </div>
          <div class="mb-3 text-center">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
