import { Icon } from "@/shared/components/atoms/icon/Icon";
import { Typography } from "@/shared/components/atoms/typography/Typography";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { ColumnContainer } from "@/shared/components/organism/containers/column-container/ColumnContainer";
import { Box } from "@mui/material";

export const RegularSalaryItem = () => {
  return (
    <OutlinedCard width="100px" height="50px" onClick={() => {}}>
      <Icon icon="folder" size="xl" />

      <ColumnContainer>
        <Box>
          <Typography>Diciembre</Typography>
          <Typography>2025</Typography>
        </Box>

        <Typography icon="green-dot">Cerrado</Typography>
      </ColumnContainer>
    </OutlinedCard>
  );
};
