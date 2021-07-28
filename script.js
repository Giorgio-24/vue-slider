Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            imageIndex: 0,
            images: [
                './img/image1.jpg',
                './img/image2.jpg',
                './img/image3.jpg',
                './img/image4.jpg',
            ],

        },
        methods: {
            showIfActive(i) {
                if (i === this.imageIndex) {
                    return 'active';
                } else {
                    return '';
                }

            },
            increaseImageIndex() {
                if (this.imageIndex < this.images.length - 1) {
                    this.imageIndex = this.imageIndex + 1;
                } else {
                    this.imageIndex = 0;
                };
            },
            decreaseImageIndex() {
                if (this.imageIndex > 0) {
                    this.imageIndex = this.imageIndex - 1;
                } else {
                    this.imageIndex = this.images.length - 1;
                };
            },
            myDots(i) { this.imageIndex = i; },
        }
    }
);