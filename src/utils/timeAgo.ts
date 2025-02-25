// Calculates and returns a formatted string on how much time has passed since passed date
const timeAgo = (date: Date, shorten: boolean = false) => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  switch (shorten) {
    case true:
      if (seconds < 60) {
        return `Prieš ${seconds} s.`;
      } else if (minutes < 60) {
        return `Prieš ${minutes} min.`;
      } else if (hours < 24) {
        return `Prieš ${hours} h.`;
      } else if (days < 30) {
        return `Prieš ${days} d.`;
      } else if (months < 12) {
        return `Prieš ${months} mėn.`;
      } else {
        return `Prieš ${years} m.`;
      }
    case false:
      if (seconds < 60) {
        return `Prieš ${seconds} sekund${seconds !== 1 ? 'žių' : 'ę'}`;
      } else if (minutes < 60) {
        return `Prieš ${minutes} minu${minutes !== 1 ? 'tes' : 'tę'}`;
      } else if (hours < 24) {
        return `Prieš ${hours} valand${hours !== 1 ? 'ų' : 'ą'}`;
      } else if (days < 30) {
        return `Prieš ${days} dien${days !== 1 ? 'ų' : 'ą'}`;
      } else if (months < 12) {
        return `Prieš ${months} mėnesi${months !== 1 ? 'ų' : 'į'}`;
      } else {
        return `Prieš ${years} metus`;
      }
  }
}

export default timeAgo
