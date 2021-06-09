from requests_html import HTMLSession
from pyquery import PyQuery as pq
session = HTMLSession()
r = session.get('https://www.succulentsandsunshine.com/types-of-succulents/fairy-castle-cactus-acanthocereus-tetragonus/')
parent = r.html.find('.fusion-column-last', first=True)
print(parent.text)
el = parent.find('h1', first=True)
print(el.text)
el = parent.find('h3', first=True)
print(el.text)
for el in parent.find('div'):
    print(el.text)
h5 = parent.find('h5', first=True)
print(h5.text)
for li in parent.find('li'):
    print(li.find('i', first=True))
    print(li.find('p', first=True).text)
parent = r.html.find('.fusion-builder-row-3', first=True)
col1, col2, col3 = parent.find('.fusion-text')
print(col1.find('h2', first=True).text)
print(col2.find('h3', first=True).text)
print(col2.find('h3 + p', first=True).text)
d = pq(col2.html)
for h5 in d('h5'):
    print(h5.text)
    print(d('h5').siblings()[0].text)
    print('--------------')
class Node:
    def __init__(self, container) -> None:
        self.container = container