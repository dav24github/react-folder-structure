import { Box } from "@mui/material";
import clsx from "clsx";
import { CardBody } from "../common/CardBody";

export const ElevatedCard = ({ title, body,  }: CardProps) => {
  return (
    <Box className={clsx(classes.card, classes["elevated-card"])}>
        {/* <Box className={classes["elevated-header"]} */}
        {title && children.length === 1?
            <CardTitle variant="h1" color="primary">{title}</CardTitle>
            :
            children[0]
        }
        {children.length === 1?
            <CardBody>{children}</CardBody>
            :
            children.length === 2?
            children[1]
            :
            children.length === 3?
            children[3]
            :
            // if not CardBody
            <Error/>
        }
    </Box>
  );
};

// EXAMPLES
<ElevatedCard title="Card">
    <div>My body</div>
    <div>My body</div>
    <div>My body</div>
    <div>My body</div>
    <div>My body</div>
<ElevatedCard/>
{/* ******* */}

<ElevatedCard>
    <CardTitle
        icon="persons"
        center
        toolbar={
            <Toolbar>
                <Button/>
                <Button/>
            </Toolbar>
        }
    >
        Mi Title
    </CardTitle>

    <CardBody>
        <div>My body</div>
    </CardBody>
<ElevatedCard/>
