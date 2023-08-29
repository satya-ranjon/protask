import useTitleSet from "../../hooks/useTitleSet";

const data = {
  "2023-8-29": [
    {
      _id: "64edf54ec0fe28d20f670011",
      userId: "64e50f74ee5476e8db5bfef2",
      title: "Hello",
      description: null,
      date: "2023-8-29",
      starttime: "00:00",
      endtime: "00:00",
      sleipner: [],
      createdAt: "2023-08-29T13:40:30.126Z",
      updatedAt: "2023-08-29T13:40:30.126Z",
      __v: 0,
    },
    {
      _id: "64edf552c0fe28d20f670018",
      userId: "64e50f74ee5476e8db5bfef2",
      title: "New One",
      description: null,
      date: "2023-8-29",
      starttime: "00:00",
      endtime: "00:00",
      sleipner: [],
      createdAt: "2023-08-29T13:40:34.796Z",
      updatedAt: "2023-08-29T13:40:34.796Z",
      __v: 0,
    },
    {
      _id: "64ee2bffed7d543c264a0b37",
      userId: "64e50f74ee5476e8db5bfef2",
      title: "React Project ",
      description: null,
      date: "2023-8-29",
      starttime: "10:20",
      endtime: "16:20",
      sleipner: [],
      createdAt: "2023-08-29T17:33:51.346Z",
      updatedAt: "2023-08-29T17:33:51.346Z",
      __v: 0,
    },
    {
      _id: "64ee2f98368682606fdb56e5",
      userId: "64e50f74ee5476e8db5bfef2",
      title: "Python",
      description: [
        {
          id: "99ebd807-5f4e-4610-b4f7-09358d83ba33",
          type: "paragraph",
          props: {
            textColor: "default",
            backgroundColor: "default",
            textAlignment: "left",
          },
          content: [
            {
              type: "text",
              text: "Hello One",
              styles: {},
            },
          ],
          children: [],
        },
        {
          id: "8703a745-a331-45c3-9169-ba8e3f0c5381",
          type: "paragraph",
          props: {
            textColor: "default",
            backgroundColor: "default",
            textAlignment: "left",
          },
          content: [],
          children: [],
        },
      ],
      date: "2023-8-29",
      starttime: "16:30",
      endtime: "21:29",
      sleipner: [],
      createdAt: "2023-08-29T17:49:12.514Z",
      updatedAt: "2023-08-29T17:49:12.514Z",
      __v: 0,
    },
  ],
};
const Document = () => {
  useTitleSet("Document");

  return <div></div>;
};

export default Document;
