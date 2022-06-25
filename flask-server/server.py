from flask import Flask,jsonify
from flask_cors import CORS
import aws_controller
from dynamodb_json import json_util as json
app = Flask(__name__);
CORS(app)

#Articles API Route

@app.route('/articles', methods=["GET"], strict_slashes=False)
def articles():
    return jsonify(json.loads(aws_controller.get_items()))

if __name__ == "__main__":
    app.run(debug=True)

