import dayjs from "dayjs";

export function formatNoteDate(publishedAt: string): string {
  return dayjs(publishedAt).format("YYYY.MM");
}
