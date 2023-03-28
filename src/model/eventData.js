import avatar from "../images/avatar.png";
import thumbnail from "../images/thumbnail.png";

const time1 = new Date(Date.now() - 1000 * (60 * 7));
const time2 = new Date(Date.now() - 1000 * (60 * 14));
const time3 = new Date(Date.now() - 1000 * (60 * 27));

export default [
  {
    id: "1",
    key: "1",
    eventName: "Julia & William Wedding",
    createdAt: time1.toISOString(),
    clientName: "Emma Brown",
    guessCount: 50,
    status: "in progress",
    avatar: avatar,
    thumbnail: thumbnail,
    eventDate: "20 June 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id. Molestias commodi provident ducimus debitis eum animi atque voluptatibus perspiciatis, pariatur aut expedita repellendus saepe, illum dolorem quibusdam sed quam?",
  },
  {
    id: "2",
    key: "2",
    eventName: "Mario & Luigi Wedding",
    createdAt: time2.toISOString(),
    clientName: "Bowser",
    guessCount: 75,
    status: "in progress",
    avatar: avatar,
    thumbnail: thumbnail,
    eventDate: "20 July 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id. Molestias commodi provident ducimus debitis eum animi atque voluptatibus perspiciatis, pariatur aut expedita repellendus saepe, illum dolorem quibusdam sed quam?",
  },
  {
    id: "3",
    key: "3",
    eventName: "Popeye & Olive Wedding",
    createdAt: time3.toISOString(),
    clientName: "Bruno",
    guessCount: 100,
    status: "expired",
    avatar: avatar,
    thumbnail: thumbnail,
    eventDate: "20 August 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id. Molestias commodi provident ducimus debitis eum animi atque voluptatibus perspiciatis, pariatur aut expedita repellendus saepe, illum dolorem quibusdam sed quam?",
  },
];
