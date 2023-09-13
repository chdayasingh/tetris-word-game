import { Button, ButtonGroup, Box } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Controller = ({ onMoveLeft, onMoveDown, onMoveRight }) => {
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={onMoveLeft}>
            <ArrowLeftIcon></ArrowLeftIcon>
          </Button>
          <Button onClick={onMoveDown}>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>
          <Button onClick={onMoveRight}>
            <ArrowRightIcon></ArrowRightIcon>
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Controller;
