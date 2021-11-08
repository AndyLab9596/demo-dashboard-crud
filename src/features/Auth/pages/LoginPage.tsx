import React, { useEffect } from "react";
import userApi from "../../../api/userApi";

export interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  useEffect(() => {
    (async () => {
      try {
        const res = await userApi.getAll();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return <div>Login Page</div>;
};

export default LoginPage;
