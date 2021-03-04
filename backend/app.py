import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
jobs = [{
    'id': 0,
    'program': 'Computer Science',
    'job_title': 'Software Engineer Intern',
    'industry': 'Banking',
    'location': 'Toronto',
    'employer': 'TD Bank',
    'salary': '60000',
    'length': '12 month',
    'skills': 'JavaScript, Python, React',
    'remote_office': 'Office'},
    {
    'id': 1,
    'program': 'Engineering',
    'job_title': 'Software Engineer Intern',
    'industry': 'Banking',
    'location': 'Ottawa',
    'employer': 'RBC',
    'salary': '80000',
    'length': '12 month',
    'skills': 'JavaScript, Flask, Docker',
    'remote_office': 'Remote'},
    {
    'id': 2,
    'program': 'Engineering' ,
    'job_title': 'Software Engineer Intern',
    'industry': 'Payments',
    'location': 'Vancouver',
    'employer': 'Wealthsimple',
    'salary': '70000', 
    'length': '8 month',
    'skills': 'Python, C, Java',
    'remote_office': 'Remote'},
    {
    'id': 3,
    'program': 'Computer Science',
    'job_title': 'Technical Consulting Intern',
    'industry': 'Consulting',
    'location': 'Ottawa',
    'employer': 'Deloitte',
    'salary': '55000', 
    'length': '12 month',
    'skills': 'Excel, PowerPoint',
    'remote_office': 'Office'},
    {
    'id': 4,
    'program': 'Business',
    'job_title': 'Marketing Intern',
    'industry': 'Marketing',
    'location': 'Toronto',
    'employer': 'Facebook',
    'salary': '50000', 
    'length': '12 month',
    'skills': 'Power Point, Graphic Design',
    'remote_office': 'Office'},
    {
    'id': 5,
    'program': 'Engineering',
    'job_title': 'Civil Engineer Intern',
    'industry': 'Oil and Gas',
    'location': 'Toronto',
    'employer': 'TC Energy',
    'salary': '70000', 
    'length': '12 month',
    'skills': 'Excel, CAD',
    'remote_office': 'Office'},
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

@app.route('/search', methods=['POST'])
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

app.run()