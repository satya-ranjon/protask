import React, { useEffect, useRef, useState } from "react";
import { LiaTagsSolid } from "react-icons/lia";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import backgroundColorArray from "../../../data/backgroundColor";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../../services/task/taskSlice";
import {
  useCreateTagsMutation,
  useDeleteTagMutation,
  useGetAllTagsQuery,
} from "../../../services/user/userApi";
import { v4 as uuidv4 } from "uuid";
import useOutsideClick from "../../../hooks/useOutsideClick";

const TagsSet = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isSuccess } = useGetAllTagsQuery();
  const [createTag] = useCreateTagsMutation();
  const [deleteTag] = useDeleteTagMutation();
  const selectTag = useSelector((state) => state.taskSlice.task.tags);
  const [filteredData, setFilteredData] = useState(data?.tags);

  // Dispatch
  const dispatch = useDispatch();

  // Ref for the dropdown
  const dropdownRef = useRef(null);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  // Handle search input changes
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Update the filtered data based on the search query
  useEffect(() => {
    const filterData = (query) => {
      const filtered = isSuccess
        ? data.tags?.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
        : [];
      setFilteredData(filtered);
    };
    filterData(searchQuery);
  }, [searchQuery, data, isSuccess]);

  // Handle selecting a tag
  const handleTagSelection = (id) => {
    const selectedTag = data.tags?.find((item) => item.id === id);
    if (!selectTag.some((tag) => tag.id === id)) {
      dispatch(addTag(selectedTag));
    }
  };

  // Handle removing a tag
  const handleTagRemoval = (id, event) => {
    event.stopPropagation();
    dispatch(removeTag(id));
  };

  // Generate a random background color
  const bgColor =
    backgroundColorArray[
      Math.round(Math.random() * backgroundColorArray.length - 1)
    ];

  // Create a new tag and add it to state
  const createTags = async (e) => {
    e.stopPropagation();
    const generateTagId = uuidv4();
    const newTag = {
      id: generateTagId,
      name: searchQuery,
      color: bgColor,
    };
    createTag(newTag);
    dispatch(addTag(newTag));
    setSearchQuery("");
  };

  // Remove a tag from the database
  const removeTagFromDatabase = (id, event) => {
    event.stopPropagation();
    deleteTag(id);
  };

  // Render selected tags
  const renderSelectedTags = () =>
    selectTag?.map((tag) => (
      <span
        key={tag.id}
        className={`${tag.color} mr-1 text-dark p-1 px-2 text-xs rounded-sm flex justify-start gap-1 items-center min-w-fit`}>
        <p>{tag.name}</p>
        <AiOutlineClose
          className="cursor-pointer"
          onClick={(event) => handleTagRemoval(tag.id, event)}
        />
      </span>
    ));

  // Render tag options
  const renderTagOptions = () =>
    tagList?.map((item) => (
      <div
        className="cursor-pointer flex gap-2 justify-start items-center"
        key={item.id}>
        <div className="text-xl p-1 hover:bg-gray-100 duration-300 transition-colors relative">
          <AiOutlineDelete onClick={(e) => removeTagFromDatabase(item.id, e)} />
        </div>
        <span
          className={`p-1 px-3 text-dark ${item.color}`}
          onClick={() => handleTagSelection(item.id)}>
          {item.name}
        </span>
      </div>
    ));

  // Determine the tag list to display
  const tagList = searchQuery ? filteredData : isSuccess && data.tags;

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
          onClick={toggleDropdown}>
          {selectTag.length > 0 ? renderSelectedTags() : <span>Empty</span>}
        </div>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute w-full max-w-[800px] z-50 top-0 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-2">
            <div className="flex w-full bg-gray-200 p-1 z-50 flex-wrap">
              {renderSelectedTags()}
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
            {/* Tag options */}
            <div className="flex flex-col gap-2 mt-2 max-h-[400px]  overflow-scroll overflow-x-hidden task">
              {renderTagOptions()}
            </div>
            {/* Create new tag */}
            {filteredData?.length === 0 && searchQuery?.length > 0 && (
              <div
                className="flex justify-start cursor-pointer gap-2 items-center p-1 bg-gray-100"
                onClick={(e) => createTags(e)}>
                <p className="text-dark text-xs p-1 ">Create</p>
                <span
                  className={`${bgColor} mr-1 text-dark p-1 px-2 text-xs rounded-sm`}>
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
