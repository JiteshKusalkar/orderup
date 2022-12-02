import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type GetLayout = (page: ReactElement) => ReactElement;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

const nestLayout = (parent: GetLayout, child: GetLayout): GetLayout => {
  return (page) => parent(child(page));
};

export default nestLayout;
