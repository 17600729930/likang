<template>
	<div>
		<div class="gsLogo">
			<img src="../../static/gsLogo.png" alt="">
		</div>
		<div class="inps">
			<ul>
				<li>
					<span>车牌号：</span>
					<input type="text">
				</li>
				<li>
					<span>卡号：</span>
					<input type="text">
					<img @click="handleScan" class="saoyisao" src="../../static/扫一扫.png" alt="">
				</li>
				<li>
					<span>手机号：</span>
					<input type="text" class="tel">
					<button @click="handleGetCode">获取验证码</button>
				</li>
			</ul>
		</div>
		<button class="next_btn" @click="handleBindOvner">绑定信用卡</button>
	</div>
</template>

<script>
export default{
	data(){
		return{}
	},
	methods: {
		handleGetCode(){
			console.log("获取验证码")
		},
		handleBindOvner(){
			console.log("绑定车主服务")
		},
		handleScan(){
			console.log("扫一扫")
		}
	},
	moubnted(){}
}
</script>

<style lang="less" scoped>
	.gsLogo{
		width: 100%;
		display: flex;
		justify-content: center;
		img{
			width: 66%;
			height: 300upx;
		}
	}
	.tel{
		// border: 1upx solid #ccc;
		width: 300upx;
		margin-right: 140upx;
	}
	.next_btn{
		margin: 10% 5%;
		background: #39B54A;
		color: white;
		width: 90%;
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
				position: relative;
				span{
					font-size: 30upx;
					input{
						width: 50%;
					}
				}
				.saoyisao{
					width: 60upx;
					height: 60upx;
					position: absolute;
					right: 10upx;
					top: 10upx;
				}
				button{
					width: 190upx;
					font-size: 25upx;
					position: absolute;
					right: 10upx;
					top: 10upx;
				}
			}
		}
	}
</style>
