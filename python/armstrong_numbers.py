# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    answer = []
    sum_of_array = 0
   
    for value in numbers:
        if value < 10:
            answer.append(value)
        else:
            initial_sum = 0
            split_number = []
            string_value = str(value)
            for number in range(0, len(string_value)):
                split_number.append(int(string_value[number]))
            for secondNumber in split_number:
                initial_sum += secondNumber ** len(split_number)
            sum_of_array = initial_sum
            if sum_of_array == value:
             answer.append(sum_of_array)
    return answer  
   
        
