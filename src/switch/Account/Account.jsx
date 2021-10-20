import React, { useState, useContext } from "react";
import { UserContext } from "../../utils/Context";
import { userExists } from "../../utils/Account";
import { useLogIn } from "../../Hooks/LogIn";

const Account = () => {
  const { user, loggedIn, setUser, avatar, trueName } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");

  if (loggedIn)
    return (
      <>
        <img src={avatar} alt="avatar" />
        <p>Logged in as {user}</p>
        <p>Name: {trueName}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser(null);
            localStorage.clear();
          }}
        >
          Log out
        </button>
      </>
    );

  if (!loggedIn)
    return (
      <section>
        <h2>Log In:</h2>
        <form
          onSubmit={(e) => {
            console.log(userInput, "submit");

            userExists(userInput)
              ? setUser(() => {
                  console.log(userInput, "in the cb");
                  return userInput;
                })
              : setUser(() => {
                  console.log("failed");
                });
            console.log("user set to", user);
            setUserInput("");
            e.preventDefault();
          }}
        >
          <input
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            id="username"
            placeholder="Guest? Try cooljmessy"
          ></input>
          <button> Log In</button>
        </form>
      </section>
    );
};

export default Account;
