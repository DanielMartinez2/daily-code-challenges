'''Screen Time

Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

    If any single day has 10 hours or more, it's too much.
    If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
    If the average of the seven days is greater than or equal to 6 hours, it's too much.

'''
def too_much_screen_time(hours):
    if not isinstance(hours, list):
        raise TypeError("Input must be a list")

    if len(hours) != 7:
        raise ValueError("Input must contain exactly seven days")

    if any(not isinstance(x, int) or isinstance(x, bool) for x in hours):
        raise TypeError("All values must be integers")
    mean = sum(hours)/7

    if max(hours) >= 10:
        return True
    elif mean >= 6:
        return True
    
    for i in range(0,5):
        avg = (hours[i] + hours[i+1] + hours[i+2])/3
        if avg >= 8:
            return True

    return False