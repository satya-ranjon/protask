import { useEffect, useRef, useState } from "react";
import { LiaTagsSolid } from "react-icons/lia";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import backgroundColorArray from "../../../data/backgroundColor";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../../services/task/createTaskSlice";
import {
  useCreateTagsMutation,
  useDeleteTagMutation,
  useGetAllTagsQuery,
} from "../../../services/user/userApi";
import { v4 as uuidv4 } from "uuid";

const TagsSet = () => {
  // To control the open/close state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // To hold the search query entered by the user
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isSuccess } = useGetAllTagsQuery();
  const [createTag] = useCreateTagsMutation();
  const [deleteTag] = useDeleteTagMutation();

  const selectTag = useSelector((state) => state.createTask.tags);

  const [filteredData, setFilteredData] = useState(data?.tags);

  const tagList = searchQuery ? filteredData : isSuccess && data.tags;

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredData(data?.tags);
  }, [data?.tags]);

  const dropdownRef = useRef(null);

  // Function to handle opening/closing of the dropdown
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // Function to handle clicks outside the dropdown
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Function to handle search input changes
  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    // Function to filter data based on the search query
    const filterData = (query) => {
      const filtered = isSuccess
        ? data.tags?.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
        : [];
      setFilteredData(filtered);
    };
    filterData(searchQuery);
  }, [searchQuery]);

  // Function to handle selecting a status option
  const selectTags = (id) => {
    const searchTag = data.tags?.find((item) => item.id === id);
    const findIdex = selectTag?.findIndex((item) => item.id === id);
    if (findIdex === -1) {
      dispatch(addTag(searchTag));
    }
  };

  // Function to remove the selected status
  const removeSelectTag = (id, event) => {
    event.stopPropagation();
    dispatch(removeTag(id));
  };

  const bgColor =
    backgroundColorArray[
      Math.round(Math.random() * backgroundColorArray.length - 1)
    ];

  const createTags = async (e) => {
    e.stopPropagation();
    const generateTagId = uuidv4();

    const newTag = {
      id: generateTagId,
      name: searchQuery,
      color: bgColor,
    };
    await createTag(newTag);
    dispatch(addTag(newTag));
    setSearchQuery("");
  };

  const removeTagDataBase = async (id, e) => {
    e.stopPropagation();
    await deleteTag(id);
  };
  return (
    <div
      ref={dropdownRef}
      className="flex justify-start items-center w-full text-dark-light text-sm">
      {/* Dropdown header */}
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 ">
        <LiaTagsSolid className="text-xl" />
        <span>Tags</span>
      </div>
      {/* Dropdown content */}
      <div className="w-[75%]  hover:bg-gray-100 p-2 duration-300 transition-colors relative">
        <div
          className="w-full flex flex-wrap cursor-pointer"
          onClick={handleIsOpen}>
          {/* Display the selected status or "Empty" */}
          {selectTag?.length > 0 ? (
            selectTag?.map((tag) => (
              <span
                key={tag.id}
                className={`${tag.color} mr-1 text-dark p-1 px-2 text-xs rounded-sm`}>
                {tag.name}
              </span>
            ))
          ) : (
            <span>Empty</span>
          )}
        </div>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute w-full max-w-[800px] top-0 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-2">
            <div className="flex w-full bg-gray-200 p-1 z-50 flex-wrap">
              {/* Display the selected status (if any) with a close button */}
              {selectTag?.length > 0 &&
                selectTag?.map((tag) => (
                  <span
                    key={tag.id}
                    className={`${tag.color} text-dark p-1 px-2 text-xs rounded-sm flex justify-start gap-1 items-center min-w-fit mr-1 `}>
                    <p> {tag.name} </p>
                    <AiOutlineClose
                      className="cursor-pointer"
                      onClick={(event) => removeSelectTag(tag.id, event)} // Pass the event here
                    />
                  </span>
                ))}
              {/* Search input */}

              <input
                type="text"
                name="search"
                placeholder="Search and Create Tags"
                className="bg-transparent w-full p-1 outline-none"
                onChange={handleSearchInputChange}
                value={searchQuery}
              />
            </div>
            <p className="text-xs mt-1 text-dark-light">
              Select an option from the Tags
            </p>
            {/* Status options */}
            <div className="flex flex-col gap-2 mt-2 max-h-[400px]  overflow-scroll overflow-x-hidden task">
              {tagList?.map((item) => (
                <div
                  className="cursor-pointer flex gap-2 justify-start items-center"
                  key={item.id}>
                  <div className="text-xl p-1 hover:bg-gray-100 duration-300 transition-colors relative">
                    <AiOutlineDelete
                      onClick={(e) => removeTagDataBase(item.id, e)}
                    />
                  </div>
                  <span
                    className={`p-1 px-3 text-dark ${item.color}`}
                    onClick={() => selectTags(item.id)}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            {filteredData?.length === 0 && searchQuery?.length > 0 && (
              <div
                className="flex justify-start cursor-pointer gap-2 items-center p-1 bg-gray-100"
                onClick={(e) => createTags(e)}>
                <p className="text-dark text-xs p-1 ">Create</p>
                <span
                  className={` ${bgColor} mr-1 text-dark p-1 px-2 text-xs rounded-sm`}>
                  {searchQuery}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagsSet;
