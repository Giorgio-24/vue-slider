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
            showImage(i) {
                if (i === this.imageIndex) {
                    return 'd-inline-block';
                } else {
                    return 'd-none';
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
        }
    }
);