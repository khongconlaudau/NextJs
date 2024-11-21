import { log } from "console";
import React from "react";

type UserInforType = {
  params: Promise<{
    all : any
  }>;
};
async function User({ params }: UserInforType) {
  const all = (await params).all;
  return (
    <div>
      User: {all}

      <h1> All Routes:</h1>
      <ul>
        {all.map((p : any) => (
            <li id={Math.random().toString()}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
