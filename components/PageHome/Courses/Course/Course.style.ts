import { Box, Card } from "@mui/material";
import { styled } from "@mui/system";

export const Course = styled(Card)`
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 0.8rem;
`;

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
