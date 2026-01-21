export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatList(list: string[]) {
  return list.join(" • ");
}
