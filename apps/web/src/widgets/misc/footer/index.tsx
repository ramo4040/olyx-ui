import { Logo } from "@/components/misc";
import "./style.css";
import { LinkButton } from "@olyx/react";
import Link from "next/link";
import { GitHubIcon } from "@/assets/svg/github";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                        <LinkButton
                          href={e.url}
                          key={e.label}
                          underline={false}
                        >
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
            <p>©{currentYear} Olyx</p>
            {bottomLinksSet.map((e) => {
              return (
                <LinkButton
                  href={e.url}
                  size="sm"
                  key={e.label}
                  underline={false}
                >
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
      { label: "How to install ", url: "/docs/get-started" },
      { label: "How to customize ", url: "/docs/handbook/styling" },
      { label: "Color system ", url: "/docs/handbook/colors" },
    ],
  },
  {
    name: "Products",
    links: [
      { label: "Component library", url: "/docs" },
      { label: "Theme generator", url: "" },
    ],
  },
];
