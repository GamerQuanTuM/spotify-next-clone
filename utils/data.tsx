import Image from "next/image";
import Poster from "../public/reborn-rich-poster.jpeg";
import Poster2 from "../public/profile.jpg";
import BTS from "../public/BTS.jpg";
import Seventeen from "../public/Seventeen.jpg";
import GIDLE from "../public/G-IDLE.jpg";
import TWICE from "../public/TWICE.jpg";
import ITZY from "../public/ITZY.jpg";

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

export const carouselItem = [
    {
        id: 1,
        title: "Daily Mix 1",
        artist: "Tommorrow X Together, Stray Kids, BTS and more",
        image: Poster,
    },
    {
        id: 2,
        title: "Taste of Love",
        artist: "Twice",
        image: TWICE,
    },
    {
        id: 3,
        title: "Stay Alive (Prod. Suga of BTS)",
        artist: "Jungkook",
        image: Poster2,
    },
    {
        id: 4,
        title: "BTS",
        artist: "Artist",
        image: BTS,
    },
    {
        id: 5,
        title: "The Weekend",
        artist: "Artist",
        image: Poster,
    },
    {
        id: 6,
        title: "ITZY",
        artist: "Artist",
        image: ITZY,
    },
    {
        id: 7,
        title: "Seventeen",
        artist: "Artist",
        image: Seventeen,
    },
    {
        id: 8,
        title: "G-IDLE",
        artist: "Artist",
        image: GIDLE,
    },
];
