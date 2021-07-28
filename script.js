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
                this.imageIndex = this.imageIndex + 1;
                /*                 if (this.imageIndex < this.images.length - 1) {
                                    this.imagesIndex++;
                                } else {
                                    this.imageIndex = 0;
                                }; */
            },
            decreaseImageIndex() {
                this.imageIndex = this.imageIndex - 1;
                /*                 if (this.imageIndex > 0) {
                                    this.imagesIndex--;
                                } else {
                                    this.imageIndex = this.images.length - 1;
                                }; */
            },
        }
    }
);