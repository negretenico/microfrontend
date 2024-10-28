from flask.blueprints import Blueprint
from flask import jsonify
import json
product_bp = Blueprint('product', __name__, url_prefix='/api/products')
with open( 'blueprint\data\MOCK_DATA.json','r') as f:
    data = json.load(f)

@product_bp.route("/",methods=['GET'])
def get_products():
    return jsonify(data)


@product_bp.route('<string:product_name>', methods=['GET'])
def get_product(product_name):
    print(data)
    return jsonify(dict(data).get(product_name,{}))
