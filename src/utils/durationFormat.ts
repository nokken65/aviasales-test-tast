const durationFormat = (duration: number): string => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);

  return `${hours} ч ${minutes} м`;
};

export default durationFormat;
