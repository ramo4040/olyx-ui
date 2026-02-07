"use client";

import {
  Delete02Icon,
  Edit02Icon,
  MoreVerticalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  CheckBox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from "@olyx/react";

const teamMembers = [
  {
    id: "1",
    name: "Yassir Rouane",
    email: "yassir@olyxui.com",
    avatar:
      "https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75",
    role: "Engineering Lead",
    department: "Engineering",
    status: "active" as const,
    joinDate: "Mar 15, 2023",
  },
  {
    id: "2",
    name: "Marcus Chen",
    email: "marcus@olyxui.com",
    avatar: "",
    role: "Product Designer",
    department: "Design",
    status: "active" as const,
    joinDate: "Jun 22, 2023",
  },
  {
    id: "3",
    name: "Aisha Patel",
    email: "aisha@olyxui.com",
    avatar: "",
    role: "Data Analyst",
    department: "Analytics",
    status: "away" as const,
    joinDate: "Jan 8, 2024",
  },
  {
    id: "4",
    name: "Yassir Rouane",
    email: "yassir@olyxui.com",
    avatar:
      "https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75",
    role: "Backend Developer",
    department: "Engineering",
    status: "offline" as const,
    joinDate: "Sep 1, 2024",
  },
];

const statusConfig = {
  active: { status: "success" as const, label: "Active" },
  away: { status: "warning" as const, label: "Away" },
  offline: { status: "disabled" as const, label: "Offline" },
};

export default function Particle() {
  return (
    <Table>
      <TableCaption>Team directory with current status</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: 40 }}>
            <CheckBox aria-label="Select all" />
          </TableHead>
          <TableHead>Member</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead style={{ width: 48 }} />
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamMembers.map((member) => (
          <TableRow key={member.id}>
            <TableCell>
              <CheckBox aria-label={`Select ${member.name}`} />
            </TableCell>
            <TableCell>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar size={36}>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p style={{ fontWeight: 500 }}>{member.name}</p>
                  <p>{member.role}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Tag variant="lighter">{member.department}</Tag>
            </TableCell>
            <TableCell>
              <StatusBadge
                status={statusConfig[member.status].status}
                variant="stroke"
                doted
              >
                {statusConfig[member.status].label}
              </StatusBadge>
            </TableCell>
            <TableCell>{member.joinDate}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="neutral" mode="ghost" asIcon size="sm">
                      <HugeiconsIcon icon={MoreVerticalIcon} />
                    </Button>
                  }
                />
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <HugeiconsIcon icon={Edit02Icon} />
                    <span style={{ flex: 1 }}>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem style={{ color: "var(--color-error)" }}>
                    <HugeiconsIcon icon={Delete02Icon} />
                    <span style={{ flex: 1 }}>Remove</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
