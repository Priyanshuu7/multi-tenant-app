'use client';

import React from 'react';
import { UserButton, OrganizationSwitcher } from '@clerk/nextjs';

function Navbar() {
  return (
    <nav className=" p-4 flex items-center justify-between">
      <div>
        <h1 className="font-semibold text-2xl">Tenant Apllication</h1>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug " />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
