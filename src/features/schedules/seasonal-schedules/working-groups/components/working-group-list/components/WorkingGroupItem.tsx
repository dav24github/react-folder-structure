import { Icon } from "@/shared/components/atoms/icon/Icon";
import { Typography } from "@/shared/components/atoms/typography/Typography";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { RowContainer } from "@/shared/components/organism/containers/row-container/RowContainer";
import { Box } from "@mui/material";

export const WorkingGroupItem = () => {
  return (
    <OutlinedCard width="100px" height="50px" onClick={() => {}}>
      <RowContainer>
        <Icon icon="users" size="xl" />

        <Box>
          <Typography>{data.name}</Typography>
          <Typography>{data.totalMembers} trabajadores</Typography>
        </Box>
      </RowContainer>
    </OutlinedCard>
  );
};

// Salary
{
  /* 
    <OutlinedCard width="100px" height="200px" direction="row">
        <Icon icon="users" size="xl" />

        <Box>
            <Typography>Diciembre</Typography>
            <Typography>2024</Typography>
        </Box>
    </OutlinedCard> 
*/
}

// Shared Component (json?)
// width="100px"
// height="200px"
