const teste = {
  userId: 1,
  date: "10/11/2021",
  localization: "São Paulo - SP",
  description: "generc description",
  name: "Manutenção de geladeira",
  category: "Serviços",
  id: 1,
};

export const AdvertsCards = ({
  index,
  name,
  date,
  localization,
  category,
  id,
  userId,
  description,
}) => {
  return (
    <div key={index}>
      <div>
        <div>{name}</div>
        <div>{date}</div>
        <div>{localization}</div>
        <div>{category}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
