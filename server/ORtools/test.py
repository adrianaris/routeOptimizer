import requests
response = requests.get('http://localhost:4000')
print(response.json())