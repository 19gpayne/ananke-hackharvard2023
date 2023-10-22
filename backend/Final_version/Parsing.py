
import pandas as pd
from datetime import datetime
import numpy as np
import json

# extracting heart rate data


def parse_Workout_Data(body):
    # We have to extract fitness data which is then used for examining the intensity of the workout
    # Therefore 3 categroies are taken into account: 1. Distance 2. Heart-rate 3. Pace
    df = pd.DataFrame(
        columns=['Time_HR', 'Heart-rate'])
    # time_d = [sample['timestamp'] for sample in (
    #    body['data'][0]['distance_data']['detailed']['distance_samples'])]
    # parsed_time_d = [datetime.strptime(
    #    t, "%Y-%m-%dT%H:%M:%S%z").strftime("%H%M%S") for t in time_d]
    time_HR = [sample['timestamp'] for sample in (
        body['data'][0]['heart_rate_data']['detailed']['hr_samples'])]
    # parsed_time_HR = [datetime.strptime(
    #    t, "%Y-%m-%dT%H:%M:%S%z").strftime("%H%M%S") for t in time_HR]

    values_HR = [sample['bpm'] for sample in (
        body['data'][0]['heart_rate_data']['detailed']['hr_samples'])]
    # values_dist = [sample['distance_meters'] for sample in (
    #    body['data'][0]['distance_data']['detailed']['distance_samples'])]
    df['Time_HR'], df['Heart-rate'] = time_HR, values_HR
    return df


def intensity_calculation(stats):
    assert isinstance(stats, pd.DataFrame), ValueError(
        "Input is not a dataframe")
    # We first have to define thresholds for Very light, light, moderate, hard and maximum workout
    max_bpm = 190
    # levels_HR = {
    #   'Very light': 0.55,
    #  'Light': 0.65,
    # 'Moderate': 0.75,
    # 'Hard': 0.85,
    # 'Extreme': 0.95
    # }

    mean_HR = np.mean(stats['Heart-rate'].to_numpy())
    intensity_level = (max_bpm - mean_HR) / max_bpm
    Jfile = json.dumps({'date': '000000', 'Intensity': intensity_level})
    return intensity_level, Jfile
