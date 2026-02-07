"use client";

import {
  Calendar03Icon,
  Delete02Icon,
  Edit02Icon,
  MoreVerticalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Progress,
  ProgressIndicator,
  ProgressTrack,
  ProgressValue,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@olyx/react";

const projects = [
  {
    id: "PRJ-001",
    name: "Mobile App Redesign",
    client: "TechStart Inc.",
    progress: 85,
    deadline: "Feb 15",
    tags: ["UI/UX", "Mobile"],
    priority: "high" as const,
  },
  {
    id: "PRJ-002",
    name: "E-commerce Platform",
    client: "RetailPro",
    progress: 42,
    deadline: "Apr 30",
    tags: ["Web", "Backend"],
    priority: "medium" as const,
  },
  {
    id: "PRJ-003",
    name: "Analytics Dashboard",
    client: "DataViz Corp",
    progress: 100,
    deadline: "Jan 10",
    tags: ["Dashboard", "Data"],
    priority: "low" as const,
  },
  {
    id: "PRJ-004",
    name: "API Integration",
    client: "ConnectHub",
    progress: 15,
    deadline: "Jun 1",
    tags: ["API", "Integration"],
    priority: "high" as const,
  },
];

const priorityConfig = {
  high: { status: "failed" as const, label: "High" },
  medium: { status: "warning" as const, label: "Medium" },
  low: { status: "info" as const, label: "Low" },
};

export default function Particle() {
  return (
    <Table>
      <TableCaption>Active projects and their progress</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead style={{ minWidth: 160 }}>Progress</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>
              <div>
                <div style={{ fontWeight: 500 }}>{project.name}</div>
                <div>{project.id}</div>
              </div>
            </TableCell>
            <TableCell>{project.client}</TableCell>
            <TableCell>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <Badge key={tag} mode="lighter" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <StatusBadge
                status={priorityConfig[project.priority].status}
                variant="stroke"
                doted
              >
                {priorityConfig[project.priority].label}
              </StatusBadge>
            </TableCell>
            <TableCell>
              <Progress value={project.progress} style={{ flex: 1 }}>
                <ProgressValue />
                <ProgressTrack>
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </TableCell>
            <TableCell>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <HugeiconsIcon icon={Calendar03Icon} size={14} />
                {project.deadline}
              </div>
            </TableCell>
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
                    <span style={{ flex: 1 }}>Archive</span>
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
