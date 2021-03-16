.. _half_normal:

Half-Normal distribution
=========================


----


Story
-----

The Half-Normal distribution is a :ref:`normal` truncated to only have nonzero probability density for values greater than or equal to the location of the peak.


----


Parameters
----------

The Half-Normal distribution is parametrized by a positive scale parameter :math:`\sigma` and a location parameter :math:`\mu`. In most applications, :math:`\mu = 0`.


----


Support
-------

The Half-Normal distribution is supported on the set of all real numbers that are greater than or equal to :math:`\mu`, that is on :math:`[\mu, \infty)`.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \sigma) = \left\{\begin{array}{cll}
    \sqrt{\frac{2}{\pi\sigma^2}}\,\mathrm{e}^{-(y-\mu)^2/2\sigma^2} &  & y \ge \mu \\[1em]
    0 & & \text{otherwise}.
    \end{array}\right.
	\end{align}

----


Moments
-------

Mean: :math:`\displaystyle{\mu + \sqrt{\frac{2\sigma^2}{\pi}}}`

Variance: :math:`\displaystyle{\left(1 - \frac{2}{\pi}\right)\sigma^2}`


----


Usage
-----

+--------------------+-----------------------------------------------------------+
| Package            | Syntax                                                    |
+====================+===========================================================+
| **NumPy**          | ``mu + np.abs(rg.normal(0, sigma)``                       |
+--------------------+-----------------------------------------------------------+
| **SciPy**          | ``scipy.stats.halfnorm(mu, sigma)``                       |
+--------------------+-----------------------------------------------------------+
| **Stan sampling**  | ``real<lower=mu> y; y ~ normal(mu, sigma)``               |
+--------------------+-----------------------------------------------------------+
| **Stan rng**       | ``real<lower=mu> y; y = mu + fabs(normal_rng(0, sigma))`` |
+--------------------+-----------------------------------------------------------+


----


Related distributions
---------------------

- The :ref:`normal`, distribution is obviously closely related. The Half-Normal is simply a truncated Normal distribution where only values at the peak or to its right have nonzero probability density.
- The Half-Normal distribution is the :math:`\nu\to\infty` limit of the :ref:`half_student_t`.


----


Notes
-----

- In Stan, a Half-Normal is defined by putting a lower bound of :math:`\mu` on the variable and then using a Normal distribution with location parameter :math:`\mu`.
- The Half-Normal distribution with :math:`\mu = 0` is a useful prior for nonnegative parameters that should not be too large and may be very close to zero.


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('halfnormal', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Half-normal_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.normal.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.halfnorm.html#scipy.stats.halfnorm>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/normal-distribution.html>`_
