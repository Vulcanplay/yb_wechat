import {Injectable} from "@angular/core";
import {ToastController, LoadingController, Loading, AlertController, ModalController} from "ionic-angular";
import {REQUEST_TIMEOUT} from "./Constants";
import {GlobalData} from "./GlobalData";
import {WindowViewPage} from "../shared/window-view/window-view";

declare var wx;

@Injectable()
export class NativeService {
  private loading: Loading;
  private loadingIsOpen: boolean = false;

  constructor(private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private modalCtrl: ModalController,
              private globalData: GlobalData) {
  }

  /**
   * 是否微信浏览器
   */
  isWXBrowser = (() => {
    let isWx = null;
    return () => {
      if (isWx === null) {
        isWx = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
      }
      return isWx;
    };
  })();

  /**
   * 是否ios浏览器
   */
  isIosBrowser = (() => {
    let isIos = null;
    return () => {
      if (isIos === null) {
        isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      }
      return isIos;
    };
  })();


  /**
   * 只有一个确定按钮的弹出框.
   * 如果已经打开则不再打开
   */
  alert = (() => {
    let isExist = false;
    return (title: string, subTitle: string = '', message: string = '', callBackFun = null): void => {
      if (!isExist) {
        isExist = true;
        this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          message: message,
          buttons: [{
            text: '确定', handler: () => {
              isExist = false;
              callBackFun && callBackFun();
            }
          }],
          enableBackdropDismiss: false
        }).present();
      }
    };
  })();

  alertInfoWindow(title, type){
    let modal = this.modalCtrl.create(WindowViewPage, {
      title: title,
      type: type,
    }, {enterAnimation: 'center-modal-from-right-enter', leaveAnimation: 'center-modal-from-right-leave'});
    modal.present();
  }
  /**
   * 弹出提示
   */
  alertTip(title) {
    let toast = this.toastCtrl.create({
      message: title,
      duration: 3000,
      position: 'middle'
    });
    toast.present();

  }
  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
    if (!this.globalData.showLoading) {
      return;
    }
    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });
      this.loading.present();
      setTimeout(() => {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
      }, REQUEST_TIMEOUT);
    }
  };

  /**
   * 关闭loading
   */
  hideLoading(): void {
    if (!this.globalData.showLoading) {
      this.globalData.showLoading = true;
    }
    this.loadingIsOpen && this.loading.dismiss();
    this.loadingIsOpen = false;
  };
  /**
   * 判断是否有网络
   */
  getConnectionStatus(): Promise<boolean> {
    return new Promise((resolve) => {
      this.getNetworkType().then(res => {
        resolve(res !== 'none');
      })
    })
  }

  /**
   * 获取网络类型
   * @returns {Promise<string>}
   */
  getNetworkType(): Promise<string> {
    return new Promise((resolve) => {
      wx.getNetworkType({
        success: function (res) {
          let networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
          resolve(networkType);
        },
        fail: function () {
          resolve('none');
        }
      });
    });
  }

  /**
   * 选择照片或拍照
   */
  chooseImage(options = {}): Promise<string[]> {
    let ops = Object.assign({
      count: 9,//图片数量
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    }, options);
    return new Promise((resolve) => {
      wx.chooseImage(Object.assign({
        success: function (res) {
          let localIds = res.localIds; //返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          resolve(localIds);
        }
      }, ops));
    });
  }


  /**
   * 根据图片路径把图片转化为base64字符串
   */
  localIdToBase64(localId: string): Promise<any> {
    let that = this;
    return new Promise((resolve) => {
      wx.getLocalImgData({
        localId: localId,
        success: function (res) {
          let localData = res.localData;
          let base64 = that.isIosBrowser() ? localData : 'data:image/jpg;base64,' + localData;
          resolve({'localId': localId, 'base64': base64});
        }
      });
    });
  }

  /**
   * 根据图片路径数组把图片转化为base64字符串
   */
  localIdsToBase64(localIds: Array<string>): Promise<Array<any>> {
    let result = [];
    return new Promise((resolve) => {
      for (let localId of localIds) {
        this.localIdToBase64(localId).then(data => {
          result.push(data);
          if (result.length === localIds.length) {
            resolve(result);
          }
        })
      }
    });
  }

  /**
   * 图片预览
   * @param current
   * @param urls
   */
  previewImage(current = '', urls = []) {
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    });
  }

  /**
   * 调起微信扫一扫接口
   * @return {Promise<string>}
   */
  scanQRCode(needResult = '1'): Promise<string> {
    return new Promise((resolve) => {
      wx.scanQRCode({
        needResult: needResult, // 0扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          resolve(res.resultStr);
        }
      });
    });
  }

  /**
   * 拨打电话
   * @param number
   */
  callNumber(number: string): void {
    if (this.isIosBrowser) {
      let a = document.createElement('a');
      a.href = 'tel:' + number;
      a.style.visibility = 'hidden';
      document.body.appendChild(a);
      a.click();
    } else {
      window.location.href = 'tel:' + number;
    }
  }

  /**
   * 获得用户当前坐标
   */
  getUserLocation(type = 'gcj02'): Promise<Position> {
    return new Promise((resolve) => {
      wx.getLocation({
        type: type, //关于坐标系https://www.jianshu.com/p/d3dd4149bb0b
        success: function (res) {
          resolve({'longitude': res.longitude, 'latitude': res.latitude});
        }
      });
    });
  }

  /**
   * 在腾讯地图上显示坐标详细
   * 可以查看位置,导航
   */
  openLocation(options) {
    let ops = Object.assign({
      latitude: 0, // 纬度，浮点数，范围为90 ~ -90
      longitude: 0, // 经度，浮点数，范围为180 ~ -180。
      name: '', // 位置名
      address: '', // 地址详情说明
      scale: this.isIosBrowser() ? 15 : 18, // 地图缩放级别,整形值,范围从1~28。默认为最大
      infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    }, options);
    wx.openLocation(ops);
  }
}
