import React from "react"
import { useSession, signIn, signOut } from "next-auth/react";
import { data } from "autoprefixer";

const login = () => {
    const { data: session} = useSession();

  if (session) {
    return (
        <div>
            <p>Welcome, {data.user.email}</p>
            <button onClick={()=> signOut()}>Sign out</button>
        </div>
    );
  }
  else {
    return(
        <div>
            <p>You are not signed in.</p>
            <button onClick={()=> signIn()}>Sign in</button>
        </div>
    );
  }
};

export default login;