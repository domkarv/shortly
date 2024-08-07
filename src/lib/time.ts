export type TimeLimit =
  | '1hr'
  | '2hr'
  | '3hr'
  | '5hr'
  | '8hr'
  | '10hr'
  | '12hr'
  | '18hr'
  | '1d'
  | '2d'
  | '3d'
  | '5d';

export const EXPIRY_VALUES: TimeLimit[] = [
  '1hr',
  '2hr',
  '3hr',
  '5hr',
  '8hr',
  '10hr',
  '12hr',
  '18hr',
  '1d',
  '2d',
  '3d',
  '5d',
];

export const getExpiryTime = (limit: TimeLimit): Date => {
  const now = new Date();

  const num =
    limit.length > 2
      ? parseInt(limit.slice(0, -2))
      : parseInt(limit.slice(0, -1));

  const unit = limit.length > 2 ? limit.slice(-2) : limit.slice(-1);

  switch (unit) {
    case 'hr':
      now.setHours(now.getHours() + num);
      break;
    case 'd':
      now.setDate(now.getDate() + num);
      break;
    default:
      throw new Error(`Invalid time limit: ${limit}`);
  }

  return now;
};

export const formatDate = (dateStr: Date) => {
  const date = new Date(dateStr);

  return `${dateStr > new Date() ? 'Valid till ' : 'Expired at '} ${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear().toString().slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
};
