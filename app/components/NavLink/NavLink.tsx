import { Children, cloneElement, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import cx from "classnames";
import Link, { LinkProps } from "next/link";

type NavLinkProps = PropsWithChildren<LinkProps> & {
  activeClassName?: string;
  className?: string;
};

const NavLink = ({
  children,
  activeClassName = "active",
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || "";

  const isActive = asPath === props.href || asPath === props.as;

  const className = cx(childClassName, { [activeClassName]: isActive });

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default NavLink;
