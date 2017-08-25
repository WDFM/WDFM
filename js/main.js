/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-25 10:17:06
 * @version $Id$
 */
var h = document.body.clientHeight;

//导航
var nav = new Vue({
	el: '#nav',
	data: {
		height: h,
		ul: [
			{ go: '首页' },
			{ go: '作品' },
			{ go: '关于' },
			{ go: '概念' },
			{ go: '联系' },
			{ go: '未来'}
		]
	}

});

//轮播
var banner = new Vue({
	el: '#banner',
	data: {
		ul: [
			{ img: 'img/banner1.jpg'},
			{ img: 'img/banner2.jpg'},
			{ img: 'img/banner3.jpg'},
		],
		count: 0,
	},
	created() {
		this.go();
	},
	methods: {
		autoplay() {
			this.count ++
			if(this.count === 3) {
				this.count = 0
				return
			}
		},
		go(){
			setInterval(this.autoplay, 1000)
		},
	}
})