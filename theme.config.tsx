import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import roll from "../roll-docs/images/form.svg";

console.log(roll);

const config: DocsThemeConfig = {
  logo: <img src={roll.src} style={{ height: 40, width: 160 }} />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Form Testnet Docs" />
      <meta
        property="og:description"
        content="Get started on Form Testnet by adding to Metamask, receiving faucet funds, and deploying smart contracts."
      />
    </>
  ),
  primaryHue: 242,
  nextThemes: { defaultTheme: "light", forcedTheme: "light" },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Form Testnet Docs",
    };
  },
};

export default config;
