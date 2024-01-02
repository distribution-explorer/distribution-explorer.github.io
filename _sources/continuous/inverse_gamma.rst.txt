.. _inverse_gamma:

Inverse Gamma distribution
==========================


----


Story
-----

If :math:`Y` is :ref:`Gamma distributed <gamma>`, then :math:`1/Y` is Inverse Gamma distributed.

----

Parameters
----------

The number of arrivals, :math:`\alpha`, and the rate of arrivals, :math:`\beta`.

----


Support
-------

The Inverse Gamma distribution is supported on the set of positive real numbers.


----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\alpha, \beta) = \frac{1}{\Gamma(\alpha)}\,\frac{\beta^\alpha}{y^{\alpha+1}} \,\mathrm{e}^{-\beta / y},
	\end{align}

where :math:`\Gamma(\alpha)` is :ref:`the gamma function <Gamma function>`.

----

Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\alpha, \beta) = Q(\alpha, \beta/x),
    \end{align}

a :ref:`regularized upper incomplete gamma function <Regularized upper incomplete gamma function>`.

----

Moments
-------

Mean: :math:`\displaystyle{\frac{\beta}{\alpha - 1}}` for :math:`\alpha > 1`; for :math:`\alpha \le 1`, the mean is undefined.
 
Variance: :math:`\displaystyle{\frac{\beta^2}{(\alpha-1)^2(\alpha-2)}}` for :math:`\alpha > 2`; for :math:`\alpha \le 2`, the variance is undefined.


----


Usage
-----

+----------------------+----------------------------------------------------+
| Package              | Syntax                                             |
+======================+====================================================+
| **NumPy**            | ``1 / rng.gamma(alpha, 1/beta)``                   |
+----------------------+----------------------------------------------------+
| **SciPy**            | ``scipy.stats.invgamma(alpha, loc=0, scale=beta)`` |
+----------------------+----------------------------------------------------+
| **Distributions.jl** | ``InverseGamma(alpha, beta)``                      |
+----------------------+----------------------------------------------------+
| **Stan**             | ``inv_gamma(alpha, beta)``                         |
+----------------------+----------------------------------------------------+

----


Related distributions
---------------------

- As described in the story, the Inverse Gamma distribution and :ref:`gamma` are related. If Y is Gamma distributed, then 1/Y is Inverse Gamma distributed.

----


Notes
-----

- The Inverse Gamma distribution is useful as a prior for positive parameters. It imparts a quite heavy tail and keeps probability further from zero than the :ref:`gamma`.
- NumPy module does not have a function to sample directly from the Inverse Gamma distribution, but it can be achieved by sampling out of a Gamma distribution and then taking the inverser, as shown in the NumPy usage above.

----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('inverse_gamma', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Inverse-gamma_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.gamma.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.invgamma.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.InverseGamma>`_
- `Stan <https://mc-stan.org/docs/functions-reference/inverse-gamma-distribution.html>`_
