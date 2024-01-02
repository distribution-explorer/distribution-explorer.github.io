.. _weibull:

Weibull distribution
====================


----


Story
-----

The quantity :math:`y^\alpha` is Weibull distributed if :math:`y` is Exponentially distributed. Like the :ref:`exponential`, it describes waiting times for arrival of a process. For :math:`\alpha > 1`, the longer we have waited, the more likely the event is to arrive, and vice versa for :math:`\alpha < 1`.


----


Example
-------

This is a model for aging. The longer an organism lives, the more likely it is to die.


----

Parameters
----------

There are two parameters, both strictly positive: the shape parameter :math:`\alpha`, which dictates the shape of the curve, and the scale parameter :math:`\sigma`, which dictates the rate of arrivals of the modeled process.

----


Support
-------

The Weibull distribution has support on the nonnegative real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\alpha, \sigma) = \frac{\alpha}{\sigma}\left(\frac{y}{\sigma}\right)^{\alpha - 1}\,\mathrm{e}^{-(y/\sigma)^\alpha}.
	\end{align}


----

Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\alpha, \sigma) = 1 - \mathrm{e}^{-(x/\sigma)^\alpha}.
    \end{align}


----

Moments
-------

Mean: :math:`\displaystyle{\sigma \Gamma(1 + 1/\alpha)}`

Variance: :math:`\displaystyle{\sigma^2\left[\Gamma(1+2/\alpha) - \left(\Gamma(1 + 1/\alpha)\right)^2\right]}`


----

Usage
-----

+----------------------+---------------------------------------------------------+
| Package              | Syntax                                                  |
+======================+=========================================================+
| **NumPy**            | ``sigma * rng.weibull(alpha)``                          |
+----------------------+---------------------------------------------------------+
| **SciPy**            | ``scipy.stats.weibull_min(alpha, loc=0, scale=sigma)``  |
+----------------------+---------------------------------------------------------+
| **Distributions.jl** | ``Weibull(alpha, sigma)``                               |
+----------------------+---------------------------------------------------------+
| **Stan**             | ``weibull(alpha, sigma)``                               |
+----------------------+---------------------------------------------------------+

----


Related distributions
---------------------

- The special case where :math:`\alpha = 1` is the :ref:`exponential` with rate parameter :math:`\beta = 1/\sigma`.

----


Notes
-----

- SciPy has a location parameter, which should be set to zero, with :math:`\sigma` being the scale parameter.
- NumPy only provides a version of the Weibull distribution with :math:`\sigma = 1`. Sampling out of the Weibull distribution may be accomplished by multiplying the resulting samples by :math:`\sigma`.

----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('weibull', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Weibull_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.weibull.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.weibull_min.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Weibull>`_
- `Stan <https://mc-stan.org/docs/functions-reference/weibull-distribution.html>`_
