import { Box, Grid } from "@chakra-ui/layout";

export const AdvertsCards = ({
  index,
  name,
  date,
  localization,
  category,
  id,
  userId,
  description,
  delet,
}) => {
  return (
    <div key={index}>
      <div>
        <div>{name}</div>
        <div>{date}</div>
        <div>{localization}</div>
        <div>{category}</div>
        <div>{description}</div>
        <button onClick={() => delet(id)}>Delete</button>
      </div>
    </div>
  );
};
