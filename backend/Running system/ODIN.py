import requests

question = """Based on your last running data, we'd like to provide personalized workout recommendations. Please provide workout suggestions for running in the format below.
EASY, [Distance in miles], [Speed: 1=SLOW, 2=MED, 3=FAST]
MEDIUM, [Distance in miles], [Speed: 1=SLOW, 2=MED, 3=FAST]
HARD, [Distance in miles], [Speed: 1=SLOW, 2=MED, 3=FAST]
Example:
EASY, 2.2, 1
MEDIUM, 5.1, 2
HARD, 10.8, 2
Only answer in the provided format. Use decimal-numbers for the distance, but still rounded to the first digit. Dont deviate from that. It is absolutely crucial for you to not state any entire sentences. Just the example format!"""


def ask_odinai(user_id="90309cd5-8dc0-4ad4-bb39-63fa959066b4", question=question):
    API_URL = "https://api.tryterra.co/v2/chat/odinai"

    headers = {
        'dev-id': 'ananke-testing-Ka6sGn8znU',
        'x-api-key': '0qbR98k0kRrQ6ScLoNSbUQ-M6DeOxsbt'
    }

    query_params = {
        'user_id': user_id,
        'user_input': question,
        'enable_history': True,  # if you want OdinAI to remember and use previous dialogues
    }

    return requests.post(API_URL, headers=headers, params=query_params)


ask_odinai().text
