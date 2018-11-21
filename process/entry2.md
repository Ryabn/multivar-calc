Nov 19, 2018<br>
02:48PM

# Initial Problems

So far, the best math libraries are only written in Python - makes sense as python is amazing for computational stuff but the problem is, there's no direct way to make python work in Javascript. My original solution turns out to be an extremely weak transpiler that doesn't really have all the functionalities. I tried out SymPy and it is absolutely amazing, just as I expected but trying to port this into the browser is kinda stupid. The thing is, the only way I can see of making this work is hoping that Transcrypt or PyPy is capable of actually transpiling the entire library into Javascript.

## Fallback Plan
My main area of interest here is to create an extremely informative and useful calculator for later stages of multivariable calculus. What this means is that I'll end up having to write some of my own math functions in Javascript and send the more heavy lifting (such as integrals) to a backend server. I know I said that I wanted to write one without a server but I just don't think it's feasible with our current tech. With that being said, I haven't thought about this idea much but I can try to run a virtual environment in the background of an electron app usingPython-shell but I'm not entirely sure yet.

## Current Focus

I saw some really cool implementations of WebGL this past week at Hack On The Hill at UCLA and my current plan now is to implement my 3d grapher first that will display bounds and solids and whatnot.