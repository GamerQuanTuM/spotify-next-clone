import Image from "next/image";
import Poster from "../public/reborn-rich-poster.jpeg";
import Poster2 from "../public/profile.jpg";

export const playlistContent = [
    {
        id: 1,
        name: "Liked Songs",
        image: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 2,
        name: "Reborn Rich OST",
        image: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 3,
        name: "Twice's Hit",
        image: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 4,
        name: "Kim Dong Han",
        image: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 5,
        name: "Daily Mix 2",
        image: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 6,
        name: "Daily Mix 1",
        image: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
];

