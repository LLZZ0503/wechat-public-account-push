export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "",wxb2ea57f500d063a8
    // 公众号APP_SECRET
    APP_SECRET: "",8dac11bb56716520839fdf95277c7afd
    // 模板消息id
    TEMPLATE_ID: "",u5GhBjoCP9iX5DN0hrwiXjUgdz3yFKXh9oyCbIfCs
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["ohv3W5liYmroAuBJr2Mkxn6Dh6AY"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "浙江",
    // 所在城市
    CITY: "温州",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "肉肉", "year": "2002", "date": "05-03"},
      {"name": "胖胖", "year": "2002", "date": "03-24"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-08-06",
    // 遇见肉肉的日子
    MARRY_DATE: "2022-07-19",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "I Love You Three Thousand Times"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们遇见的第{{love_day.DATA}}天
// 离我们见面还有{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
