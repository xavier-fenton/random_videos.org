import { FireBaseAuthProvider } from "@component/lib/_providers/FireBaseAuthProvider";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <FireBaseAuthProvider>{children}</FireBaseAuthProvider>
  )
};

export default AuthLayout;