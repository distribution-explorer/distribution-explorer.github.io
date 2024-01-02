.. _motivation:

Motivation
==========

The building blocks of statistical models are probability distributions. Specifying a model amounts to choosing probability distributions that describe the process of data generation. In some cases, you need to derive the distribution based on specific considerations or your experiment or model (or even numerically compute it when it cannot be written in closed form). In many practical cases, though, your model is composed of standard probability distributions. These distributions have **stories** associated with them. That is, the mathematical particulars of the distribution follow from a description of a data generation process. For example, the story behind the Bernoulli distribution is as follows. The outcome of a coin flip is Bernoulli distributed. So in building models, if your data generation process matches the story of a distribution, you know that this is the distribution to choose for your model.

In Bayesian contexts, you need to specify priors for parameters. The prior encodes your knowledge about the values of a parameter before seeing the data. In practice, you can sketch a probability density function (PDF) for a parameter ,or more rarely the probability mass function (PMF) in the case where the parameter takes on discrete values. (Read on for definitions for PDFs and PMFs if those terms are unfamiliar to you.) It is convenient to find a named distribution with associated parameters that gives a PDF or PMF that match your sketch. 

The named distributions are accessed through various software packages. It is often time consuming to search through documentation to find the right syntax to use for sampling out of a distribution, plotting its PDF, etc. Having a convenient central place to look up the syntax for using a distribution in various software packages *with consistent choice of parametrization* is useful.

It is with these ideas in mind that I developed the Distribution Explorer. Each entry in the Explorer features a distribution with useful information, including its story, mathematical expressions for its PDF/PMF and CDF, moments, interactive plots of the PDF/PMF and CDF with sliders allowing adjustment of the parameters, and more. This helps you get a feel for the distribution, and also find parameters that match a sketch you may have for a prior.
