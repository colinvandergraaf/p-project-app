'use client';

import Link from 'next/link';
import { Settings, User, Grid, Calendar } from 'react-feather';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const icons = { Settings, User, Grid, Calendar };
const SidebarLink = ({ Link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }
  // rendered in serverCompenent
  // you can serialize a component across the network barrier
  // we're using a client component within a server compenent
  const Icon = icons[link.icon];

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
          isActive && 'stroke-violet-600',
        )}
      />
    </Link>
  );
};

export default SidebarLink;
