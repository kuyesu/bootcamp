import React from 'react'
import Get from './get'
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
export default async function page() {
     const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }
  return (
      <>
          <Get />
      </>
  )
}
