/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-25 10:17:06
 * @version $Id$
 */
var h = window.screen.height;
//导航
var nav = new Vue({
    el: '.header',
    data: {
        height: h,
        isActive: false,
        items: [
            { go: '首页' },
            { go: '作品' },
            { go: '关于' },
            { go: '概念' },
            { go: '联系' },
            { go: '未来' }
        ]
    },
    methods: {
        menuShow: function() {
            this.isActive = !this.isActive
        }
    }

});

//轮播
var banner = new Vue({
    el: '.banner',
    data: {
        items: [
            { enheng: '' },
            { enheng: '' },
            { enheng: '' },
        ],
        ul: [
            { img: 'img/banner1.jpg' },
            { img: 'img/banner2.jpg' },
            { img: 'img/banner3.jpg' },
        ],
        count: 0,
        timer: '',
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoplay()
            }, 4000)
        })
    },
    methods: {
        autoplay() {
            this.count++
                if (this.count === 3) {
                    this.count = 0
                    return
                }
        },
        go() {
            this.timer = setInterval(this.autoplay, 4000);
        },
        prev: function() {
            this.count--;
            if (this.count <= 0) {
                this.count = 0
                return
            }
        },
        next: function() {
            this.count++;
            if (this.count >= 3) {
                this.count = 0
                return
            }
        },
        stop: function() {
            clearInterval(this.timer)
            this.timer = null
        },
        change: function (index) {
        	this.count = index
        }
    }
});

//about
var about = new Vue({
	el: '.about',
	data: {
		items: [
			{'img':'img/boy.jpg','p':'男生','span':'boy'},
			{'img':'img/girl.jpg','p':'女生','span':'girl'},
			{'img':'img/boy.jpg','p':'男生','span':'boy'},
			{'img':'img/girl.jpg','p':'女生','span':'girl'},
			{'img':'img/boy.jpg','p':'男生','span':'boy'},
			{'img':'img/girl.jpg','p':'女生','span':'girl'},
			{'img':'img/boy.jpg','p':'男生','span':'boy'},
			{'img':'img/girl.jpg','p':'女生','span':'girl'},
			{'img':'img/boy.jpg','p':'男生','span':'boy'},
		],
	}
})