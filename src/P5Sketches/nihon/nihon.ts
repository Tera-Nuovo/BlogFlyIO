import p5 from "p5";

export function nihonSketch(p: p5) {
    let images: p5.Image[] = [];

    p.preload = () => {

        for (let i = 1; i <= 7; i++) {
            const imagePath = new URL(`/src/assets/P5Sketches/Nihon/${i + 1}.JPG`, import.meta.url).href;
            images.push(p.loadImage(imagePath));
        }
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.imageMode(p.CENTER);
    };

    p.draw = () => {
        let currentImage = calcImage();
        const canvasWidth = p.width;
        const aspectRatio = images[currentImage].height / images[currentImage].width;
        const newHeight = canvasWidth * aspectRatio;

        p.image(images[currentImage], p.width / 2, p.height / 2, canvasWidth, newHeight);

    };

    function calcImage() {

        const imageXUnit = p.width / images.length;
        for (let i = 0; i < images.length; i++) {
            if (p.mouseX >= imageXUnit * i && p.mouseX < imageXUnit * (i + 1)) {
                return i;
            }
        }
        return 0;
    }
}

