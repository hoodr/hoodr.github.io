import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from "styled-system";

export const Box = styled.div<
  SpaceProps & FlexboxProps & LayoutProps & ColorProps & TypographyProps
>({ boxSizing: "border-box" }, layout, space, flexbox, color, typography);

export const Flex = styled(Box)({
  display: "flex",
});

export const FlexColumn = styled(Flex)({
  flexDirection: "column",
});

export const FlexRow = styled(Flex)({
  flexDirection: "row",
});
