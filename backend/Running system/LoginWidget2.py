
import flask
import json
import http
import os

from flask import request
from terra.base_client import Terra

terra = Terra(api_key="0qbR98k0kRrQ6ScLoNSbUQ-M6DeOxsbt",
              dev_id="ananke-testing-Ka6sGn8znU", secret="f07f85d267760a075515f9aa3f96ac8b5c573f5213f20d35")


widget_response = terra.generate_widget_session(
    reference_id="USER ID IN YOUR APP",
    providers=["FITBIT"],
    auth_success_redirect_url="https://success.url",
    auth_failure_redirect_url="https://failure.url",
    language="en"
).get_parsed_response()

print(widget_response)
