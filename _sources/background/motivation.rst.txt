.. _motivation:

Motivation
==========

The building blocks of statistical models are probability distributions. Specifying a model amounts to choosing probability distributions that describe the process of data generation. In some cases, you need to derive the distribution based on physical considerations (or even numerically compute it when it cannot be written in closed form). In many practical cases, though, your model is composed of standard probability distributions. These distributions have **stories** associated with them. That is, the distribution follows from a description of a data generation process. For example, the story behind the Bernoulli distribution is as follows. The outcome of a coin flip is Bernoulli distributed. So in building models, if your data and model match the story of a distribution, you know that this is the distribution to choose for your model.

In Bayesian contexts, you need to specify priors for parameters. The prior encodes your knowledge about the values of a parameter before seeing the date. In practice, you can sketch a probability density function (PDF) of probability mass function (PMF) describing the parameters. (Read on for definitions for PDFs and PMFs if those terms are unfamiliar to you.) It is convenient to find a named distribution with associated parameters that gives a PDF or PMF that match your sketch. 

The names distributions are accessed through various software packages. It is often time consuming to search through documentation to find the right syntax to use for sampling out of a distribution, plotting its PDF, etc. Have a convenient central place to look up the syntax for using a distribution in various software packages *with consistent choice of parametrization* is useful.

It is with these ideas in mind that I developed this distribution explorer. Each vignette features a distribution and has its story. It has additional information about each distribution and importantly have interactive plots of the PDF/PMF and CDF of the distribution with sliders allowing adjustment of the parameters. This helps you get a feel for the distribution, and also find parameters that match a sketch you may have for a prior.
