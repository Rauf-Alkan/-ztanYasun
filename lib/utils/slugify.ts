const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9ğüşöçı\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default slugify;
