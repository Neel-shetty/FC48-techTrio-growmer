import { useWindowDimensions } from "react-native";

export const layout = () => {
  const layout = useWindowDimensions();
  console.log("🚀 ~ file: layout.ts:5 ~ layout ~ layout:", layout);
  return {
    height: layout.height,
    width: layout.width,
    widthp: layout.width * 0.9,
  };
};
