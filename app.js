// Nội dung của thẻ bài
let contentCards = [
    // Blue Card 
    {
        id: 1,
        typeCard: 'blue',
        content: 'Tất cả mọi người phải hú lên như chó sói. NGƯỜI CUỐI CÙNG SẼ PHẢI UỐNG!',
        path: './assets/xanhduong.png'
    },
    {
        id: 2,
        typeCard: 'blue',
        content: 'Đứng lên hát Quốc Ca thật to và rõ ràng (1 cốc)',
        path: './assets/do.png'
    },
    {
        id: 3,
        typeCard: 'blue',
        content: 'Những ai mặt đỏ sẽ phải uống (Nếu không ai mặt đỏ thì tất cả sẽ uống)',
        path: './assets/cam.png'
    },
    {
        id: 4,
        typeCard: 'blue',
        content: 'Những ai mặc áo trắng sẽ phải uống (1 cốc)',
        path: './assets/xanhduong.png'
    },
    {
        id: 5,
        typeCard: 'blue',
        content: 'Nếu người ngồi bên phải bạn đoán trúng tháng sinh của bạn thì bạn phải uống (1 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 6,
        typeCard: 'blue',
        content: 'Người nhiều tuổi nhất sẽ phải uống (1 cốc)',
        path: './assets/xanhla.png'
    },
    {
        id: 7,
        typeCard: 'blue',
        content: 'Ai có mực trên người thì sẽ phải uống (1 cốc)',
        path: './assets/xanhduong.png'
    },
    {
        id: 8,
        typeCard: 'blue',
        content: 'Máy của những ai trên 50% thì sẽ phải uống (1 cốc)',
        path: './assets/do.png'
    },
    {
        id: 9,
        typeCard: 'blue',
        content: 'Những ai thấp hơn chiều cao trung bình của cả đám thì sẽ phải uống (1 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 10,
        typeCard: 'blue',
        content: 'Ai dùng Iphone thì sẽ phải uống (1 cốc)',
        path: './assets/xanhla.png'
    },
];

// Application
const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x38f5dc;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);


// Graphics
const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.lineStyle(2, 0xFFFFFF)
.beginFill(0xb54abd, 1)
.drawRoundedRect(280, 30, 800, 600, 40)
.endFill();

app.stage.addChild(rectangle);

// Tiêu đề
const Text = PIXI.Text;
const title = new Text('Nhậu Đâu Nhậu Đây',{
    fontFamily: 'Playfair Display, serif',
    fontSize: 52,
    fill:0xFFFFFF
});
title.x = 450;
title.y = 60;
app.stage.addChild(title);

// Sprite để cung cấp ảnh cho thẻ
const Sprite = PIXI.Sprite;
const imageTextureBack = PIXI.Texture.from('./assets/back.png');

const image = new Sprite(imageTextureBack);
image.position.set(520, 150);
image.width = 320; 
image.height = 430;
app.stage.addChild(image);


// Rectangle tạo thẻ
const Rectangle = PIXI.Rectangle;
const hitCard = new Rectangle();
image.hitCard = hitCard;

// xao mang
function randomComparator() {
    return Math.random() - 0.5;
};

function shuffle(arr) {
    return arr.slice().sort(randomComparator);
};



// Logic lật thẻ mặt sau ra mặt trước và ngược lại
let isBack = true;

image.interactive = true;
image.buttonMode = true;

// khai báo mảng contentCards đã sắp xếp
contentCards = shuffle(contentCards);
let itemCount = 0;
image.on('pointertap', () => {
    // const randomFrontImage = getRandomFrontImage();
    if (isBack) {
        image.texture = PIXI.Texture.from('./assets/back.png');
        image.removeChildren();
    } else {
        if (itemCount < contentCards.length) {
            image.texture = PIXI.Texture.from(contentCards[itemCount].path); 
            displayText(contentCards[itemCount].typeCard);
            displayText(contentCards[itemCount].content);
            itemCount++;
        } else {
                let shuffleCard = shuffle(contentCards);
                console.log('Đã sắp xếp lại mảng.');
                console.log(shuffleCard);
                itemCount = 0;
            }
    };
    isBack = !isBack;
});
console.log(contentCards);

// Hàm hiển thị nội dung lên thẻ
function displayText(text) {
    image.removeChildren();

    const textObj = new PIXI.Text(text, {
        // width: 200,
        // height: 1000,
        fontFamily: 'Playfair Display, serif',
        fontSize : 80,
        // fill: 0x000000,
        // fill: ['#97D9E1', '#D9AFD9'],
        fill: ['#FFFB7D', '#85FFBD'],
        fontWeight: 'bold',
        stroke: '#4a1850',
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        strokeThickness: 5,
        wordWrap: true,
        wordWrapWidth: 480,

    });
    textObj.x = 130
    textObj.y = 100
    image.addChild(textObj);
};