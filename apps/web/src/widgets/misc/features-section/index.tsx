import {
  ArrowDown02Icon,
  CheckmarkCircle01Icon,
  CursorEdit02Icon,
  FileEmpty02Icon,
  SpamIcon,
} from "@hugeicons/core-free-icons";
import "./style.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge, Button, Tag } from "@olyx/react";

export const FeaturesSection = () => {
  return (
    <section data-ui="features-section">
      <div className="title">
        <h1>
          A <span>Design System</span> Built Like an Engine Experience the power
          of a <span>zero-conflict</span> styling architecture, where{" "}
          <span>HCT</span> color logic meets <span>native CSS</span> for
          ultimate creative freedom.
        </h1>
      </div>

      <div className="features-list">
        <div className="feature-item attr-styling">
          <div className="diagram">
            <div className="files">
              <div className="file">
                <HugeiconsIcon icon={FileEmpty02Icon} strokeWidth={0.5} />
                <Badge size="lg" className="name">
                  tokens.css
                </Badge>
              </div>

              <div className="connector">
                <div className="file-connector" />
                <div className="file-connector" />
                <div className="attr-name">
                  <Tag>data-ui="button"</Tag>
                  <div className="line" />
                </div>

                <div className="output">
                  <Button size="lg" mode="lighter">
                    Button
                  </Button>
                </div>
              </div>

              <div className="file">
                <HugeiconsIcon icon={FileEmpty02Icon} strokeWidth={0.5} />
                <Badge size="lg" className="name">
                  style.css
                </Badge>
              </div>
            </div>

            <div className="code-snippet">
              <div className="wrong">
                <HugeiconsIcon icon={SpamIcon} />
                <pre>
                  {`<button class="btn btn-primary btn-md">
    Button
</button>
`}
                </pre>
              </div>

              <div className="accepted">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} />
                <pre>
                  {`<button ui-slot="button" data-variant="primary">
    Button
</button>
`}
                </pre>
              </div>
            </div>
          </div>

          <div className="description">
            <h4>Zero-Conflict Styling</h4>
            <p>
              Style components using native CSS and data-ui attributes — no
              class name collisions, full freedom for user classes.
            </p>
          </div>
        </div>

        <div className="feature-item item-reverse hct">
          <div className="diagram">
            <div className="container">
              <div className="main-color" />
              <div className="color-list-wrapper">
                <div className="color-list">
                  <div className="primary">primary</div>
                  <div className="secondary">secondary</div>
                  <div className="tertiary">tertiary</div>
                  <div className="surface">surface</div>

                  <div className="success">success</div>
                  <div className="info">info</div>
                  <div className="warning">warning</div>
                  <div className="error">error</div>
                </div>

                <div className="on-color">
                  <div className="line" />
                  <div className="color-list">
                    <div className="on-primary">on-primary</div>
                    <div className="on-primary-container">
                      on-primary-container
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <h4>Hue-Driven Color System</h4>
            <p>
              Change one hue. Your entire color system adapts — accessible,
              balanced, and predictable.
            </p>
            <Tag>WCAG AA by construction.</Tag>
          </div>
        </div>

        <div className="feature-item tokens">
          <div className="diagram">
            <div className="container">
              <div className="stack-container">
                <div className="btn">
                  <div className="p-x" />
                  <div className="p-x" />
                  <div className="gap" />

                  <Button size="lg">
                    <HugeiconsIcon icon={CursorEdit02Icon} />
                    Button
                  </Button>
                </div>

                <div className="layer layer-1">misc</div>
                <div className="layer layer-2">components</div>
                <div className="layer layer-3">utilities</div>
                <div className="layer layer-4">Base</div>
                <div className="layer layer-5">Reset</div>
              </div>

              <div className="tokens-tag">
                <div>
                  <Tag className="token">var(--spacing-12)</Tag>
                  <Tag className="token">var(--radius-md)</Tag>
                  <Tag className="token">var(--font-body-md)</Tag>
                </div>

                <div>
                  <Tag className="token">var(--shadow-1)</Tag>
                  <Tag className="token">var(--color-primary)</Tag>
                  <Tag className="token">var(--transition-expressive)</Tag>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <h4>Design Tokens, Not Magic Numbers</h4>
            <p>
              Spacing, radius, shadows, typography, motion — everything is
              tokenized and consistent by default.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
