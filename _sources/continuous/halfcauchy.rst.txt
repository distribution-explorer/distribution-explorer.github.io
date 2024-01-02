.. _half_cauchy:

Half-Cauchy distribution
=========================


----


Story
-----

The Half-Cauchy distribution is a :ref:`cauchy` truncated to only have nonzero probability density for values greater than or equal to the location of the peak.


----


Parameters
----------

The Half-Cauchy distribution has a location parameter :math:`\mu`, which may take on any real value, though :math:`\mu = 0` for most applications. The peak's width is dictated by a positive scale parameter :math:`\sigma`.


----


Support
-------

The Half-Cauchy distribution is supported on the set of all real numbers that are greater than or equal to :math:`\mu`, that is on :math:`[\mu, \infty)`.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \sigma) = \frac{2}{\pi \sigma}\,\frac{1}{1 + (y-\mu)^2/\sigma^2}.
	\end{align}

Note that the distribution is only supported for :math:`y \ge \mu`.

----


Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\mu, \sigma) = \left\{\begin{array}{cll}
    \displaystyle{\frac{2}{\pi}\,\arctan\left(\frac{y-\mu}{\sigma}\right)} &  & y \ge \mu \\[1em]
    0 & & \text{otherwise}.
    \end{array}\right.
    \end{align}

----


Moments
-------

Mean: Undefined

Variance: Undefined


----


Usage
-----

+----------------------+-----------------------------------------------------------+
| Package              | Syntax                                                    |
+======================+===========================================================+
| **NumPy**            | ``mu + np.abs(sigma * rng.standard_cauchy())``            |
+----------------------+-----------------------------------------------------------+
| **SciPy**            | ``scipy.stats.halfcauchy(mu, sigma)``                     |
+----------------------+-----------------------------------------------------------+
| **Distributions.jl** | ``truncated(Cauchy(mu, sigma); lower=mu)``                |
+----------------------+-----------------------------------------------------------+
| **Stan sampling**    | ``real<lower=mu> y; y ~ cauchy(mu, sigma)``               |
+----------------------+-----------------------------------------------------------+
| **Stan rng**         | ``real<lower=mu> y; y = mu + fabs(cauchy_rng(0, sigma))`` |
+----------------------+-----------------------------------------------------------+

----


Related distributions
---------------------

- The :ref:`cauchy` distribution is obviously closely related. The Half-Cauchy is simply a truncated Cauchy distribution where only values at the peak or to its right have nonzero probability density.
- The Half-Cauchy distribution is the :math:`\nu = 1` special case of the :ref:`half_student_t`.


----


Notes
-----

- In Stan, a Half-Cauchy is defined by putting a lower bound of :math:`\mu` on the variable and then using a Cauchy distribution with location parameter :math:`\mu`.
- The Half-Cauchy distribution with :math:`\mu = 0` is a useful prior for nonnegative parameters that may be very large, as allowed by the very heavy tails of the Half-Cauchy distribution.


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('halfcauchy', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Cauchy_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.standard_cauchy.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.halfcauchy.html#scipy.stats.halfcauchy>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Cauchy>`_
- `Stan <https://mc-stan.org/docs/functions-reference/cauchy-distribution.html>`_
