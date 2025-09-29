

recipes = {
    "small": {"ingredients": {"bread": 2, "ham": 4, "cheese": 4}, "cost": 1.75},
    "medium": {"ingredients": {"bread": 4, "ham": 6, "cheese": 8}, "cost": 3.25},
    "large": {"ingredients": {"bread": 6, "ham": 8, "cheese": 12}, "cost": 5.5},
}

resources = {"bread": 12, "ham": 18, "cheese": 24}


class SandwichMachine:
    def __init__(self, machine_resources):
        self.machine_resources = dict(machine_resources)

    def check_resources(self, ingredients):
        pass

    def process_coins(self):
        pass

    def transaction_result(self, coins, cost):
        pass

    def make_sandwich(self, sandwich_size, order_ingredients):
        pass


def print_report(machine):
    print(f"Bread: {machine.machine_resources.get('bread', 0)} slice(s)")
    print(f"Ham: {machine.machine_resources.get('ham', 0)} slice(s)")
    print(f"Cheese: {machine.machine_resources.get('cheese', 0)} ounce(s)")


def main():
    machine = SandwichMachine(resources)
    while True:
        choice = input("What would you like? (small/ medium/ large/ off/ report): ").strip().lower()
        if choice == "off":
            break
        if choice == "report":
            print_report(machine)
            continue
        if choice in recipes:
            print("Order received.")
        else:
            print("Invalid option.")


if __name__ == "__main__":
    main()
