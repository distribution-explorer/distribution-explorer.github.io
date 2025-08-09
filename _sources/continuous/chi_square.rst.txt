.. _chi_square:

Chi-square distribution
========================


----


Story
-----

The sum of the squares of :math:`\nu` Standard-Normally distributed variables is Chi-square distributed. The distribution generalizes to non-integer :math:`\nu`.

----


Example
-------

The Chi-square distribution is seldom useful in modeling contexts; it is typically used in null hypothesis significance testing where it arises in analytical treatments of specific tests.


----

Parameter
---------

The Chi-square distribution has a single positive parameter, :math:`\nu`.

----


Support
-------

The Chi-square distribution is supported on the set of positive real numbers.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;\nu) = \frac{1}{\Gamma(\nu/2)}\,\frac{(y/2)^{\nu/2}}{y} \,\mathrm{e}^{-y/2},
	\end{align}

where :math:`\Gamma(x)` is the :ref:`gamma function <Gamma function>`.

----


Cumulative distribution function
--------------------------------

.. math::

    \begin{align}
    F(y;\nu) = P(\nu/2, y/2),
    \end{align}

a :ref:`regularized lower incomplete gamma function <Regularized lower incomplete gamma function>`.

----


Moments
-------

Mean: :math:`\nu`


Variance: :math:`2\nu`


----


Usage
-----

+----------------------+----------------------------------------------------+
| Package              | Syntax                                             |
+======================+====================================================+
| **NumPy**            | ``rng.chisquare(nu)``                              |
+----------------------+----------------------------------------------------+
| **SciPy**            | ``scipy.stats.chi2(nu)``                           |
+----------------------+----------------------------------------------------+
| **Distributions.jl** | ``Chisq(nu)``                                      |
+----------------------+----------------------------------------------------+
| **Stan**             | ``chi_square(nu)``                                 |
+----------------------+----------------------------------------------------+

----


Related distributions
---------------------

- The Chi-square distribution is a special case of the :ref:`gamma` where :math:`\alpha = \nu/2` and :math:`\beta = 1/2`.
- In the case there :math:`\nu = 2`, the Chi-square distribution is an :ref:`exponential` with :math:`\beta = 1/2`.
- In the limit of large :math:`nu`, the Chi-square distribution is approximately a :ref:`normal` with :math:`\mu = \nu` and :math:`\sigma = \sqrt{2\nu}`.


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('chi_square', background_fill_alpha=0, border_fill_alpha=0))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Chi-squared_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.chisquare.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chi2.html>`_
- `Distributions.jl <https://juliastats.org/Distributions.jl/stable/univariate/#Distributions.Chisq>`_
- `Stan <https://mc-stan.org/docs/functions-reference/positive_continuous_distributions.html#chi-square-distribution>`_
