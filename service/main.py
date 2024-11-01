from flask import Flask
from blueprint.product import product_bp
from flask_cors import CORS

if __name__=="__main__":
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(product_bp)
    app.run()