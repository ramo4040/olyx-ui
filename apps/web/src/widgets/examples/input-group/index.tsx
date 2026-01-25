import "./style.css";

import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Input,
  InputAffix,
  InputIcon,
  InputWrapper,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@olyx/react";
import React from "react";

const paymentMethods = [
  {
    label: "Cards",
    options: [
      { value: "visa", label: "Visa" },
      { value: "mastercard", label: "Mastercard" },
    ],
  },
  {
    label: "Digital Wallets",
    options: [
      { value: "paypal", label: "PayPal" },
      { value: "apple-pay", label: "Apple Pay" },
    ],
  },
];

export const InputGroup = () => {
  return (
    <div data-ui="input-group">
      <InputWrapper>
        <InputAffix>https://</InputAffix>
        <Input placeholder="example.com" />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="Password" type="password" />
        <Tooltip>
          <TooltipTrigger
            render={
              <InputIcon>
                <HugeiconsIcon icon={AlertCircleIcon} />
              </InputIcon>
            }
          />
          <TooltipContent>
            Password must be at least 8 characters long.
          </TooltipContent>
        </Tooltip>
      </InputWrapper>

      <Select defaultValue="visa">
        <SelectTrigger>
          <SelectValue placeholder="Payment method" />
        </SelectTrigger>
        <SelectContent>
          {paymentMethods.map((group, index) => (
            <React.Fragment key={group.label}>
              <SelectGroup>
                <SelectLabel>{group.label}</SelectLabel>
                {group.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
              {index < paymentMethods.length - 1 && <SelectSeparator />}
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
