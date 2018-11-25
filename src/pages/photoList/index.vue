<template>
    <div class="photo-list-container">
        <div id="slider" class="mui-slider">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			 <div class="mui-scroll">
				 <a @click="getImages(item.id)" :class="{'mui-control-item': true, 'mui-active': item.id == 0}" v-for="(item) in categories" :key="item.id">
					 {{ item.title }}
				 </a>
			 </div>
		  </div>
        </div>

        <img class="preview-img" v-for="(item, index) in list" :key="item.src" :src="item.src" @click="$preview.open(index,list)">
    
        <ul>
            <li class="img-container" v-for="(item) in images" :key="item.id">
                <img v-lazy="item">
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from "../../lib/mui/js/mui.min.js"

    export default{
        data(){
            return {
                categories: [],
                images: [
                    "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=f223d39dfa1fbe090853cb460a096756/cb8065380cd791231e35789fa5345982b3b78000.jpg",
                    "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=2a71292fc6fc1e17e9b284632bf99d66/1e30e924b899a90125d0c50f14950a7b0208f526.jpg",
                    "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=3682361ff4faaf5190ee89eded3dff8b/cdbf6c81800a19d844a71a3c3afa828ba61e4667.jpg",
                    "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=6493fb2518dfa9ece9235e4503b99c66/6a600c338744ebf88c0cfd06d0f9d72a6059a78e.jpg"
                ],
                list: [{
                    src: "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=f223d39dfa1fbe090853cb460a096756/cb8065380cd791231e35789fa5345982b3b78000.jpg",
                    w: 600,
                    title: 'Image Caption 1',
                    h: 400
                },{
                    src: "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=2a71292fc6fc1e17e9b284632bf99d66/1e30e924b899a90125d0c50f14950a7b0208f526.jpg",
                    w: 600,
                    title: 'Image Caption 1',
                    h: 400
                },{
                    src: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=3682361ff4faaf5190ee89eded3dff8b/cdbf6c81800a19d844a71a3c3afa828ba61e4667.jpg",
                    w: 600,
                    title: 'Image Caption 1',
                    h: 400
                }, {
                    src: "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=6493fb2518dfa9ece9235e4503b99c66/6a600c338744ebf88c0cfd06d0f9d72a6059a78e.jpg",
                    w: 600,
                    title: 'Image Caption 1',
                    h: 400
                }]
            }
        },
        created(){
            this.getCategory();
        },
        mounted() {
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005
            });
        },
        methods: {
            getCategory() {
                this.$http.get("api/getimgcategory").then(result => {
                    if(result.body.status === 0){
                        this.categories = result.body.message;
                        this.categories.unshift({id: 0, title: "全部"});
                    }
                });
            },
            getImages(id) {
                this.$http.get("api/getimages/" + id).then(result => {
                    if(result.body.status === 0) {
                        this.images = result.body.message;
                    }
                });
            }
        },

    }
</script>

<style lang="less">
    .img-container {
        width: 600px;
        height: 400px;
        min-height: 300px;
        margin: 10px 0;
        background-color: #ccc;
        img{
            width:100%;
            height:100%;
        }
    }
    img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
        background-color: red;
    }
    img[lazy="error"]{
        width: 100%;
    }
</style>

