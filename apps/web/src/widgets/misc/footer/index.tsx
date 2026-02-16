import { Logo } from "@/components/misc";
import "./style.css";
import { LinkButton } from "@olyx/react";
import { GitHubIcon } from "@/assets/svg/github";
import { siteConfig } from "@/lib/config";

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
            <a
              href={siteConfig.github}
              className="icon"
              aria-label="View GitHub repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const bottomLinksSet = [
  {
    label: "License",
    url: "/license",
  },
  {
    label: "Changelog",
    url: "/changelog",
  },
  {
    label: "llms.txt",
    url: "/llms.txt",
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
      { label: "Theme generator", url: "/theme-generator" },
    ],
  },
];
