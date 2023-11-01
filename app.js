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
        path: './assets/xanhduong.png'
    },
    {
        id: 3,
        typeCard: 'blue',
        content: 'Những ai mặt đỏ sẽ phải uống (Nếu không ai mặt đỏ thì tất cả sẽ uống)',
        path: './assets/xanhduong.png'
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
        content: 'Nếu người ngồi bên phải bạn đoán trúng tháng sinh của bạn thì bạn phải uống',
        path: './assets/xanhduong.png'
    },
    {
        id: 6,
        typeCard: 'blue',
        content: 'Người nhiều tuổi nhất sẽ phải uống (1 cốc)',
        path: './assets/xanhduong.png'
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
        path: './assets/xanhduong.png'
    },
    {
        id: 9,
        typeCard: 'blue',
        content: 'Những ai thấp hơn chiều cao trung bình của cả đám thì sẽ phải uống',
        path: './assets/xanhduong.png'
    },
    {
        id: 10,
        typeCard: 'blue',
        content: 'Ai dùng iphone thì sẽ phải uống (1 cốc)',
        path: './assets/xanhduong.png'
    },
    {
        id: 11,
        typeCard: 'blue',
        content: 'Uống 2 cốc nếu bạn đang thích thầm người đang có mặt trong hội',
        path: './assets/xanhduong.png'
    },
    {
        id: 12,
        typeCard: 'blue',
        content: 'Ai ăn chay ngày rằm thì sẽ phải uống (1 cốc)',
        path: './assets/xanhduong.png'
    },
    // Green Card
    {
        id: 13,
        typeCard: 'green',
        content: 'Hãy chọn ra 1 người bất kỳ. Khi nào bạn bị phạt uống thì người kia sẽ uống theo (1 cốc)',
        path: './assets/xanhla.png'
    },
    {
        id: 14,
        typeCard: 'green',
        content: 'Bạn hãy cất ca 1 bài hát, người kế hát tiếp cho tới người thua (1 cốc)',
        path: './assets/xanhla.png'
    },
    {
        id: 15,
        typeCard: 'green',
        content: 'Bạn hãy chọn ra 1 thể loại. Mọi người hãy kể tên hết về thể loại đó (1 cốc)',
        path: './assets/xanhla.png'
    },
    {
        id: 16,
        typeCard: 'green',
        content: 'Bạn được chỉ định 1 người uống 2 cốc',
        path: './assets/xanhla.png'
    },
    {
        id: 17,
        typeCard: 'green',
        content: 'Bây giờ tên bạn sẽ là Minh. Ai gọi sai tên này của bạn sẽ phải uống (1 cốc)',
        path: './assets/xanhla.png'
    },
    {
        id: 18,
        typeCard: 'green',
        content: 'Bạn sẽ miêu tả vật/ con vật duy nhất 1 hành động. Sai thì 1 cốc',
        path: './assets/xanhla.png'
    },
    {
        id: 19,
        typeCard: 'green',
        content: 'Ai đã từng nhuộm tóc thì uống 1 cốc',
        path: './assets/xanhla.png'
    },
    {
        id: 20,
        typeCard: 'green',
        content: 'Vòng này bạn phải sủa tiếng chó hết vòng. Phạm quy uống 2 cốc.',
        path: './assets/xanhla.png'
    },
    {
        id: 21,
        typeCard: 'green',
        content: 'Chỉ định 2 người uống giao bôi với nhau. Không làm mỗi người uống 2 cốc',
        path: './assets/xanhla.png'
    },
    {
        id: 22,
        typeCard: 'green',
        content: 'Bạn và người bên trái chụp hình selfie và đăng story. Không làm mỗi người uống 3 cốc',
        path: './assets/xanhla.png'
    },
    {
        id: 23,
        typeCard: 'green',
        content: 'Bạn phải Dạ đầu câu nói và ạ sau khi kết thúc câu. Phạm quy phạt uống 1 cốc',
        path: './assets/xanhla.png'
    },
    {
        id: 24,
        typeCard: 'green',
        content: 'Xếp chồng 10 lon bia đã uống lên. Đổ(1 cốc), Được thì chỉ định 1 người uống 2 cốc',
        path: './assets/xanhla.png'
    },
    // Yellow
    {
        id: 25,
        typeCard: 'yellow',
        content: 'Sủa 3 lần nếu ai đó kêu tới tên bạn (1 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 26,
        typeCard: 'yellow',
        content: 'Ai check điện thoại phạt 2 cốc',
        path: './assets/vang.png'
    },
    {
        id: 27,
        typeCard: 'yellow',
        content: 'Hít đất 10 cái (2 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 28,
        typeCard: 'yellow',
        content: 'Show info người mà bạn stalk nhiều nhất(2 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 29,
        typeCard: 'yellow',
        content: 'Tất cả mọi người phải kết thúc bằng từ Gwenchana (1 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 30,
        typeCard: 'yellow',
        content: 'Ai không có bồ thì uống với nhau 1 cốc',
        path: './assets/vang.png'
    },
    {
        id: 31,
        typeCard: 'yellow',
        content: 'Bạn hãy miêu tả dáng đi của 1 người phụ nữ đang mang bầu sắp đẻ',
        path: './assets/vang.png'
    },
    {
        id: 32,
        typeCard: 'yellow',
        content: 'Ôm người khác giới phía bên phải 3 giây (2 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 33,
        typeCard: 'yellow',
        content: 'Bạn sẽ được miễn phạt 1 lá bài mà bạn không thích',
        path: './assets/vang.png'
    },
    {
        id: 34,
        typeCard: 'yellow',
        content: 'Cười 10 tiếng cười khác nhau (1 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 35,
        typeCard: 'yellow',
        content: 'Hãy diễn tả hành động liếm chân giống chó (3 cốc)',
        path: './assets/vang.png'
    },
    {
        id: 36,
        typeCard: 'yellow',
        content: 'Bạn phải gọi tên tất cả mọi người bằng tên người ngồi bên phải họ (sai 2 cốc)',
        path: './assets/vang.png'
    },
    // Orange
    {
        id: 37,
        typeCard: 'orange',
        content: 'Bạn sẽ phải đứng cho tới khi kết thúc trò chơi (1 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 38,
        typeCard: 'orange',
        content: 'Phần nào bạn không thích ở bản thân (không trả lời 2 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 39,
        typeCard: 'orange',
        content: 'Bạn hãy kể sở thích dị hợm nhất của bạn (không trả lời 2 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 40,
        typeCard: 'orange',
        content: 'Bạn hãy kể sở thích dị hợm nhất của bạn (không trả lời 2 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 41,
        typeCard: 'orange',
        content: 'Nếu có thể quay về quá khứ bạn sẽ làm gì?',
        path: './assets/cam.png'
    },
    {
        id: 42,
        typeCard: 'orange',
        content: 'Hãy kể 1 câu chuyện cười cho mọi người nghe. (không ai cười 3 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 43,
        typeCard: 'orange',
        content: 'Uống bia mà không dùng tay ( 1 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 44,
        typeCard: 'orange',
        content: 'Để người bên trái đá vào mông bạn ( không làm 2 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 45,
        typeCard: 'orange',
        content: 'Ai đã xem phim heo thì tự giác uống với nhau 1 cốc',
        path: './assets/cam.png'
    },
    {
        id: 46,
        typeCard: 'orange',
        content: 'Khi nào bạn nói chuyện với ai đó bạn phải lấy tay chỉ vào họ ( 1 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 47,
        typeCard: 'orange',
        content: 'Bạn đã từng quan hệ tình dục chưa (không trả lời 2 cốc)',
        path: './assets/cam.png'
    },
    {
        id: 48,
        typeCard: 'orange',
        content: 'Kể về pha bạn chơi ngu người nhất (không trả lời 1 cốc)',
        path: './assets/cam.png'
    },
    // Red
    {
        id: 49,
        typeCard: 'red',
        content: 'Vào story của người bất kỳ trên mxh, và đăng tin bắt chước story đó (1 cốc)',
        path: './assets/do.png'
    },
    {
        id: 50,
        typeCard: 'red',
        content: 'Gọi cho người yêu cũ/ crush hiện tại (3 cốc) ',
        path: './assets/do.png'
    },
    {
        id: 51,
        typeCard: 'red',
        content: 'Hãy nêu cảm nghĩ bản thân về người ngồi bên phải bạn (1 cốc)',
        path: './assets/do.png'
    },
    {
        id: 52,
        typeCard: 'red',
        content: 'Tất cả mọi người quyết định bạn phải làm gì (không làm 5 cốc)',
        path: './assets/do.png'
    },
    {
        id: 53,
        typeCard: 'red',
        content: 'Hãy kể về first date của bạn mà bạn tâm đắc nhất (không trả lời 3 cốc)',
        path: './assets/do.png'
    },
    {
        id: 54,
        typeCard: 'red',
        content: 'Đổ nước lọc lên đầu (không làm 2 cốc)',
        path: './assets/do.png'
    },
    {
        id: 55,
        typeCard: 'red',
        content: 'Cho người ngồi bên trái 50k ( 2 cốc)',
        path: './assets/do.png'
    },
    {
        id: 56,
        typeCard: 'red',
        content: 'Ngay bây giờ, chụp cam thường và đăng lên mạng xã hội (3 cốc)',
        path: './assets/do.png'
    },
    {
        id: 57,
        typeCard: 'red',
        content: 'Gọi điện cho bạn thân mượn 1 triệu (không cho vay uống 1 cốc)',
        path: './assets/do.png'
    },
    {
        id: 58,
        typeCard: 'red',
        content: 'Bịt mắt đoán 2 vật mà mọi người chỉ định (đoán sai 2 cốc)',
        path: './assets/do.png'
    },
    {
        id: 59,
        typeCard: 'red',
        content: 'Cốc của ai đang còn đầy thì phải uống 3 cốc',
        path: './assets/do.png'
    },
    {
        id: 60,
        typeCard: 'red',
        content: 'Hãy kể tên 3 tư thế mà bạn thích khi làm chuyện ấy (2 cốc)',
        path: './assets/do.png'
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

app.renderer.backgroundColor = 0x000000;

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
image.position.set(580, 230);
image.width = 320; 
image.height = 430;
app.stage.addChild(image);

// const titleRemainingCard = new Text('Số lá bài còn lại: ', {
//     fontFamily: 'Playfair Display, serif',
//     fontSize: 20,
//     fill: 0xFFFFFF
// });
// titleRemainingText.x = 870;
// titleRemainingText.y = 140;
// app.stage.addChild(titleRemainingText);


// Xáo mảng
function randomComparator() {
    return Math.random() - 0.5;
};

function shuffle(arr) {
    return arr.slice().sort(randomComparator);
};

image.interactive = true;
image.buttonMode = true;


// khai báo mảng contentCards đã sắp xếp
contentCards = shuffle(contentCards);
let itemCount = 0;
// Logic lật thẻ mặt sau ra mặt trước và ngược lại
let isBack = true;
let isFlipping = false;
const { TweenMax, Power2 } = window;

image.pivot.set(image.width / 2, image.height / 2);
image.on('pointertap', () => {
    if (!isFlipping) {
        isFlipping = true;

        const flipDuration = 0.5; // Thời gian để flip 180 độ

        // Làm cho thẻ bài quay 180 độ quanh trục y ở giữa
        TweenMax.to(image.scale, flipDuration / 2, {
            x: 0,
            ease: Power2.easeInOut,
            onComplete: () => {
                if (isBack) {
                    image.texture = PIXI.Texture.from('./assets/back.png');
                    image.removeChildren();
                } else {
                    if (itemCount < contentCards.length) {
                        image.texture = PIXI.Texture.from(contentCards[itemCount].path); 
                        displayText(contentCards[itemCount].typeCard);
                        displayText(contentCards[itemCount].content);
                        itemCount++;
                        remainingCards--;
                        displayRemainingCards();
                    } else {
                            let shuffleCard = shuffle(contentCards);
                            console.log(shuffleCard);
                            itemCount = 0;
                        }
                };
                isBack = !isBack;
            }
        }); 
        // Khi hoàn thành flip 180 độ, quay lại vị trí ban đầu
        TweenMax.to(image.scale, flipDuration / 2, {
            x: 0.45,
            ease: Power2.easeInOut,
            delay: flipDuration / 2,
            onComplete: () => {
                isFlipping = false;
            }
        });
    }
});
console.log(contentCards);

// Hiển thị số lá bài còn lại 
let remainingCards = contentCards.length;

let remainingText = null;

function displayRemainingCards() {
    if (remainingText) {
        app.stage.removeChild(remainingText); 
    }

    remainingText = new Text(`Số lá bài còn lại: \n${remainingCards}`, {
        fontFamily: 'Playfair Display, serif',
        fontSize: 20,
        fill: 0xFFFFFF
    });
    remainingText.x = 870;
    remainingText.y = 140;
    app.stage.addChild(remainingText);
    console.log(remainingText);
};

// Tạo khung button Start
const buttonStart = new Graphics();
buttonStart

.beginFill(0x02b52f)
.drawRect(860, 510, 180, 60)
.endFill();

app.stage.addChild(buttonStart);
console.log(buttonStart);
// Interact button start
buttonStart.interactive = true;
buttonStart.buttonMode = true;
buttonStart.on('pointerover', () => {
    buttonStart.cursor = 'pointer';
    buttonStart.alpha = 0.9; 
});
buttonStart.on('pointerout', () => {
    buttonStart.alpha = 1; 
});

buttonStart.on('pointertap', () => {
    
});

// Tạo text cho button Start
const textButtonStart = new Text('Refresh deck', {
    fill: 0xFFFFFF,
    fontFamily: 'Playfair Display, serif',
    fontSize: 20,
});

buttonStart.addChild(textButtonStart);
textButtonStart.x = 900;
textButtonStart.y = 528;


// Rectangle tạo thẻ
const Rectangle = PIXI.Rectangle;
const hitCard = new Rectangle();
image.hitCard = hitCard;

// Hàm hiển thị nội dung lên thẻ
function displayText(text) {
    image.removeChildren();

    const textObj = new PIXI.Text(text, {
        fontFamily: 'Playfair Display, serif',
        fontSize : 80,
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