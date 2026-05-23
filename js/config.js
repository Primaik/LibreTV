// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    feifan: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡资源',
        adult: false
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        adult: false
    },
    zuida: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
        adult: false
    },
    baiduyun: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
        adult: false
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
        adult: false
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        adult: false
    },
    tianya: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
        adult: false
    },
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '无尽资源',
        adult: false
    },
    modu: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
        adult: false
    },
    sanliuling: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
        adult: false
    },
    dytt: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
        adult: false
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
        adult: false
    },
    wangwang: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺资源',
        adult: false
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
        adult: false
    },
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速资源',
        adult: false
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
        adult: false
    },
    youku: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: '优酷资源',
        adult: false
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙资源',
        adult: false
    },
    xinlang: {
        api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源',
        adult: false
    },
    lezi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '乐子资源',
        adult: false
    },
    haihua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '海豚资源',
        adult: false
    },
    jiangyu: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '鲸鱼资源',
        adult: false
    },
    aidan: {
        api: 'https://lovedan.net/api.php/provide/vod',
        name: '爱蛋资源',
        adult: false
    },
    moduzy: {
        api: 'https://www.moduzy.com/api.php/provide/vod',
        name: '魔都影视',
        adult: false
    },
    feifanapi: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡API',
        adult: false
    },
    feifancj: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡采集',
        adult: false
    },
    feifancj2: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡采集HTTPS',
        adult: false
    },
    feifan1: {
        api: 'http://ffzy1.tv/api.php/provide/vod',
        name: '非凡线路1',
        adult: false
    },
    wolong2: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙采集',
        adult: false
    },
    baofeng2: {
        api: 'https://app.bfzyapi.com/api.php/provide/vod',
        name: '暴风APP',
        adult: false
    },
    wujin2: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽ME',
        adult: false
    },
    tianyazy: {
        api: 'https://tyyszyapi.com/api.php/provide/vod',
        name: '天涯海角',
        adult: false
    },
    guangsu2: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod',
        name: '光速HTTP',
        adult: false
    },
    xinlang2: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪HTTPS',
        adult: false
    },
    yilingba2: {
        api: 'https://api.1080zyku.com/inc/apijson.php',
        name: '1080JSON',
        adult: false
    },
    lezi2: {
        api: 'http://cj.lziapi.com/api.php/provide/vod',
        name: '乐子HTTP',
        adult: false
    },
    uku88: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷资源88',
        adult: false
    },
    wujincc: {
        api: 'https://api.wujinapi.cc/api.php/provide/vod',
        name: '无尽CC',
        adult: false
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '丫丫点播',
        adult: false
    },
    wolongcc: {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: '卧龙CC',
        adult: false
    },
    wujinnet: {
        api: 'https://api.wujinapi.net/api.php/provide/vod',
        name: '无尽NET',
        adult: false
    },
    wangwangapi: {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: '旺旺API',
        adult: false
    },
    zuidame: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: '最大点播',
        adult: false
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
        adult: false
    },
    bubugao: {
        api: 'https://api.yparse.com/api/json',
        name: '步步高资源',
        adult: false
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛点播',
        adult: false
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼资源',
        adult: false
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
        adult: false
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
        adult: false
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速博资源',
        adult: false
    },
    jinying: {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: '金鹰点播',
        adult: false
    },
    shandian: {
        api: 'https://sdzyapi.com/api.php/provide/vod',
        name: '閃電资源',
        adult: false
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '飘零资源',
        adult: false
    },
    modudongman: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '魔都动漫',
        adult: false
    },
    hongniu3: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛资源3',
        adult: false
    },
    suonisd: {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod',
        name: '索尼-闪电',
        adult: false
    },
    leba: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '乐播资源',
        adult: false
    },
    ck: {
        api: 'https://www.ckzy1.com/api.php/provide/vod',
        name: 'CK',
        adult: false
    },
    jkun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'jkun',
        adult: false
    },
    api155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155',
        adult: false
    },
    lsb: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'lsb',
        adult: false
    },
    yutu: {
        api: 'https://yutuzy10.com/api.php/provide/vod',
        name: '玉兔',
        adult: false
    },
    baiwan: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: '百万资源',
        adult: false
    },
    aosika: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源',
        adult: false
    },
    naixiang: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: '奶香香',
        adult: false
    },
    senlin: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '森林资源',
        adult: false
    },
    fanhao: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '番号资源',
        adult: false
    },
    jingpin: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: '精品资源',
        adult: false
    },
    shayu: {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: '鲨鱼资源',
        adult: false
    },
    xiaoji: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源',
        adult: false
    },
    xibao: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集',
        adult: false
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
