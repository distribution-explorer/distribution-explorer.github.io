.. _half_student_t:

Half-Student-t distribution
=========================


----


Story
-----

The Half-Student-t distribution is a :ref:`student_t` truncated to only have nonzero probability density for values greater than or equal to the location of the peak.


----


Parameters
----------

The Half-Student-t distribution is peaked at its location parameter :math:`\mu`. The peak's width is dictated by scale parameter :math:`\sigma`, which is positive. Finally, the shape parameter, called "degrees of freedom," is :math:`\nu`. This last parameter imparts the distribution with a heavy tail for small :math:`\nu`.


----


Support
-------

The Half-Student-t distribution is supported on the set of all real numbers that are greater than or equal to :math:`\mu`, that is on :math:`[\mu, \infty)`.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\mu, \sigma) = \left\{\begin{array}{cll}
    \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)\sqrt{\pi \nu \sigma^2}}\left(1 + \frac{(y-\mu)^2}{\nu \sigma^2}\right)^{-\frac{\nu + 1}{2}} &  & y \ge \mu \\[1em]
    0 & & \text{otherwise}.
    \end{array}\right.
	\end{align}

----


Moments
-------

Mean: :math:`\mu + 2\sigma\sqrt{\frac{\nu}{\pi}}\,\frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)(\nu-1)}` for :math:`\nu > 1`, otherwise undefined.

Variance: :math:`\sigma^2\left(\frac{\nu}{\nu - 2}-\frac{4\nu}{\pi(\nu-1)^2}\left(\frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)}\right)^2\right)` for :math:`\nu > 2`. If :math:`1 < \nu < 2`, then the variance is infinite. If :math:`\nu \le 1`, the variance is undefined.


----


Usage
-----

+--------------------+-------------------------------------------------------------+
| Package            | Syntax                                                      |
+====================+=============================================================+
| **NumPy**          | ``mu + sigma * np.abs(rg.standard_t(nu))``                  |
+--------------------+-------------------------------------------------------------+
| **SciPy sampling** | ``mu + np.abs(scipy.stats.t.rvs(nu, 0, sigma))``            |
+--------------------+-------------------------------------------------------------+
| **Stan sampling**  | ``real<lower=mu> y; y ~ student_t(nu, mu, sigma)``          |
+--------------------+-------------------------------------------------------------+
| **Stan rng**       | ``real<lower=mu> y; y = mu + abs(student_t(nu, 0, sigma))`` |
+--------------------+-------------------------------------------------------------+


----


Related distributions
---------------------

- The :ref:`student_t`, distribution is obviously closely related. The Half-Student-t is simply a truncated Student-t distribution where only values at the peak or to its right have nonzero probability density.
- In the :math:`\nu \to \infty` limit, the Half-Student-t distribution becomes a :ref:`half_normal`.
- The :ref:`half_cauchy` distribution is a special case of the Half-Student-t distribution in which :math:`\nu = 1`.



----


Notes
-----

- In Stan, a Half-Student-t is defined by putting a lower bound of :math:`\mu` on the variable and then using a Student-t distribution with location parameter :math:`\mu`.
- Only the standard Student-t distribution (:math:`\mu = 0` and :math:`\sigma = 1`) is available in NumPy. You can still draw out of the Half-Student-t distribution by performing a transformation on the samples out of the standard Student-t distribution, as shown in the usage, above.
- The Half-Student-t distribution is not available in SciPy. To compute the PDF for :math:`y \ge \mu`, use ``2 * scipy.stats.t.pdf(y, nu, mu, sigma)``. To compute the CDF for :math:`y \ge \mu`, use ``2 * scipy.stats.t.cdf(y, nu, mu, sigma) - 1``.
- The Half-Student-t distribution with :math:`\mu = 0` is a useful prior for nonnegative parameters. The parameter :math:`\nu` of the Half-Student-t can be tuned to allow for a heavy tail (:math:`\nu` close to 1) or a light tail (large :math:`\nu`).


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('halfstudent_t'))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Folded-t_and_half-t_distributions>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.standard_t.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.t.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/student-t-distribution.html>`_
