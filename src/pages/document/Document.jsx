import { useEffect } from "react";
import useTitleSet from "../../hooks/useTitleSet";
import DemoCalander from "../../test/DemoCalander";
import Calander from "../../test/Calander";

const Document = () => {
  useTitleSet("Document");
  return (
    <div>
      {/* <DemoCalander /> */}
      <Calander />
    </div>
  );
};

export default Document;
