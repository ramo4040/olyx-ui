"use client";

import "./style.css";
import { useState } from "react";
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
} from "@/components/ui";

const members = [
  {
    id: "seb",
    name: "Seb Jachec",
    handle: "@seb",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=128&h=128&dpr=2&q=80",
    fallback: "SJ",
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
    id: "jeroen",
    name: "Jeroen Riemens",
    handle: "@jeroen",
    avatar: "",
    fallback: "JR",
  },
];

export const TeamInvite = () => {
  const [selected, setSelected] = useState(["seb", "lloyd"]);

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
