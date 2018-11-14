export interface UserInfo {
  Userid: string;
  Username: string;// 姓名
  NikeName: string; //昵称
  Email: string;//邮箱
  Phone: string; //手机号
  Sex: string;//性别
  AvatarId: string;//图像
  AvatarPath: string;//图像路径
  Openid: string;
  Sfzhm: string; //省份证号码
  QQ: string;//qq
  JF: String;

}

//车辆信息
export interface SearchCarInfo {
  OWNERPHONE: any;
  OWNER: any;//车主
  SONBRANDNAME: any;//子品牌
  CARSERIESNAME: any;//车系名称
  PZ_YB_MJCLMJCL001: any;	//买家信息ID
  PZ_YB_MJCLMJCL002: any;	//买家信息ID
  PZ_YB_MJCLMJCL003: any;	//车标题
  PZ_YB_MJCLCARZHID: any;	//车辆车型组合id
  PZ_YB_MJCLMJCL004: any;	//车架号
  PZ_YB_MJCLMJCL005: any;	//车牌号
  PZ_YB_MJCLMJCL006: any;	//发动机号
  PZ_YB_MJCLMJCL007: any;	//排量
  PZ_YB_MJCLMJCL008: any;	//初次等级时间
  PZ_YB_MJCLMJCL009: any;	//最后一次购买车险金额
  PZ_YB_MJCLMJCL010: any;	//当前行驶公里数
  PZ_YB_MJCLMJCL011: any;	//是否二手车 0.否 1.是			    //
  PZ_YB_MJCLMJCL012: any;	//车辆图片ID
  PZ_YB_MJCLMJCL014: any;	//0.是 1.否
  PZ_YB_MJCLMJCL013: any;	//车龄
  PZ_YB_MJCLMJCL015: any;	//0.是 默认 1.否			   / /
  PZ_YB_MJCLMJCL016: any;	//车辆购买价
  PZ_YB_MJCLMJCL017: any;	//新车购车发票抬头
  PZ_YB_MJCLMJCL018: any;	//原厂保修起始日期
  PZ_YB_MJCLMJCL019: any;	//原厂保修终止日期
  PZ_YB_MJCLMJCL020: any;	//原厂保修公里数
  PZ_YB_MJCLMJCL021: any;	//购车发票日期
  PZ_YB_MJCLMJCL022: any;	//车辆是否用于非营业性质0.是			   / /1.否			   / /
  PZ_YB_MJCLMJCL025: any;	//0.身份证1.护照			 /  /
  PZ_YB_MJCLMJCL026: any;	//身份证号
  PZ_YB_MJCLMJCL024: any;	//0.默认1.不默认
  ISDEL: any;  //0.未删除 1.删除
  PZ_YB_MJCLMJCL027:any ; //行驶证号
  PZ_YB_MJCLMJCL028:any;//初次等记地点
  PZ_YB_MJCLMJCL030:any;//新车出厂日期
  PZ_YB_MJCLMJCL031:any;  //车型
  MJXX009:any;//邮箱
  MJXX012:any;//邮编
  MJXX020:any;//通讯地址
  MJXX010:any;//联系方式
}


// MJDL001	id
// MJDL002	登录手机号
// MJDL003	登录密码
// MJDL004	验证码
// MJDL005	是否启用
// MJDL006	OPEIND
// MJXX001	用户信息ID
// CREATEUSER	创建人
// CREATETIME	创建时间
// UPDATEUSER	修改人
// UPDATETIME	修改时间
// ISDEL	0: 未删除
//1: 已删除
// MJDL007	微信号
// MJXX001	ID
// MJXX002	姓名
// MJXX003	昵称
// MJXX004	性别0:女 1：男
// MJXX005	支付密码
// QYSS001	所属区域
// QYSS002	所属区域名称
// MJXX006	手机号码
// CREATEUSERID	创建人
// CREATEUSER	创建人
// CREATETIME	创建时间
// UPDATEUSER	修改人
// UPDATETIME	修改时间
// ISDEL	0: 未删除
//1: 已删除
// MJXX007	身份证号
// MJXX008	证件号码类型
// MJXX009	邮箱
// MJXX010	固话
// MJXX011	QQ

//登录信息
export interface LoginInfo {
  access_token: string;
  success: boolean;
  msg: string;
  data: UserInfo;
}

//车辆实体
export interface CarInfo {
  BRANDCODE: any;
  BRANDNAME: any;
  CARSERIESCODE: any;
  CARSERIESNAME: any;
  MJCL001: any;
  MJCL008: any;
  MJCL009: any;
  MJCL010: any;   //当前行驶公里数
  MJCL026: any;
  MJCL027: any;
  MJCL028: any;
  MJCL029:any;
}

//首页车辆实体
export interface HomeCarInfo {
  TYPE: any;//1套餐查询 0、路由
  MJCL002: any; //买家车辆ID
  MJCL003: any; //车标题
  BRANDNAME: any;//品牌
  MJCL029: any;//车辆LOGO
  CARSERIESNAME: any; //车系
}

//页面跳转标识
export interface PageTip {
  pageType: any; //路由页面标识    0：首页 1：延保页面 2、检测网点 3、个人中心
  pageParams: any;  //路由页面所需要的参数
}

//延保产品搜索
//车辆配置
export interface ProductParams {
  type: any;   //返回页面类型  0 延保  1、我的车辆
  carseriesId: any;   //车系
  carseriesName: any; //车系名称
  brandid: any; //品牌ID
  brandname: any;//品牌名称
  groupid: any;//组合ID
  MJCL029: any;
}

export interface MineParams {
  userid: any;
  type: any;//0 我的  1、首页  2、支付
}



//城市实体
export interface CityArry {
  cityid: any;
  cityname: any;
}


//首页添加车辆

export interface HomeaddCarARR{
  cars: CarInfo,
  users: UserInfo
}


//延保产品价格

export interface ProductInfo{


}


export interface mycar{
  BRANDLOGO:any;
  PZ_YB_MJCLMJCL001:any;
  PZ_YB_MJCLMJCL002:any;
  PZ_YB_MJCLMJCL003:any;
  PZ_YB_MJCLCARZHID:any;
  PZ_YB_MJCLMJCL004:any;
  PZ_YB_MJCLMJCL005:any;
  PZ_YB_MJCLMJCL006:any;
  PZ_YB_MJCLMJCL007:any;
  PZ_YB_MJCLMJCL008:any;
  PZ_YB_MJCLMJCL009:any;
  PZ_YB_MJCLMJCL010:any;
  PZ_YB_MJCLMJCL011:any;
  PZ_YB_MJCLMJCL012:any;
  PZ_YB_MJCLMJCL014:any;
  PZ_YB_MJCLMJCL013:any;
  PZ_YB_MJCLMJCL015:any;
  PZ_YB_MJCLMJCL016:any;
  PZ_YB_MJCLMJCL017:any;
  PZ_YB_MJCLMJCL018:any;
  PZ_YB_MJCLMJCL019:any;
  PZ_YB_MJCLMJCL020:any;
  PZ_YB_MJCLMJCL021:any;
  PZ_YB_MJCLMJCL022:any;
  PZ_YB_MJCLMJCL025:any;
  PZ_YB_MJCLMJCL026:any;
  PZ_YB_MJCLMJCL024:any;
  ISDEL:any;
  PZ_YB_MJCLMJCL027:any;
  PZ_YB_MJCLMJCL028:any;
  PZ_YB_MJCLMJCL030:any;
  PZ_YB_MJCLMJCL031:any;

}
