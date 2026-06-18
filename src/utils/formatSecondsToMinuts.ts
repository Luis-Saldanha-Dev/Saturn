export function fortmatSecondsToMinuts(seconds: number) {
  const minuts = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsRemaining = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minuts}:${secondsRemaining}`;
}
