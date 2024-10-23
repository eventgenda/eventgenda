"use client";

import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/stores/auth.store";
import { UserProfileType } from "@/types/user.type";
import Cookies from "js-cookie";
import React, { useEffect, useCallback } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = Cookies.get("token");

  const setAuthentication = useAuthStore(
    useCallback((state) => state.setAuthentication, []),
  );
  const setUser = useAuthStore(useCallback((state) => state.setUser, []));

  const { userProfileQuery } = useAuth();

  useEffect(() => {
    if (token && userProfileQuery?.data) {
      setAuthentication(true);
      setUser(userProfileQuery.data.data as UserProfileType);
    }
  }, [token, setAuthentication, setUser, userProfileQuery]);

  return <div className="w-full h-screen">{children}</div>;
}
