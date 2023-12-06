import requests

url = input("Digite o link do GIF: ")

response = requests.get(url)

with open("nailmaster.gif", "wb") as f:
    f.write(response.content)