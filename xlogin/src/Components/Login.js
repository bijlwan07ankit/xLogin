import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setSubmitted(true);
    } else {
      setError("Invalid username or password");
      setSubmitted(false);
    }
  };
  // const [verifyPassword, setVerifyPassword] = useState("");
  return (
    <div>
      <h1>Login Page</h1>
      {submitted ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              required
              name="username"
              type="text"
              value={username}
            />
            <br />
            <label htmlFor="Password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              name="Password"
              type="text"
              value={password}
            />
            <br />
          </div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}