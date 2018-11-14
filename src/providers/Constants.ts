let tag = true;
/*----------------------------------------后台Api地址----------------------------------------*/
export const APP_SERVE_URL = tag ? 'http://180.76.99.113:8090/api/v1/' : 'http://180.76.99.113:8091/api/v1/';

export const PAY_URL = tag ? 'http://www.5i4s.com/' : 'http://www.open4s.net/';
/*----------------------------------------延保合同地址----------------------------------------*/
export const YB_HT_SERVE_URL = 'http://iemcs.5i4s.com/apitest/SaveFIle/';
/*----------------------------------------三包合同地址----------------------------------------*/
export const SB_HT_SERVE_URL = 'http://iemcs.5i4s.com/apitest/SaveFIle/Sanbao/';
/*----------------------------------------服务协议地址----------------------------------------*/
export const FWXY_SERVE_URL = 'http://iemcs.5i4s.com/apitest/HTSign/';
/*----------------------------------------资料图片地址----------------------------------------*/
export const IMAGE_SERVE_URL = tag ? 'http://iemcs.5i4s.com/apitest/CLTP/' : 'http://180.76.234.7:8002/apitest/CLTP/';


/*----------------------------------------Upload地址----------------------------------------*/
export const APP_UPLOAD_URL = tag ? 'http://iemcs.5i4s.com/apitest/Upload/' : 'http://180.76.99.113:9000/Upload/';
/*----------------------------------------合同图片地址----------------------------------------*/
export const HT_SERVE_URL = tag ? 'http://iemcs.5i4s.com/apitest/' : 'http://180.76.99.113:9000/';
/*----------------------------------------上传资料图片地址----------------------------------------*/
export const CLTP_SERVE_URL = tag ? 'http://iemcs.5i4s.com/apitest/CLTP/' : 'http://180.76.99.113:9000/CLTP/';
/*----------------------------------------服务合同图片地址----------------------------------------*/
export  const FW_SERVE_URL = tag ? 'http://iemcs.5i4s.com/apitest/' : 'http://180.76.99.113:9000/';


/*----------------------------------------文件服务器地址----------------------------------------*/
export const FILE_SERVE_URL = 'http://ybfw.5i4s.com:9000/';//文件服务:测试环境


export const SIGN_IN_TO_DISMISS = 3;

/*----------------------------------------app版本升级服务地址----------------------------------------*/
export const APP_VERSION_SERVE_URL = 'http://172.16.19.86:8111/api/';//app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.

/*----------------------------------------微信认证服务api----------------------------------------*/
export const  WX_SERVE_URL =  tag ? 'http://iemcs.5i4s.com/apitest/' : 'http://180.76.234.7:8002/';//js安全域名: http://88.128.18.144:8100/?vconsole=show
// export const  WX_SERVE_URL = 'http://88.128.25.93:8102/api/ak/xiaojingling';//js安全域名: http://8xz2g7.natappfree.cc/?vconsole=show

export const IS_DEBUG = true;//是否开发(调试)模式

export const DEFAULT_AVATAR = './assets/img/avatar.png';//用户默认头像
export const PAGE_SIZE = 5;//默认分页大小
export const IMAGE_SIZE = 1024;//拍照/从相册选择照片压缩大小
export const QUALITY_SIZE = 94;//图像压缩质量，范围为0 - 100
export const REQUEST_TIMEOUT = 12000;//请求超时时间,单位为毫秒


export const ENABLE_FUNDEBUG = false;//是否启用fundebug日志监控
export const FUNDEBUG_API_KEY = '3701a358f79b7daa39592255bde6c3c8772efad642883e42dbb65f3f8ffbae11';//去https://fundebug.com/申请key

export const AMAP_WEB_SERVICES_KEY = '64942398e96adf7934611ebabd2f5c04';

export const APK_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/ionic2_tabs.apk';//android apk下载完整地址,用于android本地升级
export const APP_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/download.html';//app网页下载地址,用于ios升级或android本地升级失败





