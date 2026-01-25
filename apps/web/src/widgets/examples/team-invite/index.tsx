"use client";

import "./style.css";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  CheckBox,
  Field,
  FieldLabel,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
} from "@olyx/react";
import { useState } from "react";

const members = [
  {
    id: "kv",
    name: "Kevin Powell",
    handle: "@kv",
    avatar: "https://www.kevinpowell.co/img/f21b00ed-600.avif",
    fallback: "KP",
  },
  {
    id: "lloyd",
    name: "Lloyd Still",
    handle: "@lloyd",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&dpr=2&q=80",
    fallback: "LS",
  },
  {
    id: "hajib",
    name: "Hajib",
    handle: "@hajib",
    avatar: "",
    fallback: "HJ",
  },
];

export const TeamInvite = () => {
  const [selected, setSelected] = useState(["kv", "lloyd"]);

  return (
    <div data-ui="team-invite">
      <Fieldset>
        <FieldsetLegend>Share with team</FieldsetLegend>
        <FieldsetDescription>
          Select team members to collaborate on this project.
        </FieldsetDescription>

        <div className="members-list">
          {members.map((member) => (
            <Field key={member.id}>
              <FieldLabel className="member-item">
                <div className="member-info">
                  <Avatar size={40}>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="user-info">
                    <span className="user-name">{member.name}</span>
                    <span className="user-handle">{member.handle}</span>
                  </div>
                </div>

                <CheckBox
                  checked={selected.includes(member.id)}
                  onCheckedChange={(checked) => {
                    setSelected((prev) =>
                      checked
                        ? [...prev, member.id]
                        : prev.filter((id) => id !== member.id),
                    );
                  }}
                />
              </FieldLabel>
            </Field>
          ))}
        </div>
      </Fieldset>
    </div>
  );
};
