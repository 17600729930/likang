<template>
	<div>
		<!-- <div>用户的车牌号为: {{carCards}}</div> -->

		<p class="titles">请上传身份证件照片<span>《用户隐私保护政策》</span></p>
		<div class="shangchuan">
			<!-- <div v-for="(image,index) in imageList" :key="index" class="shangchuan image-posi"> -->
			<!-- <div class="shangchuan image-posi"> -->
				<!-- <ul>
					
				</ul> -->
			<!-- </div> -->
			<ul>
				<li class="posi-li" @tap="chooseImage">
					<img :src="imageFirst"></img>
				</li>
				<li class="posi-li posi-li-first" @tap="chooseImage1">
					<!-- <img :src="imageList[1]" :data-src="imageList[1]" @tap="previewImage1"></img> -->
					<img :src="imageSecond"  alt="">
				</li>
				<li>
					<img src="../../static/idcard_front.png" alt="">
					<span>*身份证正面照片*</span>
				</li>
				<li>
					<img src="../../static/idcard_back.png" alt="">
					<span>*身份证反面照片*</span>
				</li>
			</ul>
		</div>

		<p class="titles">核对用户信息</p>

		<p class="tishi">*如上传照片正确，无需手填信息*</p>
		<p class="tishi">*请核对车辆信息，如有错漏，请重传证件或修改填写*</p>

		<div class="inps">
			<ul>
				<li>
					<span>姓名</span>
					<input type="text" v-model="carName">
				</li>
				<li>
					<span>身份证号</span>
					<input type="text" v-model="carNum">
				</li>
			</ul>
		</div>

		<!-- <view class='add-view' @tap="chooseImage">
			<view class="cross">
				<view class="transverse-line">上传身份证正页</view>
				<view class="vertical-line">上传身份证副页</view>
			</view>
		</view> -->


		<button class="next_btn" @click="nextClick">下一步</button>
	</div>
</template>

<script>
	import baseUrl from "../../utils/index.js";
	var sourceType = [
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
	]
	var sizeType = [
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
	]
	export default {
		data() {
			return {
				carCards: "", // 车牌号
				status: true,
				imageFirst: "", // 第一张图片
				imageSecond: "", // 第二张图片
				imageLength: 3, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				customerIds: "",
				carName: "",
				carNum: ""
			}
		},
		methods: {
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// // #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// // #endif
					count: 1,
					success: (res => {
						console.log(res.tempFilePaths);
						const tempFilePaths = res.tempFilePaths;
						this.imageFirst = res.tempFilePaths
						// this.imageList = this.imageList.concat(res.tempFilePaths)
						uni.uploadFile({
							url: baseUrl.zhaopian(),
							filePath: tempFilePaths[0],
							name: "file",
							formData: {
								picId: 1,
								customerId: this.customerIds
							},
							// success: (res => {
							// 	console.log(res)
							// })
							success: (res =>{
								var data = JSON.parse(res.data);
								console.log("=====?",data.data)
								this.carName = data.data.name;
								this.carNum = data.data.cardnum;
								console.log("车主姓名：", this.carName, "```````````````","车主身份证号码：", this.carNum)
								// if(data.code == 10002){
								// 	uni.showModal({
								// 		content: data.msg,
								// 		showCancel: false
								// 	})
								// }else if(data.code == 10003){
								// 	uni.showModal({
								// 		content: data.msg,
								// 		showCancel: false
								// 	})
								// }else if(data.code == 10004){
								// 	uni.showActionSheet({
								// 		content: data.msg,
								// 		showCancel: false
								// 	})
								// }
							})
						})
					})
				})
			},
			chooseImage1: async function () {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// // #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// // #endif
					count: 1,
					success: (res => {
						console.log(res.tempFilePaths);
						const tempFilePaths = res.tempFilePaths;
						this.imageSecond = res.tempFilePaths;
						// this.imageList = this.imageList.concat(res.tempFilePaths)
						uni.uploadFile({
							url: baseUrl.zhaopian(),
							filePath: tempFilePaths[0],
							name: "file",
							formData: {
								picId: 2,
								customerId: this.customerIds
							},
							success: (res => {
								console.log(res, "================")
							})
						})
					})
				})
			},
			nextClick() {
				console.log("下一步");
				uni.request({
					url: baseUrl.shenfen(),
					method: "POST",
					data: {
						customerId: this.customerIds,
						name: this.carName,
						cardnum: this.carNum
					},
					dataType: "json",
					success: (res => {
						console.log(res);
						if(res.data.code == 10000){
							uni.navigateTo({
								url: "./CreditPage?carName=" + this.carName + "&carNum=" + this.carNum + "&customerIds=" + this.customerIds
							})
						}else{
							uni.showModal({
								content: res.data.msg,
								showCancel: false
							})
						}
					})
					
				})
			}
		},
		updated() {
			console.log(this.imageFirst, this.imageSecond)
		},
		mounted() {
			console.log(this.carName, "```````````````")

		},
		// 接收用户输入的车牌号
		onLoad(options) {
			// console.log(options.carCard);
			this.carCards = options.carCard;
			uni.request({
				// url: baseUrls + "/applet/checkPalteForFree",
				url: baseUrl.shibieCar(),
				method: "POST",
				dataType: "json",
				data: {
					plateNum: this.carCards
				},
				success: (res => {
					this.customerIds = res.data.data.customerId;
					// console.log(res.data.code, res.data.msg)
					if (res.data.code == 10000) {
						console.log(res)
						console.log("用户车牌号为：", this.carCards)
						console.log(res.data.code, res.data.msg, this.carCards)
					} else if (res.data.code == 10007) {
						console.log(res.data.msg)
						uni.showModal({
							content: res.data.msg,
							showCancel: false
						})
					}
				})
			})
		}
	}
</script>

<style lang="less" scoped>
	.posi-li {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.posi-li-first{
		margin-left: 51.5%;
	}
	
	.posi-li:first-child{
		margin-left: 1.5%;
	}

	.posi-li img {
		display: flex;
		width: 352upx;
		height: 252upx;
		border-radius: 20upx;
	}

	// .image-posi image:last-child{
	// 	width: 352upx;
	// 	height: 252upx;
	// 	border-radius: 20upx;
	// 	margin-left: 50%;
	// }
	.titles {
		width: 100%;
		height: 68upx;
		background: #eee;
		line-height: 68upx;
		font-size: 30upx;
		text-align: center;
		// padding-left: 6%;
	}

	.titles span {
		color: skyblue;
	}

	.shangchuan {
		position: relative;
		width: 100%;

		ul {
			display: flex;
			justify-content: space-around;
			margin-top: 3%;
			padding-bottom: 3%;

			li {
				display: flex;
				flex-direction: column;

				img {
					width: 350upx;
					height: 250upx;
				}

				span {
					font-size: 30upx;
					text-align: center;
					margin-top: 3%;
				}
			}
		}
	}

	.tishi {
		width: 100%;
		height: 90upx;
		border-bottom: 1upx solid #ccc;
		font-size: 26upx;
		line-height: 90upx;
		color: red;
		text-align: center;
	}

	.inps {
		width: 100%;

		ul {
			display: flex;
			flex-direction: column;

			li {
				display: flex;
				align-items: center;
				height: 80upx;
				line-height: 80upx;
				border-bottom: 1upx solid #ccc;
				justify-content: space-around;

				span {
					font-size: 30upx;

					input {
						width: 50%;
					}
				}
			}
		}
	}

	.next_btn {
		margin: 10% 5%;
		background: #39B54A;
		width: 90%;
		color: white;
	}
</style>
