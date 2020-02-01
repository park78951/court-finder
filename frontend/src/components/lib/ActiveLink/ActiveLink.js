import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children, ...otherProps }) => {
  const router = useRouter();
  let className = children.props.className || '';
  if(router.pathname === href) {
    className = `${className} selected`
  }
  return <Link href={href} {...otherProps}>{React.cloneElement(children, { className })}</Link>
};

export default ActiveLink;