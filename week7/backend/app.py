from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get-weather', methods=['POST'])
def get_weather():
    data = request.get_json()
    city = data.get('city', '')

    if not city:
        return jsonify({'error': 'City not provided'}), 400

    # Predefined or hardcoded weather data for testing
    fake_weather_data = {
        'location': f"{city}, Country",  # Just use the city for now
        'temperature': {
            'current': 41,  # Temperature in Celsius
            'feels_like': 0,  # Feels like temperature
        },
        'humidity': 70,  # Humidity in percentage
        'conditions': 'Clear sky',  # Weather conditions
        'wind': {
            'speed': 5,  # Wind speed in meters per second
            'direction': 'N',  # Wind direction
        },
        'last_updated': '2025-03-26 12:00:00',  # Placeholder timestamp
    }

    return jsonify({'weather': fake_weather_data})


if __name__ == '__main__':
    app.run(debug=True)
