"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.push(href);
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    // await sleep(500);
    
    // await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className="flex items-center gap-2">
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
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      e.preventDefault();
      router.push(href);
      const body = document.querySelector("body");
  
      body?.classList.add("page-transition");
  
    //   await sleep(500);
      
    //   await sleep(1500);
  
      body?.classList.remove("page-transition");
    };
  
    return (
      <Link {...props} href={href} onClick={handleTransition}>
        {children}
      </Link>
    );
  };
