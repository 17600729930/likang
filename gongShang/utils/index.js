const baseUrl = "http://192.168.10.134:4144/yunnanICBC/issueObu";

// 校验车牌号
const shibieCar = function(){
	return baseUrl + "/applet/checkPalteForFree"
}

// 照片识别
const zhaopian = function(){
	return baseUrl + "/applet/identifyingPictures"
}

// 判断身份证的文字信息是否修改
const shenfen = function(){
	return baseUrl + "/applet/saveCustomerMsg"
}

// 判断车辆文字信息是否修改
const carXinxi = function(){
	return baseUrl + "/applet/saveVehicleMsg"
}

export default{
	baseUrl,
	shibieCar,
	zhaopian,
	shenfen,
	carXinxi
}