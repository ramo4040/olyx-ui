import "./style.css";
import {
  Alert02Icon,
  Delete02Icon,
  Edit02Icon,
  Logout03Icon,
  MoreVerticalIcon,
  Search01Icon,
  Settings02Icon,
  StatusIcon,
  Tick02Icon,
  TimeQuarter02Icon,
  UnavailableIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  CheckBox,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  InputIcon,
  InputWrapper,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  StatusBadge,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

export const TasksExample = () => {
  const totalEstimate = tasks.reduce((acc, task) => {
    const hours = Number.parseInt(task.timeEstimate, 10);
    return acc + hours;
  }, 0);

  return (
    <div data-ui="tasks-page-example">
      <header>
        <div className="details">
          <h3>Welcome Back!</h3>
          <p>Here's a list of your tasks for this month.</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="avatar-trigger">
            <Avatar size={44}>
              <AvatarImage
                src="https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75"
                alt="Profile image"
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <HugeiconsIcon icon={UserIcon} />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Settings02Icon} />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem style={{ color: "var(--color-error)" }}>
              <HugeiconsIcon icon={Logout03Icon} />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <div className="filter-menu">
        <div className="filters">
          <InputWrapper className="search">
            <InputIcon>
              <HugeiconsIcon icon={Search01Icon} />
            </InputIcon>
            <Input placeholder="Search tasks..." />
          </InputWrapper>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="primary" mode="lighter">
                  <HugeiconsIcon icon={StatusIcon} />
                  Status
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem defaultChecked>
                <HugeiconsIcon icon={TimeQuarter02Icon} />
                In Progress
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem defaultChecked>
                <HugeiconsIcon icon={Tick02Icon} />
                Done
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem defaultChecked>
                <HugeiconsIcon icon={Alert02Icon} />
                Pending
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem defaultChecked>
                <HugeiconsIcon icon={UnavailableIcon} />
                Blocked
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Button variant="primary">Add Task</Button>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <CheckBox aria-label="Select all" />
              </TableHead>
              <TableHead className="task-column">Task</TableHead>
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
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
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
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
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
                          <Button
                            variant="neutral"
                            mode="ghost"
                            asIcon
                            size="sm"
                          >
                            <HugeiconsIcon icon={MoreVerticalIcon} />
                          </Button>
                        }
                      />
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <HugeiconsIcon icon={Edit02Icon} />
                          <span style={{ flex: 1 }}>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          style={{ color: "var(--color-error)" }}
                        >
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
      </div>

      <div className="pagination">
        <p className="selected-count">0 of {tasks.length} row(s) selected</p>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious />
              </PaginationItem>
              {Array.from({ length: 7 }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink href="#" data-active={index === 4}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

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
  {
    id: "TSK-105",
    title: "Mobile app deployment",
    assignee: {
      name: "Taylor Swift",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=128&h=128&dpr=2&q=80",
    },
    timeEstimate: "5h",
    timeSpent: "1h 45m",
    status: "in-progress" as const,
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
