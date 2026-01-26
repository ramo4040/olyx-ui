import "./style.css";

import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  Tag,
} from "@olyx/react";
import Image from "next/image";

export const ProductCardExample = () => {
  return (
    <div data-ui="product-card-example">
      <div className="image">
        <Image src="/images/product.png" alt="Product Image" fill />
      </div>

      <div className="details">
        <h4 className="title">Product Title</h4>
        <div className="badges">
          <Tag>Over-Ear</Tag>
          <Tag>Bluetooth</Tag>
          <Tag>Wireless</Tag>
        </div>
        <div className="count">
          <span className="price">$200.00</span>
          <NumberField defaultValue={100}>
            <NumberFieldGroup>
              <NumberFieldIncrement
                render={
                  <Button variant="primary" mode="lighter" size="sm" asIcon>
                    <HugeiconsIcon icon={Add01Icon} />
                  </Button>
                }
              />

              <NumberFieldInput />

              <NumberFieldDecrement
                render={
                  <Button variant="primary" mode="lighter" size="sm" asIcon>
                    <HugeiconsIcon icon={MinusSignIcon} />
                  </Button>
                }
              />
            </NumberFieldGroup>
          </NumberField>
        </div>
      </div>
    </div>
  );
};
