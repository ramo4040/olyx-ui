"use client";

import {
  Alert02Icon,
  Calendar03Icon,
  Delete02Icon,
  Edit02Icon,
  MoreVerticalIcon,
  Tick02Icon,
  TimeQuarter02Icon,
  UnavailableIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  CheckBox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Progress,
  ProgressValue,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from "@/components/ui";

// example 1
const teamMembers = [
  {
    id: "1",
    name: "Elena Rodriguez",
    email: "elena@company.io",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&dpr=2&q=80",
    role: "Engineering Lead",
    department: "Engineering",
    status: "active" as const,
    joinDate: "Mar 15, 2023",
  },
  {
    id: "2",
    name: "Marcus Chen",
    email: "marcus@company.io",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80",
    role: "Product Designer",
    department: "Design",
    status: "active" as const,
    joinDate: "Jun 22, 2023",
  },
  {
    id: "3",
    name: "Aisha Patel",
    email: "aisha@company.io",
    avatar: "",
    role: "Data Analyst",
    department: "Analytics",
    status: "away" as const,
    joinDate: "Jan 8, 2024",
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james@company.io",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&dpr=2&q=80",
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

const TableTeamMembersExample = () => {
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
};

// example 2

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

const TableProjectTrackerExample = () => {
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
                  <Badge key={tag} variant="lighter" mode="default" size="sm">
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
};

// example 3

const tasks = [
  {
    id: "TSK-101",
    title: "Implement user authentication",
    assignee: {
      name: "Sarah Kim",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&dpr=2&q=80",
    },
    timeEstimate: "8h",
    timeSpent: "6h 30m",
    status: "in-progress" as const,
  },
  {
    id: "TSK-102",
    title: "Design system documentation",
    assignee: {
      name: "Alex Turner",
      avatar: "",
    },
    timeEstimate: "12h",
    timeSpent: "12h",
    status: "completed" as const,
  },
  {
    id: "TSK-103",
    title: "API endpoint optimization",
    assignee: {
      name: "Jordan Lee",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&dpr=2&q=80",
    },
    timeEstimate: "4h",
    timeSpent: "0h",
    status: "pending" as const,
  },
  {
    id: "TSK-104",
    title: "Database migration script",
    assignee: {
      name: "Casey Brooks",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&dpr=2&q=80",
    },
    timeEstimate: "6h",
    timeSpent: "2h 15m",
    status: "blocked" as const,
  },
];

const taskStatusConfig = {
  "in-progress": {
    status: "info" as const,
    label: "In Progress",
    icon: TimeQuarter02Icon,
  },
  completed: { status: "success" as const, label: "Done", icon: Tick02Icon },
  pending: {
    status: "warning" as const,
    label: "Pending",
    icon: Alert02Icon,
  },
  blocked: {
    status: "failed" as const,
    label: "Blocked",
    icon: UnavailableIcon,
  },
};

const TableTaskListExample = () => {
  const totalEstimate = tasks.reduce((acc, task) => {
    const hours = Number.parseInt(task.timeEstimate, 10);
    return acc + hours;
  }, 0);

  return (
    <Table>
      <TableCaption>Sprint tasks with time tracking</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <CheckBox aria-label="Select all" />
          </TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Estimate</TableHead>
          <TableHead>Time Spent</TableHead>
          <TableHead>Status</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, i) => {
          const statusInfo = taskStatusConfig[task.status];
          return (
            <TableRow key={task.id}>
              <TableCell>
                <CheckBox
                  aria-label={`Select ${task.title}`}
                  defaultChecked={i < 2}
                />
              </TableCell>
              <TableCell>
                <div>
                  <p style={{ fontWeight: 500 }}>{task.title}</p>
                  <p>{task.id}</p>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Avatar size={28}>
                    <AvatarImage
                      src={task.assignee.avatar}
                      alt={task.assignee.name}
                    />
                    <AvatarFallback>
                      {task.assignee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{task.assignee.name}</span>
                </div>
              </TableCell>
              <TableCell>{task.timeEstimate}</TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <HugeiconsIcon icon={TimeQuarter02Icon} size={14} />
                  {task.timeSpent}
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={statusInfo.status} variant="light">
                  <HugeiconsIcon icon={statusInfo.icon} />
                  {statusInfo.label}
                </StatusBadge>
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
                      <span style={{ flex: 1 }}>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} style={{ fontWeight: 500 }}>
            Total Estimated
          </TableCell>
          <TableCell>{totalEstimate}h</TableCell>
          <TableCell colSpan={3} />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export const TableExample = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TableTeamMembersExample />
      <TableProjectTrackerExample />
      <TableTaskListExample />
    </div>
  );
};
