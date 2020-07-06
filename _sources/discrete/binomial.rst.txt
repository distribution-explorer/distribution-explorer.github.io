.. _binomial:

Binomial distribution
=====================


----


Story
-----

We perform :math:`N` Bernoulli trials, each with probability :math:`\theta` of success.  The number of successes, :math:`n`, is Binomially distributed.


----


Example
-------

Distribution of plasmids between daughter cells in cell division. Each of the :math:`N` plasmids as a chance :math:`\theta` of being in daughter cell 1 ("success"). The number of plasmids, :math:`n`, in daughter cell 1 is Binomially distributed.


----

Parameters
----------

There are two parameters: the probability :math:`\theta` of success for each Bernoulli trial, and the number of trials, :math:`N`.


----


Support
-------

The Binomial distribution is supported on the set of nonnegative integers less than or equal to :math:`N`.


----


Probability mass function
-------------------------

.. math::

	\begin{align}
	f(n;N,\theta) = \begin{pmatrix}
	N \\
	n
	\end{pmatrix}
	\theta^n (1-\theta)^{N-n}.
	\end{align}


----

Moments
-------

Mean: :math:`N\theta`

Variance: :math:`N\theta(1-\theta)`


----


Usage
-----

+-----------------+----------------------------------+
| Package         | Syntax                           |
+=================+==================================+
| **NumPy**       | ``rg.binomial(N, theta)``        |
+-----------------+----------------------------------+
| **SciPy**       | ``scipy.stats.binom(N, theta)``  |
+-----------------+----------------------------------+
| **Stan**        | ``binomial(N, theta)``           |
+-----------------+----------------------------------+


----

Related distributions
---------------------

- The :ref:`bernoulli` is a special case of the Binomial distribution where :math:`N=1`.
- In the limit of :math:`N\to\infty` and :math:`\theta\to 0` such that the quantity :math:`N\theta` is fixed, the Binomial distribution becomes a :ref:`Poisson` with parameter :math:`N\theta`.
- The Binomial distribution is a limit of the :ref:`hypergeometric`. Considering the Hypergeometric distribution parametrized by :math:`N`, :math:`a`, and :math:`b`, and taking the limit of :math:`a+b\to\infty` such that :math:`a/(a+b)` is fixed, we get a Binomial distribution with parameters :math:`N=N` and :math:`\theta = a/(a+b)`.
- The Binomial distribution is a special case of the :ref:`multinomial` when :math:`K = 2`.


----

PMF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('binomial'))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Binomial_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.binomial.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.binom.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/binomial-distribution.html>`_
