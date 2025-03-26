"use client";

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const userInfo = {
    user,
    setUser,
    loading,
    setIsLoading,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error("Error");
  }
  return context;
};
