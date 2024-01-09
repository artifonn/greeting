export const Clock = () => {
  const fullTime = Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
  let greeding = '';

  return(
    <>
      <div className="text-9xl font-bold">
        {fullTime}
      </div>
      <div className="text-5xl font-bold">
        {hour >= 0 && hour < 12 && 'Bom Dia 🙂'}
        {hour >= 12 && hour < 18 && 'Boa Tarde 😎'}
        {hour >= 18 && hour < 23 && 'Boa Noite 😴'}
      </div>
    </>
  );
}