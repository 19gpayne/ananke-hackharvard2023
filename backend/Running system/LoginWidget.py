
import flask
import json
import http
import os

from flask import request
from terra.base_client import Terra

terra = Terra(api_key=os.environ["0qbR98k0kRrQ6ScLoNSbUQ-M6DeOxsbt"],
              dev_id=os.environ["ananke-testing-Ka6sGn8znU"], secret=os.environ["f07f85d267760a075515f9aa3f96ac8b5c573f5213f20d35"])


def hello_terra():
    # Print it here
    # print(json.dumps(request.get_json(), indent = 4))

    # You can directly use this to handle a terra webhook:
    response = terra.handle_flask_webhook(request)

    return flask.Response("Yay Terra is awesome",  http.HTTPStatus.OK)


def setup(app: flask.Flask):
    bp = flask.Blueprint("sample", __name__, "")
    bp.add_url_rule("/hello", view_func=hello_terra, methods=["POST"])
    app.register_blueprint(bp)
