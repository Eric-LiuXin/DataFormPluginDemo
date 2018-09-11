import json
import tabulator


class TestData:

    @staticmethod
    def get_json():
        with open("apps/utils/accounts.json", 'r') as load_f:
        #with open("./accounts.json", 'r') as load_f:
            load_dict = json.load(load_f)
        return load_dict