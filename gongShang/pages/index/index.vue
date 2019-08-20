<template>
	<div>
		<button class="type1" @click="handleClick(true)">免费领取</button>

		<div class="header">
			<ul>
				<li>
					<h5>为什么要在微信办理ETC</h5>
					<p>
						<span></span>
						<span></span>
					</p>
				</li>
				<li>
					<img src="../../static/完成.png" alt="">
					<span>办理简单</span>
					<span>1分钟在线办理</span>
				</li>
				<li>
					<img src="../../static/完成.png" alt="">
					<span>全国通行</span>
					<span>通行全国ETC</span>
				</li>
				<li>
					<img src="../../static/完成.png" alt="">
					<span>路费打折</span>
					<span>全国高速95折起</span>
				</li>
			</ul>
		</div>
		
		<p class="title_content">
			<span>产品信息</span>
			<span></span>
		</p>
		
		<div class="content_first">
			<ul>
				<li>
					<img src="../../static/biaoqian.png" alt="">
				</li>
				<li>
					<span>ETC设备一套</span>
					<span>（卡+电子标签）</span>
				</li>
			</ul>
			<p>备注：图片仅供参考，以实际产品为准</p>
		</div>
		
		<p class="title_content">
			<span>办理流程</span>
			<span>详细说明</span>
		</p>
		
		<div class="content_second">
			<ul @click="showVuePopup(true)">
				<li>
					<img src="../../static/type.png" alt="">
					<span>选择方式</span>
				</li>
				<li>
					<img src="../../static/wancheng.png" alt="">
					<span>提交资料</span>
				</li>
				<li>
					<img src="../../static/shenhe.png" alt="">
					<span>等待审核</span>
				</li>
				<li>
					<img src="../../static/anzhuang.png" alt="">
					<span>自助安装</span>
				</li>
			</ul>
		</div>
		
		<div class="vue-popup">
		    <div class="mask" v-show="show2" @click="showVuePopup(false)"></div>
		    <transition name="slide">
		        <div class="popup-content2" v-show="show2">
					<p class="center">办理流程</p>
					<div class="content_third_w">
						<ul>
							<li>
								<span>第1步：选择办理方式</span>
								<span>选择办理ETC的方式并完成对应操作</span>
							</li>
							<li>
								<span>第2步：提交资料（1分钟）</span>
								<span>需提交车主身份证、行驶证、车辆照片等用于审核定制设备</span>
							</li>
							<li>
								<span>第3步：等待审核发货</span>
								<span>发卡方审核资料。</span>
							</li>
							<li>
								<span>第4步：自助安装（1分钟）</span>
								<span>通过手机蓝牙连接设备并安装</span>
							</li>
						</ul>
					</div>
		        </div>
		    </transition>
		</div>
		
		
		<p class="title_content">
			<span>常见问题</span>
			<span>更多问题</span>
		</p>
		
		<div class="content_third">
			<ul>
				<li>
					<span>是否全国通行？可以多车使用一个吗？</span>
					<span>支持全国29省高速通行（西藏和海南高速免费，港澳台暂无高速计划，一车一设备，专车专用。）</span>
				</li>
				<li>
					<span>是否全国通行？可以多车使用一个吗？</span>
					<span>支持全国29省高速通行（西藏和海南高速免费，港澳台暂无高速计划，一车一设备，专车专用。）</span>
				</li>
				<li>
					<span>是否全国通行？可以多车使用一个吗？</span>
					<span>支持全国29省高速通行（西藏和海南高速免费，港澳台暂无高速计划，一车一设备，专车专用。）</span>
				</li>
				<li>
					<span>是否全国通行？可以多车使用一个吗？</span>
					<span>支持全国29省高速通行（西藏和海南高速免费，港澳台暂无高速计划，一车一设备，专车专用。）</span>
				</li>
			</ul>
		</div>
		
		<!-- <button class="btnlq" @click="handleClick">领取</button> -->
		<div class="vue-popup">
			<div class="mask" v-show="show" @click="handleClick(false)"></div>
			<transition name="slide">
				<div class="popup-content" v-show="show">
					<div id="page">
						<div class="wrap">
							<div class="card-header">请输入车牌号码：</div>
							<div class="num-box">
								<div class="num0" @click="clickFirstWrap()">
									<span>{{formData.num0}}</span>
								</div>
								<div class="num1" @click="clickKeyWordWrap(1)"><span>{{formData.num1}}</span></div>
								<em class="spot"></em>
								<div class="num1" @click="clickKeyWordWrap(2)"><span>{{formData.num2}}</span></div>
								<div class="num1" @click="clickKeyWordWrap(3)"><span>{{formData.num3}}</span></div>
								<div class="num1" @click="clickKeyWordWrap(4)"><span>{{formData.num4}}</span></div>
								<div class="num1" @click="clickKeyWordWrap(5)"><span>{{formData.num5}}</span></div>
								<div class="num1" @click="clickKeyWordWrap(6)"><span>{{formData.num6}}</span></div>
								<div class="num1 num_last" @click="clickKeyWordWrap(7)"><span>{{formData.num7}}{{lastNumber == true ? "+" : ""}}</span></div>
							</div>

							<div class="submit-box">
								<button @click="submitFn()">确认</button>
							</div>
						</div>
						<!-- class="first-word-wrap" -->
						<div v-if="firstWrapStatus">
							<ul class="keyVehicleStyle">
								<li @click="selectFirstWord(v)" v-for="(v,i) in keyVehicle" :key="i">{{v}}</li>
								<!-- <div class="word bordernone">
		                <img src="../assets/images/icon-switch.png" alt="">
		              </div> -->
							</ul>
						</div>
						<div class="keyboard-wrap" v-if="keyBoardStatus === true">
							<!-- <div class="number-wrap"></div>
		            <div class="letter-wrap"></div>
		            <div class="cn-wrap"></div> -->
							<div class="keyboard" v-if="activeKeyWordIndex !== 1">
								<span v-for="(item,index) in allKeyWord._1" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
							</div>
							<div class="keyboard" v-if="activeKeyWordIndex !== 1">
								<span v-for="(item,index) in allKeyWord._2" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
								<span class="bordernone"></span>
								<span class="bordernone"></span>
								<span class="bordernone"></span>
								<span class="bordernone"></span>
							</div>
							<div class="keyboard">
								<span v-for="(item,index) in allKeyWord._3" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
							</div>
							<div class="keyboard">
								<span v-for="(item,index) in allKeyWord._4" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
							</div>
							<div class="keyboard">
								<span v-for="(item,index) in allKeyWord._5" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
							</div>
							<div class="keyboard">
								<span v-for="(item,index) in allKeyWord._6" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
								<span class="bordernone"></span>
								<span class="bordernone"></span>
								<span class="bordernone"></span>
								<!-- <span class="bordernone" v-if="activeKeyWordIndex === 1"></span>
		                <span class="bordernone" v-if="activeKeyWordIndex === 1"></span> -->
								<!-- <span @click="deleteWord" v-if="activeKeyWordIndex === 1">x</span> -->
							</div>
							<div class="keyboard" v-if="activeKeyWordIndex !== 1">
								<span v-for="(item,index) in allKeyWord._7" :key="index" @click="clickKeyBoard(item)">{{item}}</span>
								<span class="bordernone"></span>
								<span class="delete" @click="deleteWord">删除</span>
							</div>
							<div class="cancel">
								<span @click="keyBoardStatu(false)">完成</span>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>

	</div>
