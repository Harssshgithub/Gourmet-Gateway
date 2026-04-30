export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}