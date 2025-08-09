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

The number of mutations in a strand of DNA per unit length (since mutations are rare) is Poisson distributed.


----


Parameters
----------

The single parameter is the rate :math:`\lambda` of arrivals of the Poisson process.


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


Cumulative distribution function
--------------------------------

The CDF evaluated at nonnegative integer :math:`n` is

.. math::

    \begin{align}
    F(n;\lambda) = \frac{\Gamma(n + 1, \lambda)}{n!},
    \end{align}

where :math:`\Gamma(n + 1, \lambda)` is the :ref:`upper incomplete gamma function <Upper incomplete gamma function>`.


----


Moments
-------

Mean: :math:`\lambda`

Variance: :math:`\lambda`


----


Usage
-----

+-----------------------+-----------------------------------------------------------------------+
| Package               | Syntax                                                                |
+=======================+=======================================================================+
| **NumPy**             | ``rng.poisson(lam)``                                                  |
+-----------------------+-----------------------------------------------------------------------+
| **SciPy**             | ``scipy.stats.poisson(lam)``                                          |
+-----------------------+-----------------------------------------------------------------------+
| **Distributions.jl**  | ``Poisson(lam)``                                                      |
+-----------------------+-----------------------------------------------------------------------+
| **Stan**              | ``poisson(lam)``                                                      |
+-----------------------+-----------------------------------------------------------------------+


----


Related distributions
---------------------

- In the limit of :math:`N\to\infty` and :math:`\theta\to 0` such that the quantity :math:`N\theta` is fixed, the :ref:`binomial` becomes a :ref:`poisson` with parameter :math:`\lambda = N\theta`. Thus, for large :math:`N` and small :math:`\theta`, the Binomial distribution is well-approximated by the Poisson distribution. Considering the biological example of mutations, this is Binomially distributed: There are :math:`N` bases, each with a probability :math:`\theta` of mutation, so the number of mutations, :math:`n` is Binomially distributed. Since :math:`\theta` is small and :math:`N` is large, it is approximately Poisson distributed.
- Under the :math:`(\mu,\phi)` parametrization of the :ref:`negative_binomial`, taking the limit of large :math:`\phi` yields the Poisson distribution.


----

Notes
-----

- Consider :math:`K` Poisson processes with arrival rates :math:`\lambda_1`, :math:`\lambda_2`, ..., :math:`\lambda_K`. Let

  .. math::
  
      \begin{align}
      \lambda = \sum_{i=1}^K \lambda_i.
      \end{align}
  
  If :math:`N` is the total number of arrivals of these :math:`K` Poisson processes, :math:`N \sim \text{Poisson}(\lambda)`.


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
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Poisson>`_
- `Stan <https://mc-stan.org/docs/functions-reference/poisson.html>`_