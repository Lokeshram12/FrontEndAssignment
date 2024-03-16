from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/register', methods=['POST'])
def register():
    # Retrieve form data from the request body
    data = request.json
    
    # Check if 'name' and 'email' fields are present and not empty
    if 'name' not in data or 'email' not in data or not data['name'] or not data['email']:
        # If validation fails, return a JSON response with an error message and a 400 status code
        return jsonify({'success': False, 'message': 'Name and Email are required.'}), 400
    
    # If all validation passes, return a success message
    return jsonify({'success': True, 'message': 'Registration successful.'})

if __name__ == '__main__':
    app.run(debug=True)
