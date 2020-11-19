.. _poisson:

Poisson distribution
====================

----


Story
-----

The number :math:`n` of arrivals of a Poisson process in unit time is Poisson distributed.


----


Example
-------

The number of mutations in a strand of DNA per unit length (since mutations are rare) are Poisson distributed.


----


Parameters
----------

The single parameter is the rate :math:`\lambda` of the arrival of the Poisson process.


----


Support
-------

The Poisson distribution is supported on the set of nonnegative integers.

----


Probability mass function
-------------------------

.. math::

    \begin{align}
    f(n;\lambda) = \frac{\lambda^n}{n!}\,\mathrm{e}^{-\lambda}.
    \end{align}


----


Moments
-------

Mean: :math:`\lambda`

Variance: :math:`\lambda`


----


Usage
-----

+-----------------+-----------------------------------------------------------------------+
| Package         | Syntax                                                                |
+=================+=======================================================================+
| **NumPy**       | ``rg.poisson(lam)``                                                   |
+-----------------+-----------------------------------------------------------------------+
| **SciPy**       | ``scipy.stats.poisson(lam)``                                          |
+-----------------+-----------------------------------------------------------------------+
| **Stan**        | ``poisson(lam)``                                                      |
+-----------------+-----------------------------------------------------------------------+


----


Related distributions
---------------------

- In the limit of :math:`N\to\infty` and :math:`\theta\to 0` such that the quantity :math:`N\theta` is fixed, the :ref:`binomial` becomes a Poisson distribution with parameter :math:`\lambda = N\theta`. Thus, for large :math:`N` and small :math:`\theta`, the Binomial distribution is well-approximating by the Poisson distribution. Considering the biological example of mutations, this is Binomially distributed: There are :math:`N` bases, each with a probability :math:`\theta` of mutation, so the number of mutations, :math:`n` is Binomially distributed. Since :math:`\theta` is small and :math:`N` is large, it is approximately Poisson distributed.
- Under the :math:`(\mu,\phi)` parametrization of the :ref:`negative_binomial`, taking the limit of large :math:`\phi` yields the Poisson distribution.


----


PMF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('poisson', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Poisson_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.poisson.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.poisson.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/poisson.html>`_