import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
jobs = [{
    'id': 0,
    'program': 'Engineering',
    'experience': '1 year',
    'industry': 'Banking',
    'location': 'Toronto',
    'Employer': 'TD Bank',
    'salary': '60000', 
    'length': '12 month',
    'skills': 'JavaScript, Python',
    'remote_office': 'Remote'},
    {
    'id': 1,
    'program': 'Engineering',
    'experience': '1 year',
    'industry': 'Banking',
    'location': 'Toronto',
    'Employer': 'TD Bank',
    'salary': '60000', 
    'length': '12 month',
    'skills': 'JavaScript, Python',
    'remote_office': 'Remote'},

    {
    'id': 2,
    'program': 'Engineering',
    'experience': '1 year',
    'industry': 'Banking',
    'location': 'Toronto',
    'Employer': 'TD Bank',
    'salary': '60000', 
    'length': '12 month',
    'skills': 'JavaScript, Python',
    'remote_office': 'Remote'},
]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''


@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
    return jsonify(books)


@app.route('/api/v1/resources/books', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify an id."

    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for book in books:
        if book['id'] == id:
            results.append(book)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return jsonify(results)

app.run()