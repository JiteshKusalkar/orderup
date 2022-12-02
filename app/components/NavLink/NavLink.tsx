import { Children, cloneElement, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import cx from "classnames";
import Link, { LinkProps } from "next/link";

type NavLinkProps = PropsWithChildren<LinkProps> & {
  activeClassName?: string;
  className?: string;
};

function NavLink({
  children,
  activeClassName = "active",
  ...props
}: NavLinkProps) {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || "";

  console.log("asPath", asPath, "props.href", props.href, "props.as", props.as);

  const isActive = asPath === props.href || asPath === props.as;

  const className = cx(childClassName, { [activeClassName]: isActive });

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}

export default NavLink;
