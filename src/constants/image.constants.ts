export type ImageConfigType = {
  size: number;
  types: string[];
};

export const AvatarConfig: ImageConfigType = {
  size: 1024 * 1024 * 2,
  types: ["image/jpeg", "image/png"],
};
