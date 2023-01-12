export default function days(commentDate: Date) {
  const date1: any = new Date();
  const date2: any = new Date(commentDate);

  const daysComment = (date1 - date2) / 86400000;
  return Math.trunc(daysComment);
}
