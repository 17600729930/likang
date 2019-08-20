<template>
	<div>
		
		<p class="titles">请上传证件与车辆照片<span>《用户隐私保护政策》</span></p>
		<div class="shangchuan">
			<ul>
				<li class="posi-li" @tap="chooseImage">
					<img :src="imageFirst"></img>
				</li>
				<li class="posi-li posi-li-first" @tap="chooseImage1">
					<img :src="imageSecond" alt="">
				</li>
				<li>
					<img src="../../static/driving_front.png" alt="">
					<span>*行驶证主页照片*</span>
				</li>
				<li>
					<img src="../../static/driving_back.png" alt="">
					<span>*行驶证副页照片*</span>
				</li>
			</ul>
			<ul class="li_left">
				<li>
					<img src="../../static/car.png" alt="">
					<span>*车头照片（含车牌）*</span>
				</li>
				<li class="posi-li-left" @tap="chooseImage2">
					<img :src="imageThird"></img>
				</li>
			</ul>
		</div>
		
		<p class="titles">核对车辆信息</p>
		
		<p class="tishi">*请核对车辆信息，如有错漏，请重传证件或修改填写*</p>
		<div class="inps">
			<ul>
				<li>
					<span>车主姓名</span>
					<input type="text" v-model="vehicleName">
				</li>
				<li>
					<span>车牌号码</span>
					<input type="text" v-model="vehiclePlate">
				</li>
				<li>
					<span>核定载人数</span>
					<input type="text" v-model="vehicleCount">
				</li>
			</ul>
		</div>
		
		<button class="next_btn" @click="handleNext">下一步</button>
		
		
	</div>


</template>

