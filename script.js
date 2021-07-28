Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            bool: false,
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
                };
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
            myDots(i) {
                this.imageIndex = i;
            },
            startAutoSliding() {
                this.bool = false;
            },
            stopAutoSliding() {
                this.bool = true;
            },
            autoSliding() {
                setInterval(() => {
                    if (!this.bool) {
                        this.increaseImageIndex();
                    } else {
                        clearInterval(() => {
                            this.autoSliding()
                        })
                    }
                }, 5000);
            },

            /*             myFunzione() {//!DA VEDERE DOVE METTERLA
                            setInterval(function () { return this.imageIndex = this.imageIndex + 1; }, 300)
                        }, */
            /*             myFunzione() {//!DA VEDERE DOVE METTERLA
                            setInterval(this.increaseImageIndex(), 3000);
                        }, */
        },
        beforeMount: function () {
            this.autoSliding()
        },
    }
);