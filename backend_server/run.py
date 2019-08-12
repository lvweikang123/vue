# 单元项目后端，返回假数据，配合前端vue项目

import json, os
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/')
@app.route('/index', methods=['POST', 'GET'])
def index():
    resp = {
        'msg': 'hello world'
    }
    resp_json = json.dumps(resp)
    return resp_json


@app.route('/weather')
def weather():
    if os.path.exists(r'6天气数据.json'):
        with open(r'6天气数据.json', mode='r', encoding='utf-8') as f:
            cache_data = json.load(f)
            return json.dumps(cache_data)
    return json.dumps(dict(msg='接口错误请联系管理员'))

@app.route('/weather_chart')
def weather_chart(weather_json=''):
    """ 气温趋势图 未来天
        后端提供高低温列表数据，前端v-chart line渲染
        图表 https://v-charts.js.org/#/line
    :return  context_chart { xArias: [25,27,30,34]}
    """
    context = {}
    chart_columns = ['日期', '高温', '低温']   # x轴，y1，y2
    chart_rows = []     #  [{'日期': '星期三', '高温': 33, '低温': 23}]
    weather_json = weather()
    weather_dict = json.loads(weather_json)
    data_list = weather_dict['data']['forecast']
    # 准备图表x轴y轴数据，最好不要写成语法糖
    for day in data_list:
        chart_rows.append({
            chart_columns[0]: day['date'],
            chart_columns[1]: day['high'].replace('高温 ', '').replace('℃', ''),
            chart_columns[2]: day['low'].replace('低温 ', '').replace('℃', ''),
        })
    context['chart_columns'] = chart_columns
    context['chart_rows'] = chart_rows
    return json.dumps(context)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
