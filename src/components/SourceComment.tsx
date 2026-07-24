import { Text } from "@ps1ui/core";

type SourceCommentProps = {
  children: string;
};

export function SourceComment({ children }: SourceCommentProps) {
  return <Text variant="subtle">{`// ${children}`}</Text>;
}
