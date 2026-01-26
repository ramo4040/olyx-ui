import { Logo } from "@/components/misc";
import "./style.css";
import { LinkButton } from "@olyx/react";
import Link from "next/link";
import { GitHubIcon } from "@/assets/svg/github";

export const Footer = () => {
  return (
    <footer data-ui="olyx-footer">
      <div className="footer">
        <div className="details">
          <div className="about">
            <div className="logo">
              <Logo /> <p>Olyx</p>
            </div>
          </div>

          <div className="links-set-container">
            {linksSet.map((e) => {
              return (
                <div key={e.name}>
                  <h5>{e.name}</h5>
                  <div className="links">
                    {e.links.map((e) => {
                      return (
                        <LinkButton href={e.url} key={e.label}>
                          {e.label}
                        </LinkButton>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="copyright">
          <div className="details">
            <p>@ 2026 Olyx</p>
            {bottomLinksSet.map((e) => {
              return (
                <LinkButton href={e.url} size="sm" key={e.label}>
                  {e.label}
                </LinkButton>
              );
            })}
          </div>

          <div className="social-links">
            <Link href={"/"} className="icon">
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const bottomLinksSet = [
  {
    label: "License",
    url: "",
  },
  {
    label: "FAQ",
    url: "",
  },
  {
    label: "Changelog",
    url: "",
  },
  {
    label: "llms.txt",
    url: "",
  },
];

const linksSet = [
  {
    name: "Pages",
    links: [
      { label: "How to install ", url: "" },
      { label: "How to customize ", url: "" },
      { label: "Color system ", url: "" },
    ],
  },
  {
    name: "Products",
    links: [
      { label: "Component library", url: "" },
      { label: "Theme generator", url: "" },
    ],
  },
  {
    name: "Compare Libraries",
    links: [{ label: "Shadcn/ui vs Olyx ui", url: "" }],
  },
];
