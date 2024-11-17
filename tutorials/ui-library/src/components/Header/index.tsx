import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";



interface HeaderProps {

  title: string;
  version: number;
  handleHeaderClick: () => void;

}
const Header = ({ title, version, handleHeaderClick }: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
    handleHeaderClick();
  }

  return (
    <Box
      component="header"
      onClick={handleClick}
    >
      <Container maxWidth="sm">
         <Typography variant="h1">

          {menuPrinted ? `${title}... and rarely do we hate it!` : title}

        </Typography>

      </Container>
      <h4>Version: {version}</h4>
    </Box>
  );
};

export default Header;
