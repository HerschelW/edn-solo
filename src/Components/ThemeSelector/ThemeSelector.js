import React from "react";

const { useColorMode, Box, IconButton } = require("@chakra-ui/core");

export const VARIANT_COLOR = "teal";
export const PRIMARY_COLOR = "cyan";

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

export default ThemeSelector;
