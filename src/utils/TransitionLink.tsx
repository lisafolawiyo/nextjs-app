'use client';
import React from 'react';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    router.push(href);
    const body = document.querySelector('body');

    body?.classList.add('page-transition');

    body?.classList.remove('page-transition');
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      className="flex items-center gap-2"
    >
      {children}
    </Link>
  );
};

export const TransitionProductLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    router.push(href);
    const body = document.querySelector('body');

    body?.classList.add('page-transition');

    body?.classList.remove('page-transition');
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
