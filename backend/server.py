import logging
import flask
from flask import request
from terra.base_client import Terra

headers = {
    "accept": "application/json",
    "dev-id": "ananke-testing-Ka6sGn8znU",
    "x-api-key": "0qbR98k0kRrQ6ScLoNSbUQ-M6DeOxsbt"
}

def parse_gpt_response(response):
    # Split the response by lines
    lines = response.strip().split("\n")
    
    # Check if the response has the expected number of lines
    if len(lines) != 3:
        raise ValueError("The response does not have the expected format.")
    
    # Define the speed mapping
    speed_mapping = {
        '1': 'SLOW',
        '2': 'MED',
        '3': 'FAST'
    }
    
    parsed_data = {}
    
    for line in lines:
        # Split each line by comma
        parts = line.split(",")
        
        # Check if each line has the expected number of parts
        if len(parts) != 3:
            raise ValueError(f"The line '{line}' does not have the expected format.")
        
        # Get the workout level, distance, and speed
        level = parts[0].strip()
        distance = float(parts[1].strip())  # Convert distance to float
        speed = speed_mapping[parts[2].strip()]  # Map the speed to its string representation
        
        # Add to the parsed data
        parsed_data[level] = {
            'Distance': distance,
            'Speed': speed
        }
    
    return parsed_data

##################

logging.basicConfig(level=logging.INFO)
_LOGGER = logging.getLogger("app")

terra = Terra(api_key=headers['x-api-key'], dev_id=headers['dev-id'],
              secret="f07f85d267760a075515f9aa3f96ac8b5c573f5213f20d35")

app = flask.Flask(__name__)


@app.route("/consumeTerraWebhook", methods=["POST"])
def consume_terra_webhook() -> flask.Response:
    # body_str = str(request.get_data(), 'utf-8')
    body = request.get_json()
    _LOGGER.info(
        "Received webhook for user %s of type %s",
        body.get("user", {}).get("user_id"),
        body["type"])
    verified = terra.check_terra_signature(
        request.get_data().decode("utf-8"), request.headers['terra-signature'])
    if verified:
        print(parse_gpt_response(body['response']))
        return flask.Response(status=200)
    else:
        return flask.Response(status=403)

@app.route('/shutdown', methods=['POST'])
def shutdown():
    shutdown_function = request.environ.get('werkzeug.server.shutdown')
    if shutdown_function:
        shutdown_function()
    return 'Server shutting down...'
    
    





if __name__ == "__main__":
    app.run(host="localhost", port=8081)
