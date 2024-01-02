.. _student_t:

Student-t distribution
=========================


----


Story
-----

The story of the Student-t distribution largely derives from its relationships with other distributions. One way to think about it is as like the :ref:`normal` with heavier tails.


----

Parameters
----------

The Student-t distribution is symmetrically peaked, and its peak is located at :math:`\mu`, the location paramter. The peak's width is dictated by scale parameter :math:`\sigma`, which is positive. Finally, the shape parameter, called "degrees of freedom," is :math:`\nu`. This last parameter imparts the distribution with heavy tails for small :math:`\nu`.

----


Support
-------

The Student-t distribution is supported on the set of real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\nu, \mu, \sigma) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)\sqrt{\pi \nu \sigma^2}}\left(1 + \frac{(y-\mu)^2}{\nu \sigma^2}\right)^{-\frac{\nu + 1}{2}},
	\end{align}

where :math:`\Gamma(x)` denote a :ref:`gamma function <Gamma function>`.


----

Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\nu, \mu, \sigma) = \left\{\begin{array}{lll}
    \displaystyle{1 - \frac{1}{2}I_{\nu/x^2 + \nu}\left(\frac{\nu}{2}, \frac{1}{2}\right)} & & \text{for }\displaystyle{x = \frac{y-\mu}{\sigma} \le 0},\\[0.5em]
    \displaystyle{\frac{1}{2}I_{\nu/x^2 + \nu}\left(\frac{\nu}{2}, \frac{1}{2}\right)} & & \text{for }\displaystyle{x = \frac{y-\mu}{\sigma} > 0},
    \end{array}
    \right.
    \end{align}

where :math:`I_x(a, b)` denotes the :ref:`regularized incomplete beta function <Regularized incomplete beta function>`.


----

Moments
-------

Mean: :math:`\mu` for :math:`\nu > 1`, otherwise undefined.

Variance: :math:`\displaystyle{\frac{\nu}{\nu - 2}}\,\sigma^2` for :math:`\nu > 2`. If :math:`1 < \nu < 2`, then the variance is infinite. If :math:`\nu \le 1`, the variance is undefined.


----


Usage
-----

+-------------------------------+--------------------------------------------+
| Package                       | Syntax                                     |
+===============================+============================================+
| **NumPy**                     | ``mu + sigma * rng.standard_t(nu)``        |
+-------------------------------+--------------------------------------------+
| **SciPy**                     | ``scipy.stats.t(nu, mu, sigma)``           |
+-------------------------------+--------------------------------------------+
| **Stan**                      | ``student_t(nu, mu, sigma)``               |
+-------------------------------+--------------------------------------------+
| **Distributions.jl rng**      | ``mu .+ sigma .* rand(TDist(nu))``         |
+-------------------------------+--------------------------------------------+
| **Distributions.jl sampling** | ``x0 ~ TDist(nu); x = mu + sigma * x0``    |
+-------------------------------+--------------------------------------------+

----


Related distributions
---------------------

- In the :math:`\nu \to \infty` limit, the Student-t distribution becomes a :ref:`normal`.
- The :ref:`cauchy` distribution is a special case of the Student-t distribution in which :math:`\nu = 1`.
- We get this distribution whenever we marginalize an unknown :math:`\sigma` out of a :ref:`normal` with an improper prior on :math:`\sigma` of :math:`1/\sigma`.


----


Notes
-----

- Only the standard Student-t distribution (:math:`\mu = 0` and :math:`\sigma = 1`) is available in NumPy. You can still draw out of the Student-t distribution by performing a transformation on the samples out of the standard Student-t distribution, as shown in the usage, above. The same is true for Distributions.jl. Shown is an example where :math:`x` random numbers are drawn from the distribution and transformed using broadcasting.

----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('student_t', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Student%27s_t-distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.standard_t.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.t.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.TDist>`_
- `Stan <https://mc-stan.org/docs/functions-reference/student-t-distribution.html>`_
