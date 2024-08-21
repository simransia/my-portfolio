declare module "*.glb" {
  const content: any;
  export default content;
}

declare module "maath/random" {
  export const random: any;
}

declare module "@/models/*" {
  import React from "react";
  const Component: React.FC<any>;
  export default Component;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}