</template>
<script>
	import {uniPopup} from "@/components/uni-popup/uni-popup.vue";
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				formData: {
					commonCard: '1',
					num0: '',
					num1: '',
					num2: '',
					num3: '',
					num4: '',
					num5: '',
					num6: '',
					num7: ''
				},
				keyVehicle: "陕京津沪冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙吉闽贵粤川青藏琼宁渝",
				allKeyWord: {
					_1: [1, 2, 3, 4, 5, 6, 7],
					_2: [8, 9, 0],
					_3: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
					_4: ['H', 'J', 'K', 'L', 'M', 'N', 'O'],
					_5: ['P', 'Q', 'R', 'S', 'T', 'U', 'V'],
					_6: ['W', 'X', 'Y', 'Z'],
					_7: ['港', '澳', '学', '领', '警']
				},
				activeKeyWordIndex: 1, // 当前车牌号
				keyBoardStatus: false,
				firstWrapStatus: false, // 选择弹窗
				confirmTitle: '',
				submitConfirm: false,
				submitConfirmFalse: false,
				submitConfirmText: '',
				lastNumber: true,
				carCard: "",
				show: false,
				show2: false
			}
		},
		mounted() {
			// 允许从相机和相册扫码
			// uni.scanCode({
			// 	success: function (res) {
			// 		console.log('条码类型：' + res.scanType);
			// 		console.log('条码内容：' + res.result);
			// 	}
			// });
			
			// 只允许通过相机扫码
			// uni.scanCode({
			// 	onlyFromCamera: true,
			// 	success: function (res) {
			// 		console.log('条码类型：' + res.scanType);
			// 		console.log('条码内容：' + res.result);
			// 	}
			// });
			// this.getData()
			// console.log("baseUrl" + baseUrl.shibieCar())
		},
		methods: {
			showVuePopup(flag) {
			    this.show2 = flag
			},
			keyBoardStatu(flag) {
				// this.keyBoardStatus = false;
				this.show = flag;
				let plateLicense
				if (this.formData.commonCard === '1') {
					plateLicense = this.plate_license_2
					plateLicense = this.palindrome(plateLicense)
					if (plateLicense.length < 7) {
						alert('请输入正确的车牌号')
						return
					}
				}
				this.$emit('getPlateLicense', plateLicense)
				console.log("用户的车牌号码为：" + plateLicense);
				this.carCard = plateLicense
				uni.navigateTo({
					url: "./popleCard?carCard=" + this.carCard
				})
			},
			handleClick(flag) {
				this.show = flag;
				this.clickFirstWrap()
			},
			clickFirstWrap() {
				// 点击第一个输入框
				this.firstClickStatus = true
				this.firstWrapStatus = true
				this.keyBoardStatus = false
				this.formData.num0 = ''
				// console.log(this.formData.num0)
			},
			selectFirstWord(event) {
				console.log(event)
				// 选择省份
				// if (event !== 'span') {
				//   return
				// }
				this.formData.num0 = event
				this.firstSelectStatus = true
				this.firstWrapStatus = false
				this.firstClickStatus = false
				this.keyBoardStatus = true
				this.activeKeyWordIndex = 1
				// this.$refs.num1.focus()
				// document.getElementById('num1').focus()
			},
			clickKeyBoard(item) { // 点击自定义键盘
				console.log(item)
				this.formData['num' + this.activeKeyWordIndex] = item
				if (this.formData.commonCard === '1') {
					this.activeKeyWordIndex++
					if (this.activeKeyWordIndex == 8) {
						// this.keyBoardStatus = false
						this.lastNumber = false
					}
				}
				// else {
				//      this.activeKeyWordIndex++
				//      if (this.activeKeyWordIndex > 7) {
				//        this.keyBoardStatus = false
				//      }
				//    }
			},
			deleteWord() { // 退格
				// console.log(this.activeKeyWordIndex)
				// console.log(this.formData['num' + (this.activeKeyWordIndex - 1)])
				if (this.activeKeyWordIndex > 1) {
					this.formData['num' + (this.activeKeyWordIndex - 1)] = ''
					this.activeKeyWordIndex--
				}
			},
			clickKeyWordWrap(activeKeyWordIndex) {
				this.keyBoardStatus = true
				this.activeKeyWordIndex = activeKeyWordIndex
				this.formData['num' + this.activeKeyWordIndex] = ''
				console.log(activeKeyWordIndex)
				if (activeKeyWordIndex == 7) {
					this.lastNumber = !this.lastNumber
				}
			},
			submitFn() {
				let plateLicense
				if (this.formData.commonCard === '1') {
					plateLicense = this.plate_license_2
					plateLicense = this.palindrome(plateLicense)
					if (plateLicense.length < 7) {
						alert('请输入正确的车牌号')
						return
					}
				}
				// if (this.formData.commonCard === '2') {
				//   plateLicense = this.plate_license_2
				//   plateLicense = this.palindrome(plateLicense)
				//   if (plateLicense.length < 8) {
				//     alert('请输入正确的车牌号')
				//     return
				//   }
				// }
				this.$emit('getPlateLicense', plateLicense)
				this.carCard = plateLicense
				// console.log(plateLicense);
				console.log("用户的车牌号码为：" + plateLicense);
				uni.navigateTo({
					url: "./popleCard?carCard=" + this.carCard
				})
			},
			palindrome(str) {
				var arr = str.split('')
				arr = arr.filter(function(val) {
					return (
						val !== ' ' &&
						val !== ',' &&
						val !== '.' &&
						val !== '?' &&
						val !== ':' &&
						val !== ';' &&
						val !== '`' &&
						val !== "'" &&
						val !== '_' &&
						val !== '/' &&
						val !== '-' &&
						val !== '\\' &&
						val !== '' &&
						val !== '(' &&
						val !== ')'
					)
				})
				return arr.join('')
			},
			checkIsHasSpecialStr(str) {
				var flag = false
				var arr = str.split('')
				arr.forEach(val => {
					if (
						val === '!' ||
						val === '}' ||
						val === '{' ||
						val === ']' ||
						val === '[' ||
						val === '&' ||
						val === '$' ||
						val === '@' ||
						val === ' ' ||
						val === ',' ||
						val === '.' ||
						val === '?' ||
						val === ':' ||
						val === ';' ||
						val === '`' ||
						val === "'" ||
						val === '_' ||
						val === '/' ||
						val === '-' ||
						val === '\\' ||
						val === '' ||
						val === '(' ||
						val === ')'
					) {
						flag = true
					}
				})
				return flag
			},
			checkIsHasChineseStr(str) {
				var Reg = /.*[\u4e00-\u9fa5]+.*/
				if (Reg.test(str)) {
					return true
				}
				return false
			}
		},
		computed: {
			plate_license_1() {
				return (
					this.formData.num0 +
					this.formData.num1 +
					this.formData.num2 +
					this.formData.num3 +
					this.formData.num4 +
					this.formData.num5 +
					this.formData.num6
				)
			},
			plate_license_2() {
				return (
					this.formData.num0 +
					this.formData.num1 +
					this.formData.num2 +
					this.formData.num3 +
					this.formData.num4 +
					this.formData.num5 +
					this.formData.num6 +
					this.formData.num7
				)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../static/css/index.css";
	.type1 {
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #39B54A;
		color: white;
	}

	.xn-container {
		height: 100%;
	}
	.vue-popup {
		.popup-content2 {
			position: fixed;
			height: 750upx;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: white;
			-webkit-transition: all 0.2s ease-in;
			transition: all 0.2s ease-in;
	
			p {
				line-height: 60upx;
				text-align: center;
			}
		}
	}
	.vue-popup {

		.popup-content {
			position: fixed;
			height: 1000upx;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: white;
			-webkit-transition: all 0.2s ease-in;
			transition: all 0.2s ease-in;

			p {
				line-height: 60upx;
				text-align: center;
			}
		}
	}

	.mask {
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		transition: all 0.2s ease-in;
	}

	.slide-enter-active {
		animation-name: slideInUp;
		animation-duration: 0.2s;
		animation-fill-mode: both;
	}

	.slide-leave-active {
		animation-name: slideOutDown;
		animation-duration: 0.2s;
		animation-fill-mode: both;
	}

	@keyframes slideInUp {
		0% {
			transform: translate3d(0, 100%, 0);
			visibility: visible;
		}

		to {
			transform: translateZ(0);
		}
	}

	@keyframes slideOutDown {
		0% {
			transform: translateZ(0);
		}

		to {
			visibility: hidden;
			transform: translate3d(0, 100%, 0);
		}
	}

	.delay-leave-active {
		-webkit-animation-delay: 0.2s;
		-moz-animation-delay: 0.2s;
		-o-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}

	.btnlq {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10upx 0;
	}

	.keyVehicleStyle {
		list-style: none;
		width: 100%;
		height: 550upx;
		background: #D2D5DB;
		position: fixed;
		bottom: 0;
		left: 0;
		// margin-left: -7%;
		padding-left: 25upx;
		padding-top: 30upx;

		li {
			border: 1upx solid #ccc;
			width: 70upx;
			height: 70upx;
			background: white;
			margin: 15upx 15upx;
			float: left;
			line-height: 70upx;
			text-align: center;
			border-radius: 15%;

		}
	}

	.flex-items-center {
		display: flex;
		align-items: center;
	}

	.wrap {
		height: 11.1rem;
		margin: 0.5rem 0.6rem;
		padding: 0.85rem 0.6rem;
		background-color: #fff;
		border-radius: 0.5rem;

		.radio-box {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: 0.7rem;
			text-align: right;
			color: #4a4a4a;

			input[type="radio"] {
				display: none;
			}

			label {
				padding-left: 0.6rem;
				cursor: pointer;

				img {
					width: 0.8rem;
					margin-right: 0.1rem;
				}
			}
		}

		.card-header {
			font-size: 0.75rem;
			margin: 0.2rem 0 0.5rem;
			color: #4a4a4a;
		}

		// input输入框
		.num-box {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.spot {
				width: 0.2rem;
				height: 0.2rem;
				border-radius: 50%;
				background-color: #d8d8d8;
			}

			&>div {
				width: 1.8rem;
				height: 1.8rem;
				border: 1px solid #e4e4e4;

				&.first {
					position: relative;
					text-align: center;
					line-height: 1.7rem;
					font-weight: 200;

					.input-wrap {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;

						&.active {
							z-index: 100;
						}
					}

					em {
						color: #979797;
						font-size: 1.6rem;
						line-height: 1.7rem;
					}

					span {
						display: inline-block;
						width: 100%;
						height: 100%;
						// background-color: #9cbce2;
						color: #828282;
						line-height: 1.8rem;
					}
				}

				&.active {
					border: 1px solid #4a90e2;

					&:after {
						border-bottom: 0.5rem solid #4a90e2;
					}
				}

				span {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;
					font-size: 1rem;
					color: #828282;

					&.first {
						background-color: #9cbce2;
						color: #fff;
						text-indent: 0.4rem;
						border-radius: 0;
					}
				}
			}
		}

		.submit-box {
			button {
				width: 100%;
				height: 2.2rem;
				border-radius: 0.25rem;
				font-size: 0.75rem;
				margin-top: 0.7rem;
				background: linear-gradient(320deg,
					rgba(74, 144, 226, 1) 0%,
					rgba(101, 172, 248, 1) 100%);
				color: #fff;
			}
		}

		.info {
			font-size: 0.5rem;
			margin-top: 0.9rem;
			color: #828282;
			text-align: left;

			img {
				width: 0.6rem;
				vertical-align: middle;
			}
		}
	}

	.first-word-wrap {
		// height: 9.4rem;
		background-color: #D2D5DB;
		padding: 0.6rem 0.8rem 1.1rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;

		.first-word {
			display: flex;
			justify-content: space-between;
			margin-bottom: 0.45rem;

			.word {
				box-sizing: border-box;
				width: 1.8rem;
				height: 1.8rem;
				// border: 1px solid #9cbce2;
				box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
				border-radius: 0.16rem;
				text-align: center;

				&.bordernone {
					border: none;
					box-shadow: none
				}

				span {
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					width: 100%;
					height: 100%;
					background-color: #fff;
					color: #000;
					// border: 1px solid #fff;
					border-radius: 0.125rem;
				}

				img {
					width: 1.6rem;
				}
			}

			&:nth-last-of-type(1) {
				margin-bottom: 0rem;
			}
		}
	}

	.keyboard-wrap {
		background-color: #D2D5DB;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0.6rem 0.6rem 0.4rem;

		.keyboard {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 2rem;
			margin-bottom: 0.3rem;

			span {
				text-align: center;
				display: flex;
				width: 1.8rem;
				align-items: center;
				justify-content: center;
				height: 1.8rem;
				margin: 0 0.3rem;
				box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
				background-color: #fff;
				border-radius: 0.125rem;

				&:active {
					background-color: #e4e4e4;
				}

				&.bordernone {
					border: none;
					box-shadow: none;
					background-color: #D2D5DB;

					&:active {
						background-color: #D2D5DB;
					}
				}

				&.delete {
					background-color: #465266;
					color: #fff;
					margin-bottom: 150upx;
					width: 130upx;

					img {
						width: 60upx;
					}
				}
			}
		}

		.cancel {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: absolute;
			right: 30upx;
			bottom: 30upx;

			span {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 3.6rem;
				height: 1.8rem;
				background-color: #465266;
				color: #fff;
				border-radius: 0.125rem;
			}
		}
	}
</style>
