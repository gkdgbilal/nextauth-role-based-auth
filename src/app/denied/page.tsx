import Link from "next/link";
import React from "react";

const Denied = () => {
  return (
    <section className='flex flex-col items-center gap-12'>
      <h1 className='text-5xl'>Access Denied</h1>
      <p className='max-w-2xl text-3xl text-center'>
        You are logged in, but do not have the required access level to view
        this page.
      </p>
      <Link href='/' className='p-4 text-3xl underline border rounded-lg shadow-lg border-slate-700 shadow-slate-700'>
        Return to Home Page
      </Link>
    </section>
  );
};

export default Denied;
