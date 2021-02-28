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

@app.route('/filter', methods = ['POST'])
def filtered(filter_1_value = None, filter_2_value = None, filter_3_value = None, filter_4_value = None):
    """
    filter by values, can have up to 4 filters
    return filtered list of jobs
    """
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

app.run()