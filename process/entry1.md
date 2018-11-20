Nov 18, 2018<br>
10:52PM

# Thinking Out Loud

Currently thinking of writing a calculator for some topics covered in the general multivariable calculus class since this service isn't found anywhere online. For the most part, online calculators stop at single integral calculators and graphing can cover basic graphing functions. I decided to do this in my 7 am multi variable calculus class as we were discussing surface integrals and there was no online calculator for it and so definately none with steps.


I'm pretty familiar with [Integral Calculator](https://www.integral-calculator.com/) and I find it as a pretty reliable way to calculate integrals as well as the steps involved. I checked to see if the code was open source - which it's not exactly? (it says to contact the original author for improvements, etc.) but it doesn't have a base source code that I can directly work with. Thankfully, the author has an entire description on how the software works and it helped point me in the right direction so bless him.

The entire way it works is pretty interesting so here's the gist of it: 

## Existing Solution for Basic Calc Functions
1. The user input is parsed browser side with Javascript into the proper LaTeX format using an algorithm called the Shunting-Yard algorithm

2. It then takes this analyzed user input and sends it back to the server where it's analyzed by Maxima (a CAS that I don't plan on writing a javascript version of)

3. Maxima analyzed the integral problem in 2 ways but the one that I'll focus on is going to be the one that follows the way a human would solve it. This program for computing the anti derivative is ~16000 lines of code in Lisp - a language I don't know the syntax and I definately do not plan on rewriting that in JS (however, libraries for implementing Lisp into the browser does exist)

4. The resulting answer is sent back to the browser

The UI is handled by a bunch of smaller JS libraries such as HammerJS and MathJax and I plan to use some of them as they're really intuitive and amazing overall - as a consumer myself.

I'm a broke college student and I don't plan on having to talk to advertisers so I'm looking to make the entire program executable in the browser without having to send the code to a server. With this in mind, using Maxima doesn't seem like a very good solution for now (maybe I haven't looked into it as much and maybe there are already implementations but I can't find any right now) and so I found SymPy which is program similar to that of Maxima except it's in Python but the entire source code is online.

Good thing is that there exists a way to implement Python in the browser using a library called Skulpt. 

It would seem however, that I would need to implement a couple libraries:

## Prelim Library List
---
- [ ] [SymPy](https://www.sympy.org/en/index.html) for actual solving of basic integrals/derivatives
- [ ] [Skulpt](http://www.skulpt.org/) to execute SymPy inbrowser since it's written in Python
- [ ] Various JS UI libraries to not make my calculator look like Wolfram Alpha

Seeing this, the file size would be rather large so I do plan on making it a web-app and running it on electron - especially since I HIGHLY doubt many functions will be capable of running in Safari.
