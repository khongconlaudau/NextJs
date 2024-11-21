import { redirect } from "next/navigation";
import React from "react";
type UserType = {
  params: Promise<{
    id: number;
  }>;
};
const User = async ({ params }: UserType) => {
  const id = (await params).id;
  if(id == 4){
    redirect("/");
  }
  return <div>ID: {id}</div>;
};

export default User;
