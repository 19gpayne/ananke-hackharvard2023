
import flask
import json
import http
import os

from flask import request
from terra.base_client import Terra

terra = Terra(api_key="sB7OFhbSXjmv660vRz6DDYjEIBvbpXuc",
              dev_id="ananke-testing-dz4Oe3bcjY", secret="a28295b7423998ef9a2f2896f2fe45b20c9aaac85d09140f")


widget_response = terra.generate_widget_session(
    reference_id="USER ID IN YOUR APP",
    providers=["GOOGLE"],
    auth_success_redirect_url="https://success.url",
    auth_failure_redirect_url="https://failure.url",
    language="en"
).get_parsed_response()

print(widget_response)
