import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import { VARIANT_COLOR } from "../../ThemeSelector/ThemeSelector";

function RegisterToast() {
  const toast = useToast();
  return (
    <Button
      variantColor={VARIANT_COLOR}
      width="full"
      mt={4}
      className="register btn"
      type="submit"
      name="submit"
      value="Register"
      onClick={() =>
        toast({
          title: "Account created.",
          description: "Your account has been created.",
          status: "success",
          duration: 3000,
          isClosable: false,
        })
      }
    >
      Register
    </Button>
  );
}

export default RegisterToast;
