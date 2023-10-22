
import pandas as pd
from datetime import datetime
import numpy as np
import json

# extracting heart rate data


def parse_Workout_Data(body):
    # We have to extract fitness data which is then used for examining the intensity of the workout
    # Therefore 3 categroies are taken into account: 1. Distance 2. Heart-rate 3. Pace
    # For simplicity we first go for heart-rate

    df = pd.DataFrame(
        columns=['Time_HR', 'Heart-rate'])

    # Parsing time
    time_HR = [sample['timestamp'] for sample in (
        body['data'][0]['heart_rate_data']['detailed']['hr_samples'])]

    # Parsing heart-rate
    values_HR = [sample['bpm'] for sample in (
        body['data'][0]['heart_rate_data']['detailed']['hr_samples'])]

    df['Time_HR'], df['Heart-rate'] = time_HR, values_HR
    return df


def intensity_calculation(stats):
    assert isinstance(stats, pd.DataFrame), ValueError(
        "Input is not a dataframe")
    # We first have to define thresholds for Very light, light, moderate, hard and maximum workout
    # scientifically approved -> National Institute for Health (US Government)
    max_bpm = 190

    mean_HR = np.mean(stats['Heart-rate'].to_numpy())
    intensity_level = (max_bpm - mean_HR) / \
        max_bpm  # metric for intensity score
    Jfile = json.dumps(
        {'date': stats['Time_HR'][0], 'Intensity': intensity_level})
    return intensity_level, Jfile
