<template>
    <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入您要评论的内容！最多输入120字" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, index) in commentList" :key="index">
                <div class="comment-title">第{{index + 1 }}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}</div>
                <div class="comment-content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
    export default {
        props: ["id"],
        data() {
            return {
                pageIndex: 1,
                commentList: [] ,
                msg: ""
            };
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments(){
                this.$http.get("api/getcomments/" + this.id+ "?pageindex=" + this.pageIndex ).then(result => {
                        // console.log(result)
                        if(result.body.status === 0){
                            this.commentList = this.commentList.concat(result.body.message);
                        }else {
                            Toast('加载失败，请重试！');
                        }
                    
                })
            },
            // 加载更多
            loadMore(){
                this.pageIndex++;
                this.getComments();
            },
            // 发表评论
            postComment(){
                if(this.msg.trim().length === 0){
                  Toast("评论内容不能为空，请重输！");
                }else{
                    this.$http.post("api/postcomment/" + this.id,{content:this.msg.trim()}).then(result => {
                        if(result.body.status === 0){
                            this.pageIndex = 1;
                            this.commentList= [];
                            this.getComments();
                            this.msg= "";

                        }
                    })
                }
            }
        }
    }
</script>

<style lang="less">
    .comment-container {
        .comment-list {
            .comment-item {
                margin: 5px 0;
                .comment-title {
                    font-size: 13px;
                    background-color: #ccc;
                }
                .comment-content {
                    font-size: 13px;
                }
            }
        }
    }
</style>

