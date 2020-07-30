import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ButtonLink({ className, href, children }) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
