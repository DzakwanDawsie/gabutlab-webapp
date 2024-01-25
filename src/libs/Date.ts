export function idLocaleDate(timestamp: string, style: "full" | "long" | "medium" | "short" = 'full'): string {
  const date = new Date(timestamp);
  
  return date.toLocaleString('id-ID', {dateStyle: style, timeStyle: 'short', timeZone: 'UTC'});
}

export function timeAgo(timestamp: string) {
  const currentTime = new Date();
  const postTime = new Date(timestamp);

  const timeDifference: number = currentTime.getTime() - postTime.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "a few second ago"
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours < 24) {
    return hours + " hours ago";
  } else {
    return days + " days ago";
  }
}