<script>
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
	import baseUrl from "../../utils/index.js"
	export default {
		data() {
			return {
				imageFirst: "", // 第一张图片
				imageSecond: "", // 第二张图片
				imageThird: "", // 第三张图片
				imageLength: 3, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				fals: true,
				carName: "",
				carNum: "",
				customerIds: "",
				vehicleName: "",
				vehiclePlate: "",
				vehicleCount: ""
			}
		},
		onLoad(options) {
			console.log(options);
			this.carName = options.carName;
			this.carNum = options.carNum;
			this.customerIds = options.customerIds
		},
		methods: {
			// 返回图片路径
			submitImg() {
				console.log(this.imageFirst)
			},
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
								picId: 3,
								customerId: this.customerIds
							},
							// success: (res => {
							// 	console.log(res)
							// })
							success: (res => {
								console.log(res)
								var data = JSON.parse(res.data);
								this.vehicleName = data.data.vehicleName; // 车主姓名
								this.vehiclePlate = data.data.vehiclePlate // 车牌号
								console.log(res, "----------------------------")
								// if(res.data.code == 10002){
								// 	uni.showModal({
								// 		content: res.data.msg,
								// 		showCancel: false
								// 	})
								// }else if(res.data.code == 10003){
								// 	uni.showModal({
								// 		content: res.data.msg,
								// 		showCancel: false
								// 	})
								// }else if(res.data.code == 10004){
								// 	uni.showActionSheet({
								// 		content: res.data.msg,
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
								picId: 4,
								customerId: this.customerIds
							},
							success: (res => {
								var data = JSON.parse(res.data);
								this.vehicleCount = data.data.vehicleCount; // 核定载人数
								console.log(res, "================")
							})
						})
					})
				})
			},
			chooseImage2: async function () {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// // #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// // #endif
					count: 1,
					success: (res => {
						console.log(res.tempFilePaths);
						const tempFilePaths = res.tempFilePaths;
						this.imageThird = res.tempFilePaths;
						// this.imageList = this.imageList.concat(res.tempFilePaths)
						uni.uploadFile({
							url: baseUrl.zhaopian(),
							filePath: tempFilePaths[0],
							name: "file",
							formData: {
								picId: 5,
								customerId: this.customerIds,
							},
							success: (res => {
								console.log(res, "================")
							})
						})
					})
				})
			},
			// chooseImage: async function() {
			// 	uni.chooseImage({
			// 		sourceType: sourceType[this.sourceTypeIndex],
			// 		// #ifdef MP-WEIXIN
			// 		sizeType: sizeType[this.sizeTypeIndex],
			// 		// #endif
			// 		count: this.imageLength - this.imageList.length,
			// 		success: (res) => {
			// 			uni.showLoading({
			// 				title: "上传中。",
			// 			})
			// 			// this.imageList = this.imageList.concat(res.tempFilePaths);
			// 			this.imageList = res.tempFilePaths
			// 			uni.hideLoading()
			// 		}
			// 	})
			// },
			// //预览图片
			// previewImage: function(e) {
			// 	var current = e.target.dataset.src
			// 	uni.previewImage({
			// 		current: current,
			// 		urls: this.imageList
			// 	})
			// },
			// //删除图片
			// deleteImage: function(e) {
			// 	var index = e.target.dataset.index;
			// 	var that = this;
			// 	var images = that.imageList;
			// 	images.splice(index, 1);
			// 	that.imageList = images;
			// },
			handleNext(){
				uni.request({
					url: baseUrl.carXinxi(),
					method: "POST",
					data: {
						customerId: this.customerIds,
						vehicleName: this.vehicleName,
						vehiclePlate: this.vehiclePlate,
						vehicleCount: this.vehicleCount,
						formId: 0
					},
					dataType: "json",
					success: (res => {
						console.log(res)
						// if(res.data.code == 10000){
						// 	uni.navigateTo({
						// 		url: "./BindOvner"
						// 	})
						// }else{
						// 	uni.showModal({
						// 		content: res.data.msg,
						// 		showCancel: false
						// 	})
						// }
					})
				})
				
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../static/css/upload-imgs.css";
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
	
	.posi-li-left{
		position: absolute;
		bottom: 74upx;
		left: 0;
	}
	
	.posi-li-left img{
		display: flex;
		width: 352upx;
		height: 252upx;
		border-radius: 20upx;
	}
	
	.posi-li img {
		display: flex;
		width: 352upx;
		height: 252upx;
		border-radius: 20upx;
	}
	.titles{
		width: 100%;
		height: 68upx;
		background: #eee;
		line-height: 68upx;
		font-size: 30upx;
		text-align: center;
		// padding-left: 6%;
	}
	
	.titles span{
		color: skyblue;
	}
	.shangchuan{
		width: 100%;
		position: relative;
		ul{
			display: flex;
			justify-content: space-around;
			margin-top: 3%;
			padding-bottom: 3%;
			li{
				display: flex;
				flex-direction: column;
				img{
					width: 350upx;
					height: 250upx;
				}
				span{
					font-size: 30upx;
					text-align: center;
					margin-top: 3%;
				}
			}
		}
		.li_left{
			width: 48%;
			justify-content: flex-start;
			margin-left: 1.5%;
			position: relative;
		}
	}
	
	.tishi{
		width: 100%;
		height: 90upx;
		border-bottom: 1upx solid #ccc;
		font-size: 26upx;
		line-height: 90upx;
		color: red;
		text-align: center;
	}
	
	.inps{
		width: 100%;
		ul{
			display: flex;
			flex-direction: column;
			li{
				display: flex;
				align-items: center;
				height: 80upx;
				line-height: 80upx;
				border-bottom: 1upx solid #ccc;
				justify-content: space-around;
				span{
					font-size: 30upx;
					input{
						width: 50%;
					}
				}
			}
		}
	}
	
	.next_btn{
		margin: 10% 5%;
		background: #39B54A;
		width: 90%;
		color: white;
	}

	.body-view {
		width: 100%;
		/* display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start; */
		position: absolute;
		left: 0%;
		top: 10%;
		display: none;
		
	}

	.info-table {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		background-color: #FFFFFF;
	}

	.info-table .info-table-row {
		height: 120upx;
		width: 92%;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1upx solid rgba(204, 204, 204, 1);
	}

	.info-table .info-table-row .table-row-left {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(28, 28, 28, 1);
		line-height: 40upx;
	}

	.info-table .info-table-row .table-row-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-table .info-table-row .table-row-right image {
		width: 13upx;
		height: 24upx;
	}

	.info-table .info-table-row .table-row-right input {
		width: 560upx;
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(28, 28, 28, 1);
		line-height: 40upx;
	}

	.table-btn-view {
		position: fixed;
		bottom: 27upx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.table-btn-view .save-btn {
		width: 92%;
		height: 90upx;
		background: rgba(0, 170, 255, 1);
		border-radius: 10upx;
		color: #FFFFFF;
	}

	.uploads {
		width: 92%;
		margin-left: 8%;
	}
</style>
