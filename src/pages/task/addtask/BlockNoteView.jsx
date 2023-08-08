import { useDispatch, useSelector } from "react-redux";
import { updateDocument } from "../../../services/task/createTaskSlice";

const BlockNoteView = () => {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.createTask.description);

  const handleDocument = (value) => {
    dispatch(updateDocument(value));
  };

  return (
    <textarea
      name="document"
      rows="10"
      placeholder="Write hare"
      className="w-full outline-none "
      value={description}
      onChange={(e) => handleDocument(e.target.value)}
    />
  );
};

export default BlockNoteView;
