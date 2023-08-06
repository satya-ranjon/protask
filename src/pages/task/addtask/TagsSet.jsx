import { useEffect, useRef, useState } from "react";
import { LiaTagsSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";
import backgroundColorArray from "../../../data/backgroundColor";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../../services/task/createTaskSlice";

// Initial status options
const initialStatus = [
  { id: "1", tag: "Javascript", color: "bg-red-200" },
  { id: "2", tag: "Python", color: "bg-teal-200" },
  { id: "3", tag: "Exam", color: "bg-orange-200" },
  { id: "4", tag: "Programming", color: "bg-green-200" },
];

const TagsSet = () => {
  // To control the open/close state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // To hold the search query entered by the user
  const [searchQuery, setSearchQuery] = useState("");

  // this state handle redux just practice //TODO
  const [initialTags, setInitialTags] = useState(initialStatus);

  const selectTag = useSelector((state) => state.createTask.tags);

  const [filteredData, setFilteredData] = useState(selectTag);

  const tagList = searchQuery ? filteredData : initialTags;

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredData(initialTags);
  }, [initialTags]);

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
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Function to handle search input changes
  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    filterData(searchQuery);
  }, [searchQuery]);

  // Function to filter data based on the search query
  const filterData = (query) => {
    const filtered = initialStatus.filter((item) =>
      item.tag.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to handle selecting a status option
  const selectTags = (id) => {
    const searchTag = initialStatus.find((item) => item.id === id);
    const findIdex = selectTag?.findIndex((item) => item.id === id);
    if (findIdex === -1) {
      dispatch(addTag(searchTag));
    }
  };

  // Function to remove the selected status
  const removeSelectTag = (id, event) => {
    event.stopPropagation(); // Stop the event from propagating to the parent container
    dispatch(removeTag(id));
  };

  const bgColor =
    backgroundColorArray[
      Math.round(Math.random() * backgroundColorArray.length - 1)
    ];

  const createTags = (e) => {
    e.stopPropagation();
    const newTag = { id: Math.random() * 50, tag: searchQuery, color: bgColor };
    setInitialTags((prv) => [...prv, newTag]);
    dispatch(addTag(newTag));
    setSearchQuery("");
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
        <div className="w-full cursor-pointer" onClick={handleIsOpen}>
          {/* Display the selected status or "Empty" */}
          {selectTag?.length > 0 ? (
            selectTag?.map((tag) => (
              <span
                key={tag.id}
                className={`${tag.color} mr-1 text-dark p-1 px-2 text-xs rounded-sm`}>
                {tag.tag}
              </span>
            ))
          ) : (
            <span>Empty</span>
          )}
        </div>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute w-full top-0 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-2">
            <div className="flex w-full bg-gray-200 p-1 z-50">
              {/* Display the selected status (if any) with a close button */}
              {selectTag?.length > 0 &&
                selectTag?.map((tag) => (
                  <span
                    key={tag.id}
                    className={`${tag.color} text-dark p-1 px-2 text-xs rounded-sm flex justify-start gap-1 items-center min-w-fit mr-1`}>
                    <p> {tag.tag} </p>
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
                placeholder="Search and Add Tags"
                className="bg-transparent w-full p-1 outline-none"
                onChange={handleSearchInputChange}
                value={searchQuery}
              />
            </div>
            <p className="text-xs mt-1 text-dark-light">
              Select an option from the Tags
            </p>
            {/* Status options */}
            <div className="flex flex-col gap-2 mt-2">
              {tagList?.map((item) => (
                <div
                  className="cursor-pointer flex gap-2 justify-start items-center"
                  key={item.id}>
                  <div className="text-xl p-1 hover:bg-gray-100 duration-300 transition-colors">
                    <CgMenuMotion />
                  </div>
                  <span
                    className={`p-1 px-3 text-dark ${item.color}`}
                    onClick={() => selectTags(item.id)}>
                    {item.tag}
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
