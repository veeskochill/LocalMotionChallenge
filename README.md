# LocalMotionChallenge
hopeful solution

https://www.getlocalmotion.com/code-challenge

I need to decide where each taxi should go initially. (Small improvement)


Treating each taxi separately we can decide how to maximize the number of people successfully transported in a number of steps. All things equal, we should favour short distances, and more passengers. Let's use the ratio of these two to make the decision.

Next best destination = # passengers to B / distance to B


