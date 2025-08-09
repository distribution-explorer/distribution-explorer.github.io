.. _double_exponential:

Double Exponential (Laplace) distribution
=========================================


----


Story
-----

The difference in waiting times for the arrival of a Poisson process is Double-Exponentially (a.k.a. Laplace) distributed (with location parameter :math:`\mu = 0`).


----


Example
-------

The difference in waiting times between repressor-operator binding events.


----

Parameters
----------

The Double Exponential has a location parameter :math:`\mu`, which may take on any real value, and a positive scale parameter :math:`\sigma`.

----


Support
-------

The Double Exponential distribution is supported on the set of real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \sigma) = \frac{1}{2\sigma}\,\mathrm{e}^{-\lvert y-\mu\rvert/\sigma}.
	\end{align}

----


Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\mu, \sigma) = \frac{1}{2} + \frac{1}{2}\text{sgn}(y-\mu)\left(1 - \mathrm{e}^{-\lvert y-\mu \rvert/\sigma}\right),
    \end{align}

where :math:`\text{sgn}(x)` denotes the sign of :math:`x`.

----


Moments
-------

Mean: :math:`\mu`

Variance: :math:`2\sigma^2`


----


Usage
-----

+----------------------+-------------------------------------+
| Package              | Syntax                              |
+======================+=====================================+
| **NumPy**            | ``rng.laplace(mu, sigma)``          |
+----------------------+-------------------------------------+
| **SciPy**            | ``scipy.stats.laplace(mu, sigma)``  |
+----------------------+-------------------------------------+
| **Distributions.jl** | ``Laplace(mu, sigma)``              |
+----------------------+-------------------------------------+
| **Stan**             | ``double_exponential(mu, sigma)``   |
+----------------------+-------------------------------------+

----


Related distributions
---------------------

- Consider a parameter :math:`\alpha` drawn from an :ref:`exponential`, :math:`\alpha \sim \text{Expon}(1/2\sigma^2)`, and :math:`y` drawn from a :ref:`normal`, :math:`y\sim \text{Norm}(\mu, \sqrt{\alpha})`. Then, :math:`y\sim \text{DoubleExpon}(\mu, \sigma)`.
- Consider :math:`x` and :math:`y`, both drawn from the same Exponential distribution; :math:`x \sim \text{Expon}(\beta)` and :math:`y \sim \text{Expon}(\beta)`. Then :math:`x-y \sim \text{DoubleExpon}(1/\beta)`.


----


Notes
-----

- The Double Exponential distribution is often referred to as the Laplace distribution, named for `Pierre-Simon <https://en.wikipedia.org/wiki/Pierre-Simon_Laplace>`_.
- When `LASSO regression <https://en.wikipedia.org/wiki/Lasso_(statistics)>`_ is considered in a Bayesian context, the priors on the regression parameters are Double Exponential.

----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('double_exponential', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Laplace_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.laplace.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.laplace.html#scipy.stats.laplace>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Laplace>`_
- `Stan <https://mc-stan.org/docs/functions-reference/unbounded_continuous_distributions.html#double-exponential-laplace-distribution>`_
