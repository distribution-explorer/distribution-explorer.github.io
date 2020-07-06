.. _pareto:

Pareto distribution
===================


----


Story
-----

There is no real story to the Pareto distribution, except that it is a distribution where the tail of the PDF or PMF follows a power law (:math:`f(y) \sim y^{-\alpha-1}`). Such distributions often arise in physical scenarios.

----


Example
-------

The `Gutenberg-Richter Law <https://en.wikipedia.org/wiki/Gutenberg–Richter_law>`_ says that the magnitudes of earthquakes in a given region are Pareto distributed. Other random variables that are often described by power laws include size of human settlement (many small towns, a few huge cities), income distribution (many poor, few obscenely rich).


----

Parameters
----------

The Pareto distribution has two paramters, :math:`\alpha` and :math:`y_\mathrm{min}`. The parameter :math:`\alpha` sets the power in the power law and :math:`y_\mathrm{min}` is a lower cutoff to ensure that the distribution is normalizable. Both :math:`\alpha` and :math:`y_\mathrm{min}` must be positive.

----


Support
-------

The Pareto distribution has support on real numbers greater than or equal to :math:`y_\mathrm{min}`.



----


Probability density function
----------------------------

.. math::

	\begin{align}
	f(y;y_\mathrm{min}, \alpha) = \frac{\alpha}{y} \,\left(\frac{y_\mathrm{min}}{y}\right)^\alpha.
	\end{align}


----


Moments
-------

Mean: The mean is infinite for :math:`\alpha \le 1` and :math:`\displaystyle{\frac{\alpha y_\mathrm{min}}{\alpha - 1}}` for :math:`\alpha > 1`.

Variance: The variance is infinite for :math:`\alpha \le 2` and :math:`\displaystyle{\frac{\alpha y_\mathrm{min}^2}{(\alpha - 1)^2(\alpha - 2)}}` for :math:`\alpha > 2`.


----

Usage
-----

+-----------------+---------------------------------------------+
| Package         | Syntax                                      |
+=================+=============================================+
| **NumPy**       | ``y_min * (1 + rg.pareto(alpha))``          |
+-----------------+---------------------------------------------+
| **SciPy**       | ``scipy.stats.pareto(alpha, scale=y_min)``  |
+-----------------+---------------------------------------------+
| **Stan**        | ``pareto(y_min, alpha)``                    |
+-----------------+---------------------------------------------+


----


Notes
-----

- A Pareto distribution is sometimes referred to as a power law distribution. Generically, a distribution is said to be a power law distribution if its tail decays like :math:`y^{-\beta}` for some positive :math:`\beta`.
- The Type II Pareto distribution is often used. It is a Pareto distribution, except with a redefinition of :math:`y \to y - \mu + y_\mathrm{min}`. This shifts :math:`y` such that its support starts at :math:`y=\mu`. In the case there :math:`\mu = 0`, the Type II distribution is called a Lomax distribution. NumPy's Pareto sample samples out of a Lomax distirbution with :math:`y_\mathrm{min}` set to one. Thus, to sample out of a Pareto distribution, the transformations described in the usage table above are necessary. To use a Type II Pareto distribution in Stan, :math:`y_\mathrm{min}` is renamed :math:`\lambda`, and the syntax is ``pareto_type_2(mu, lambda, alpha)``.
- The Pareto distribution is often best visualized by plotting the complementary cumulative distribution function (CCDF), denoted :math:`\bar{F}(y)`, which is related to the CDF :math:`F(y)` by :math:`\bar{F}(y) = 1 - F(y)`. The CCDF for a Pareto distribution is

.. math::

    \begin{align}
    \bar{F}(y) = \left\{\begin{array}{lll}
    \left(\frac{y_\mathrm{min}}{y}\right)^\alpha & & y \ge y_\mathrm{min} \\
    1 & & y < y_\mathrm{min}
    \end{array}
    \right.
    \end{align}

Thus, the power law is clear. A plot of the CCDF on a log-log plot yields a line with slope equal to :math:`-\alpha`, as show below for :math:`y_\mathrm{min} = 1` and :math:`\alpha = 2`.

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import bokeh.plotting
    import numpy as np

    x = np.array([0.1, 1, 1e3])
    y = np.array([1, 1, 1e-6])

    p = bokeh.plotting.figure(frame_height=150, frame_width=200, x_axis_type='log', y_axis_type='log', x_axis_label='y', y_axis_label='CCDF', tools="save", x_range=[1e-1, 1e3])
    p.line(x, y, line_width=2)
    bokeh.io.show(p)


----


PDF and CDF plots
-----------------

.. bokeh-plot::
    :source-position: none

    import bokeh.io
    import distribution_explorer

    bokeh.io.show(distribution_explorer.explore('pareto'))

----

Links
-----

- `Wikipedia <https://en.wikipedia.org/wiki/Pareto_distribution>`_
- `Numpy <https://docs.scipy.org/doc/numpy/reference/random/generated/numpy.random.Generator.pareto.html>`_
- `Scipy <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pareto.html>`_
- `Stan <https://mc-stan.org/docs/2_21/functions-reference/pareto-distribution.html>`_
