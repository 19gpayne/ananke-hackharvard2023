import requests

url = "https://api.tryterra.co/v2/daily?user_id=90309cd5-8dc0-4ad4-bb39-63fa959066b4&start_date=2023-10-22&end_date=2023-10-22&to_webhook=true&with_samples=true"

headers = {
    "accept": "application/json",
    "dev-id": "ananke-testing-Ka6sGn8znU",
    "x-api-key": "0qbR98k0kRrQ6ScLoNSbUQ-M6DeOxsbt"
}

response = requests.get(url, headers=headers)
print(response.json())


# url =
