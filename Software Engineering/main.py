

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
        for item, needed in ingredients.items():
            if self.machine_resources.get(item, 0) < needed:
                print(f"Sorry there is not enough {item}.")
                return False
        return True

    def process_coins(self):
        try:
            dollars = int(input("how many large dollars?: ").strip() or "0")
            half = int(input("how many half dollars?: ").strip() or "0")
            quarters = int(input("how many quarters?: ").strip() or "0")
            nickels = int(input("how many nickels?: ").strip() or "0")
        except ValueError:
            print("Invalid input, assuming 0.")
            return 0.0
        total = dollars * 1.0 + half * 0.5 + quarters * 0.25 + nickels * 0.05
        total = round(total, 2)
        return total

    def transaction_result(self, coins, cost):
        if coins >= cost:
            change = round(coins - cost, 2)
            if change > 0:
                print(f"Here is ${change:.2f} in change.")
            return True
        else:
            print("Sorry, that's not enough money. Money refunded.")
            return False

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
