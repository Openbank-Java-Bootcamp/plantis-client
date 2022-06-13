function HomePage() {
  return (
    <div>
      <div>
        <h1>Welcome to Plantis!</h1>
      </div>
      <div>
        <p>An App where you can track your houseplants!</p>
      </div>

      <div>
        <a href="/signup">SignUp</a>
      </div>
      <div>
        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default HomePage;
