"use client";

import { Button } from "@/components/ui/button";

const ButtonShineHoverDemo = () => {
  return (
    <Button
      className="text-primary-foreground bg-actrivo hover:bg-actrivo/90 cursor-pointer btn-shine"
    >
      Shine Hover
    </Button>
  );
};

export default ButtonShineHoverDemo;
