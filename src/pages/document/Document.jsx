import { useEffect } from "react";
import useTitleSet from "../../hooks/useTitleSet";
import DemoCalander from "../../test/DemoCalander";

const Document = () => {
  useTitleSet("Document");
  return (
    <div>
      <DemoCalander />
    </div>
  );
};

export default Document;
