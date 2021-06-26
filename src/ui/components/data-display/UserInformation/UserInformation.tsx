import React from "react";
import {
  UserInformationContainer,
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserName,
} from "./UserInformation.style";

type UserInformationsProps = {
  picture: string;
  name: string;
  rating: number;
  description?: string;
};

const UserInformation = ({
  name,
  picture,
  rating,
  description,
}: UserInformationsProps) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>{" "}
      {/*Se não tiver foto exibira primeira letra do nome*/}
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
