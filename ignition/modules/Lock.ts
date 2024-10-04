import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AreaofShapesModule = buildModule("AreaofShapesModule", (m) => {
  const Areaofshapes = m.contract("AreaofShapes");

  return { Areaofshapes };
});

export default AreaofShapesModule;
