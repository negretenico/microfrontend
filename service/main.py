from flask import Flask
from blueprint.product import product_bp
if __name__=="__main__":
    app = Flask(__name__)
    app.register_blueprint(product_bp)
    app.run()