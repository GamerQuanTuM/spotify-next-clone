"use client"
import React, { ReactNode } from "react";
import { ParallaxProvider as Provider } from "react-scroll-parallax";

type Props = {
  children: ReactNode;
}

const ParallaxProvider = ({ children }: Props) => {
  return <Provider>{children}</Provider>;
};

export default ParallaxProvider;