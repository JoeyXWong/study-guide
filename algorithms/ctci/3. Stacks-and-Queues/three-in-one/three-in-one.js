/**
 * How would you use a single array to represent 3 stacks
 *
 * psuedo code:
 * create stack of size n
 * partition the stack in groups of threes
 * first stack is index 0,3,6,9,12,15...
 * second stack is index 1,4,7,10,13,16...
 * third stack is index 2,5,8,11,14,17...
 *
 * stack1 = counter for top, starts at 0, push increase index by 3, pop decrease index by 3 until the min at 0
 * stack2 = counter for top, starts at 1, push increase index by 3, pop decrease index by 3 until the min at 1
 * stack3 = counter for top, starts at 2, push increase index by 3, pop decrease index by 3 until the min at 2
 */
