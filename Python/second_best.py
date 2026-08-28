'''Second Best

Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

    The second most expensive laptop if it is within your budget, or
    The most expensive laptop that is within your budget, or
    0 if no laptops are within your budget.

    Duplicate prices should be ignored.

'''
def validate_inputs(laptops, budget):
    if not isinstance(laptops, list) or not all(isinstance(x, int) for x in laptops):
        raise TypeError("Laptops must be a list of integers.")
    if not isinstance(budget, int):
        raise TypeError("Budget must be an integer.")
    if laptops is None or budget is None:
        raise TypeError("Laptops and budget cannot be None.")
    
def get_laptop_cost(laptops, budget):
    validate_inputs(laptops, budget)
    #se laptops vazio, return 0
    if not laptops:
        return 0
    no_duplicates = list(set(laptops))        
    sorted_laptops = sorted(no_duplicates)    
    if budget >= sorted_laptops[len(sorted_laptops)-2]:
        return sorted_laptops[len(sorted_laptops)-2]
    
    within_budget = [x for x in sorted_laptops if x<= budget]    
    if not within_budget:
        return 0
    if len(within_budget) >= 1:
        return max(within_budget)