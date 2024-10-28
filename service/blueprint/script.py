import json
from itertools import groupby
from operator import itemgetter
with open( 'blueprint\data\MOCK_DATA.json','r') as f:
    data = json.load(f)
    data.sort(key=itemgetter("sport_type"))

    # Group by 'category'
grouped_data = {key: list(group) for key, group in groupby(data, key=itemgetter("sport_type"))}
with open('blueprint\data\MOCK_DATA.json', 'w') as f:
    json.dump(grouped_data, f, ensure_ascii=False, indent=4)
