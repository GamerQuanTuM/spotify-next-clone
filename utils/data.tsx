import Image from "next/image";
import Poster from "../public/reborn-rich-poster.jpeg";
import Poster2 from "../public/profile.jpg";

export const playlistContent = [
    {
        id: 1,
        name: "Liked Songs",
        img: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 2,
        name: "Reborn Rich OST",
        img: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 3,
        name: "Twice's Hit",
        img: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 4,
        name: "Kim Dong Han",
        img: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 5,
        name: "Daily Mix 2",
        img: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
    {
        id: 6,
        name: "Daily Mix 1",
        img: <Image src={Poster} height={100} width={100} alt="playlist-image" />,
    },
];

export const carouselItem = [
    {
        id: 1,
        title: "Daily Mix 1",
        artist: "Tommorrow X Together, Stray Kids, BTS and more",
        img: Poster,
    },
    {
        id: 2,
        title: "Taste of Love",
        artist: "Twice",
        img: Poster2,
    },
    {
        id: 3,
        title: "Stay Alive (Prod. Suga of BTS)",
        artist: "Jungkook",
        img: Poster,
    },
    {
        id: 4,
        title: "BTS",
        artist: "Artist",
        img: Poster,
    },
    {
        id: 5,
        title: "The Weekend",
        artist: "Artist",
        img: Poster,
    },
    {
        id: 6,
        title: "ITZY",
        artist: "Artist",
        img: Poster,
    },
];
