import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(d, onlyDate = true) {
  const date = dayjs(d);
  if (onlyDate || date.year() === dayjs().year())
    return date.format("MMM D");
  return date.format("MMM D, YYYY");
}

export { cn as c, formatDate as f };
//# sourceMappingURL=index-CjI2AfFO.mjs.map
