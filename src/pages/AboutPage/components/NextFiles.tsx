import { Button, Stack } from "@ps1ui/core";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const NEXT_FILES = [
  { to: "/works", file: "works.tsx" },
  { to: "/notes", file: "notes.md" },
] as const;

export function NextFiles() {
  return (
    <Stack direction="row" wrap gap="sm">
      {NEXT_FILES.map((next) => (
        <Button key={next.to} as={Link} to={next.to} variant="secondary">
          {next.file}
          <ArrowRight size={14} aria-hidden="true" />
        </Button>
      ))}
    </Stack>
  );
}
