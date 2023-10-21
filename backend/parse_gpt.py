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

# Test
response = """
EASY, 2, 1
MEDIUM, 5, 2
HARD, 10, 2
"""

print(parse_gpt_response(response))

