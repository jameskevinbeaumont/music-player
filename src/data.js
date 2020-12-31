import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Sleepover",
            artist: "Nymano, JK the Sage",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ["#5A5380", "#1F1A1E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10130"
        },
        {
            name: "Ocean Patio",
            artist: "Philanthrope, Dayle",
            cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#95C6D3", "#BA3C25"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8036"
        },
        {
            name: "Canary Forest",
            artist: "Aso, Middle School, Aviino",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#236964", "#FBC275"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075"
        },
        {
            name: "Aqueduct",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#548B8E", "#B38561"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9921"
        },
        {
            name: "Far From Home",
            artist: "Toonorth",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#598683", "#343747"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8127"
        },
        {
            name: "What Was Before",
            artist: "Philanthrope, Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#4F575A", "#2A635E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9923"
        },
        {
            name: "Harvest",
            artist: "Soul Food Horns, Blue Wednesday, G Mills",
            cover: "https://cdn.shopify.com/s/files/1/2991/7958/products/VinylShot_Fall2020-Front_720x.jpg?v=1599132240",
            id: uuidv4(),
            active: false,
            color: ["#B65156", "#E1B4BD"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9307"
        },
        {
            name: "Witch Hat",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#CAE2E2", "#293754"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10017"
        },
    ];
}

export default chillHop;