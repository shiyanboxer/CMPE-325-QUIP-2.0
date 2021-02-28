import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
jobs = [{
    'id': 0,
    'program': 'Engineering',
    'experience': '1 year',
    'industry': 'Consulting',
    'location': 'Toronto',
    'employer': 'TD Bank',
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
    'employer': 'TD Bank',
    'salary': '80000', 
    'length': '12 month',
    'skills': 'JavaScript, Python',
    'remote_office': 'Remote'},
    {
    'id': 2,
    'program': 'Business',
    'experience': '1 year',
    'industry': 'Banking',
    'location': 'Toronto',
    'employer': 'TD Bank',
    'salary': '60000', 
    'length': '12 month',
    'skills': 'JavaScript, Python',
    'remote_office': 'Remote'},
]


@app.route('/', methods=['GET'])
def display():
    """
    returns json string of "jobs" dataset 
    """
    return jsonify(jobs)

@app.route('/filter', methods = ['GET'])
def filtered(filter_1_value, filter_2_value, filter_3_value, filter_4_value):
    filtered_jobs = [job for job in jobs if filter_1_value in job.values() or filter_2_value in job.values() or filter_3_value in job.values() or filter_4_value in job.values()]
    return jsonify(filtered_jobs)

@app.route('/sort', methods=['GET'])
def sort():
    param = request.args.get('param')
    reverse = request.args.get('reverse')
    if reverse == 'True':
        sortedJobs = sorted(jobs, key=lambda item: item.get(param), reverse=True)
    else:
        sortedJobs = sorted(jobs, key=lambda item: item.get(param))
    return jsonify(sortedJobs)

@app.route('/search', methods=['GET'])
def search():
    keyword = request.args.get('keyword')
    searchJobs = []
    for job in jobs:
        for i in job.values():
            if isinstance(i, str):
                if i.find(keyword) >= 0:
                    searchJobs.append(job)
                    pass
    return jsonify(searchJobs)


# @app.route('/api/v1/resources/books/all', methods=['GET'])
# def api_all():
#     return jsonify(books)


# @app.route('/api/v1/resources/books', methods=['GET'])
# def api_id():
#     # Check if an ID was provided as part of the URL.
#     # If ID is provided, assign it to a variable.
#     # If no ID is provided, display an error in the browser.
#     if 'id' in request.args:
#         id = int(request.args['id'])
#     else:
#         return "Error: No id field provided. Please specify an id."

#     # Create an empty list for our results
#     results = []

#     # Loop through the data and match results that fit the requested ID.
#     # IDs are unique, but other fields might return many results
#     for book in books:
#         if book['id'] == id:
#             results.append(book)

#     # Use the jsonify function from Flask to convert our list of
#     # Python dictionaries to the JSON format.
#     return jsonify(results)

app.run()