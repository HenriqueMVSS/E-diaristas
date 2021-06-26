import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

type PageTitle = {
  title: string;
  subtitle?: string | JSX.Element;
  children?: string | JSX.Element;
};

const PageTitle = (props: PageTitle) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      {props.subtitle}
    </PageTitleContainer>
  );
};
export default PageTitle;
