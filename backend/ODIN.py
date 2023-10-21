import requests

question = """Based on your last month's running data, we'd like to provide personalized workout recommendations. Please provide workout suggestions for running in the format below.
EASY, [Distance in miles], [Speed: 1=SLOW, 2=MED, 3=FAST]
MEDIUM, [Distance in miles], [Speed: 1=SLOW, 2=MED, 3=FAST]
HARD, [Distance in miles], [Speed: 1=SLOW, 2=MED, 3=FAST]
Example:
EASY, 2, 1
MEDIUM, 5, 2
HARD, 10, 2
Only answer in the provided format. Dont deviate from that"""

def ask_odinai(user_id =  "36be8d74-ed65-4c76-94cf-e9e7789e399e", question = question):
  API_URL = "https://api.tryterra.co/v2/chat/odinai"

  headers = {
    'dev-id': 'ananke-testing-Ka6sGn8znU',
    'x-api-key': '0qbR98k0kRrQ6ScLoNSbUQ-M6DeOxsbt'
  }

  query_params = {
    'user_id': user_id,
    'user_input': question,
    'enable_history': True, #if you want OdinAI to remember and use previous dialogues
  }

  return requests.post(API_URL, headers=headers, params=query_params)
ask_odinai().text
