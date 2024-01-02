.. _multinomial:

Multinomial distribution
========================


----


Story
-----

This is a generalization of the :ref:`binomial`. Instead of a Bernoulli trial consisting of two outcomes, each trial has :math:`K` outcomes. The probability of getting :math:`y_1` of outcome 1, :math:`y_2` of outcome 2, ..., and :math:`y_K` of outcome :math:`K` out of a total of :math:`N` trials is Multinomially distributed.


----


Example
-------

There are two alleles in a population, A and a. Each individual may have genotype AA, Aa, or aa. The probability distribution describing having :math:`y_1` AA individuals, :math:`y_2` Aa individuals, and :math:`y_3` aa individuals in a population of :math:`N` total individuals is Multinomially distributed.


----

Parameters
----------

:math:`N`, the total number of trials, and :math:`\boldsymbol{\theta} = \left\{\theta_1, \theta_2, \ldots,\theta_K\right\}`, the probabilities of each outcome. Note that :math:`\sum_{i=1}^K \theta_i = 1` and there is the further restriction that :math:`N = \sum_{i=1}^K y_i`.


----


Support
-------

 The :math:`K`-nomial distribution is supported on :math:`\mathbb{N}^K`.


----


Probability mass function
-------------------------

.. math::

	\begin{align}
	f(\mathbf{y};\boldsymbol{\theta}, N) = \frac{N!}{y_1!\,y_2!\cdots y_K!}\,\theta_1^{y_1}\,\theta_2^{y_2}\cdots\theta_K^{y_K}.
	\end{align}


----

Moments
-------

Mean of :math:`y_i`: :math:`N\theta_i`

Variance of :math:`y_i`: :math:`N\theta_i(1-\theta_i)`

Covariance of :math:`y_i, y_j` with :math:`j\ne i`: :math:`-N\theta_i\theta_j`

----


Usage
-----

The usage below assumes ``theta`` is a length :math:`K` array.

+----------------------+----------------------------------------+
| Package              | Syntax                                 |
+======================+========================================+
| **NumPy**            | ``rg.multinomial(N, theta)``           |
+----------------------+----------------------------------------+
| **SciPy**            | ``scipy.stats.multinomial(N, theta)``  |
+----------------------+----------------------------------------+
| **Stan sampling**    | ``multinomial(theta)``                 |
+----------------------+----------------------------------------+
| **Stan rng**         | ``multinomial_rng(theta, N)``          |
+----------------------+----------------------------------------+
| **Distributions.jl** | ``Multinomial(N, theta)``              |
+----------------------+----------------------------------------+


----

Related distributions
---------------------

- The Multinomial distribution generalizes the :ref:`binomial` to multiple dimensions.


----

Notes
-----

- For a sampling statement in Stan, the value of :math:`N` is implied.

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Multinomial_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.multinomial.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.multinomial.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/multinomial-distribution.html>`_
