import { v4 as uuidv4 } from "uuid";

const songList = () => {
  return [
    {
      name: Zenith,
      artist: Leavv,
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9927",
      id: uuidv4(),
      active: true,
    },
  ];
};

export default songList;